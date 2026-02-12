/**
 * Image to ASCII Art Converter
 * Converts images to ASCII art using Canvas API and character density mapping
 */

// ASCII characters ordered by visual density (darkest to lightest)
const ASCII_CHARS = '@%#*+=-:. ';

export interface ConversionOptions {
  width: number; // Target width in characters
  invertColors?: boolean; // Invert brightness mapping
}

export interface ConversionResult {
  ascii: string;
  width: number;
  height: number;
}

/**
 * Converts an image file to ASCII art
 * @param file - Image file to convert
 * @param options - Conversion options
 * @returns Promise with ASCII art result
 */
export async function imageToAscii(
  file: File,
  options: ConversionOptions
): Promise<ConversionResult> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const reader = new FileReader();

    reader.onload = (e) => {
      if (!e.target?.result) {
        reject(new Error('Failed to read file'));
        return;
      }

      img.onload = () => {
        try {
          const result = convertImageToAscii(img, options);
          resolve(result);
        } catch (error) {
          reject(error);
        }
      };

      img.onerror = () => {
        reject(new Error('Failed to load image'));
      };

      img.src = e.target.result as string;
    };

    reader.onerror = () => {
      reject(new Error('Failed to read file'));
    };

    reader.readAsDataURL(file);
  });
}

/**
 * Converts an Image element to ASCII art
 * @param img - HTML Image element
 * @param options - Conversion options
 * @returns ASCII art result
 */
function convertImageToAscii(
  img: HTMLImageElement,
  options: ConversionOptions
): ConversionResult {
  const { width: targetWidth, invertColors = false } = options;

  // Calculate height to maintain aspect ratio
  const aspectRatio = img.height / img.width;
  // Adjust for character aspect ratio (characters are typically taller than wide)
  const characterAspectRatio = 0.5;
  const targetHeight = Math.floor(targetWidth * aspectRatio * characterAspectRatio);

  // Create canvas
  const canvas = document.createElement('canvas');
  canvas.width = targetWidth;
  canvas.height = targetHeight;
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    throw new Error('Failed to get canvas context');
  }

  // Draw image to canvas
  ctx.drawImage(img, 0, 0, targetWidth, targetHeight);

  // Get pixel data
  const imageData = ctx.getImageData(0, 0, targetWidth, targetHeight);
  const pixels = imageData.data;

  // Convert pixels to ASCII
  let ascii = '';
  for (let y = 0; y < targetHeight; y++) {
    for (let x = 0; x < targetWidth; x++) {
      const offset = (y * targetWidth + x) * 4;
      const r = pixels[offset];
      const g = pixels[offset + 1];
      const b = pixels[offset + 2];
      const a = pixels[offset + 3];

      // Calculate brightness (0-255)
      // Using luminosity formula for better perceptual accuracy
      const brightness = Math.floor(0.299 * r + 0.587 * g + 0.114 * b);

      // Account for alpha transparency
      const adjustedBrightness = Math.floor((brightness * a) / 255);

      // Map brightness to ASCII character
      const charIndex = brightnessToCharIndex(
        adjustedBrightness,
        invertColors
      );
      ascii += ASCII_CHARS[charIndex];
    }
    ascii += '\n';
  }

  return {
    ascii: ascii.trimEnd(),
    width: targetWidth,
    height: targetHeight,
  };
}

/**
 * Maps brightness value to ASCII character index
 * @param brightness - Brightness value (0-255)
 * @param invert - Whether to invert the mapping
 * @returns Character index
 */
function brightnessToCharIndex(brightness: number, invert: boolean): number {
  const normalized = brightness / 255;
  const charIndex = Math.floor(normalized * (ASCII_CHARS.length - 1));

  if (invert) {
    return ASCII_CHARS.length - 1 - charIndex;
  }

  return charIndex;
}

/**
 * Validates image file
 * @param file - File to validate
 * @returns Validation result with error message if invalid
 */
export function validateImageFile(file: File): { valid: boolean; error?: string } {
  const maxSize = 5 * 1024 * 1024; // 5MB
  const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];

  if (!allowedTypes.includes(file.type)) {
    return {
      valid: false,
      error: 'Invalid file type. Please upload a JPEG, PNG, GIF, or WebP image.',
    };
  }

  if (file.size > maxSize) {
    return {
      valid: false,
      error: 'File too large. Maximum size is 5MB.',
    };
  }

  return { valid: true };
}

/**
 * Downloads ASCII art as text file
 * @param ascii - ASCII art content
 * @param filename - Filename without extension
 */
export function downloadAsciiAsText(ascii: string, filename: string = 'ascii-art'): void {
  const blob = new Blob([ascii], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${filename}.txt`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Copies ASCII art to clipboard
 * @param ascii - ASCII art content
 * @returns Promise that resolves when copied
 */
export async function copyAsciiToClipboard(ascii: string): Promise<void> {
  await navigator.clipboard.writeText(ascii);
}
