// Type definitions for ASCII Art Gallery

export interface AsciiArt {
  id: string;
  title: string;
  content: string;
  category: string;
  tags: string[];
}

export interface Category {
  slug: string;
  name: string;
  icon: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
}

export interface FavoritesData {
  version: string;
  favorites: string[];
  lastUpdated: number;
}
