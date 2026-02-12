/**
 * Text transformation utilities for converting normal text to various Unicode styles
 */

// Character mapping tables for different styles
const charMaps = {
  vaporwave: {
    from: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ',
    to: 'ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ０１２３４５６７８９　'
  },
  bubble: {
    from: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
    to: 'ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ⓪①②③④⑤⑥⑦⑧⑨'
  },
  bubbleFilled: {
    from: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
    to: '🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩⓿❶❷❸❹❺❻❼❽❾'
  },
  gothic: {
    from: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
    to: '𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷'
  },
  gothicBold: {
    from: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
    to: '𝕬𝕭𝕮𝕯𝕰𝕱𝕲𝕳𝕴𝕵𝕶𝕷𝕸𝕹𝕺𝕻𝕼𝕽𝕾𝕿𝖀𝖁𝖂𝖃𝖄𝖅𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟'
  },
  bold: {
    from: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
    to: '𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗'
  },
  italic: {
    from: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
    to: '𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻'
  },
  boldItalic: {
    from: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
    to: '𝘼𝘽𝘾𝘿𝙀𝙁𝙂𝙃𝙄𝙅𝙆𝙇𝙈𝙉𝙊𝙋𝙌𝙍𝙎𝙏𝙐𝙑𝙒𝙓𝙔𝙕𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯'
  },
  monospace: {
    from: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
    to: '𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿'
  },
  smallCaps: {
    from: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
    to: 'ᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢ'
  },
  script: {
    from: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
    to: '𝒜ℬ𝒞𝒟ℰℱ𝒢ℋℐ𝒥𝒦ℒℳ𝒩𝒪𝒫𝒬ℛ𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵𝒶𝒷𝒸𝒹ℯ𝒻ℊ𝒽𝒾𝒿𝓀𝓁𝓂𝓃ℴ𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏'
  },
  scriptBold: {
    from: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
    to: '𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃'
  },
  doubleStruck: {
    from: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
    to: '𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡'
  },
  squared: {
    from: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
    to: '🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉'
  },
  squaredFilled: {
    from: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
    to: '🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉'
  },
  parenthesized: {
    from: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
    to: '🄐🄑🄒🄓🄔🄕🄖🄗🄘🄙🄚🄛🄜🄝🄞🄟🄠🄡🄢🄣🄤🄥🄦🄧🄨🄩⒜⒝⒞⒟⒠⒡⒢⒣⒤⒥⒦⒧⒨⒩⒪⒫⒬⒭⒮⒯⒰⒱⒲⒳⒴⒵'
  },
  upsideDown: {
    from: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!?.\'",',
    to: '∀ᗺƆᗡƎℲ⅁HIſ⋊˥WNOԀꝹᴚS⊥∩ΛMX⅄Zɐqɔpǝɟᵷɥᴉɾʞlɯuodbɹsʇnʌʍxʎz0ƖᄅƐㄣϛ9ㄥ86¡¿˙,„\''
  },
  currency: {
    from: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
    to: '₳฿₵ĐɆ₣₲ⱧłJ₭Ⱡ₥₦Ø₱QⱤ₴₮ɄV₩ӾɎⱫ₳฿₵ĐɆ₣₲ⱧłJ₭Ⱡ₥₦Ø₱QⱤ₴₮ɄV₩ӾɎⱫ'
  },
  superscript: {
    from: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
    to: 'ᴬᴮᶜᴰᴱᶠᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾQᴿˢᵀᵁⱽᵂˣʸᶻᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖqʳˢᵗᵘᵛʷˣʸᶻ⁰¹²³⁴⁵⁶⁷⁸⁹'
  },
  subscript: {
    from: 'aehijklmnoprstuvx0123456789',
    to: 'ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓ₀₁₂₃₄₅₆₇₈₉'
  }
};

export type TextStyle =
  | 'vaporwave'
  | 'bubble'
  | 'bubbleFilled'
  | 'gothic'
  | 'gothicBold'
  | 'bold'
  | 'italic'
  | 'boldItalic'
  | 'monospace'
  | 'smallCaps'
  | 'script'
  | 'scriptBold'
  | 'doubleStruck'
  | 'squared'
  | 'squaredFilled'
  | 'parenthesized'
  | 'strikethrough'
  | 'underline'
  | 'sparkle'
  | 'upsideDown'
  | 'currency'
  | 'superscript'
  | 'wideSpaced';

/**
 * Transform text to a specific Unicode style
 */
export function transformText(text: string, style: TextStyle): string {
  if (!text) return '';

  switch (style) {
    case 'vaporwave':
      return mapCharacters(text, charMaps.vaporwave);

    case 'bubble':
      return mapCharacters(text, charMaps.bubble);

    case 'bubbleFilled':
      return mapCharacters(text, charMaps.bubbleFilled);

    case 'gothic':
      return mapCharacters(text, charMaps.gothic);

    case 'gothicBold':
      return mapCharacters(text, charMaps.gothicBold);

    case 'bold':
      return mapCharacters(text, charMaps.bold);

    case 'italic':
      return mapCharacters(text, charMaps.italic);

    case 'boldItalic':
      return mapCharacters(text, charMaps.boldItalic);

    case 'monospace':
      return mapCharacters(text, charMaps.monospace);

    case 'smallCaps':
      return mapCharacters(text, charMaps.smallCaps);

    case 'script':
      return mapCharacters(text, charMaps.script);

    case 'scriptBold':
      return mapCharacters(text, charMaps.scriptBold);

    case 'doubleStruck':
      return mapCharacters(text, charMaps.doubleStruck);

    case 'squared':
      return mapCharacters(text, charMaps.squared);

    case 'squaredFilled':
      return mapCharacters(text, charMaps.squaredFilled);

    case 'parenthesized':
      return mapCharacters(text, charMaps.parenthesized);

    case 'strikethrough':
      return text.split('').map(char => char === ' ' ? ' ' : char + '\u0336').join('');

    case 'underline':
      return text.split('').map(char => char === ' ' ? ' ' : char + '\u0332').join('');

    case 'sparkle':
      return `✧･ﾟ: *✧･ﾟ:* ${text} *:･ﾟ✧*:･ﾟ✧`;

    case 'upsideDown':
      const reversed = text.split('').reverse().join('');
      return mapCharacters(reversed, charMaps.upsideDown);

    case 'currency':
      return mapCharacters(text, charMaps.currency);

    case 'superscript':
      return mapCharacters(text, charMaps.superscript);

    case 'wideSpaced':
      return text.split('').join(' ');

    default:
      return text;
  }
}

/**
 * Helper function to map characters using a character map
 */
function mapCharacters(text: string, map: { from: string; to: string }): string {
  const fromChars = [...map.from];
  const toChars = [...map.to];

  return [...text].map(char => {
    const index = fromChars.indexOf(char);
    return index >= 0 ? toChars[index] : char;
  }).join('');
}

/**
 * Get display name for a text style
 */
export function getStyleDisplayName(style: TextStyle): string {
  const names: Record<TextStyle, string> = {
    vaporwave: 'Vaporwave',
    bubble: 'Bubble',
    bubbleFilled: 'Bubble Fill',
    gothic: 'Gothic',
    gothicBold: 'Gothic Bold',
    bold: 'Bold',
    italic: 'Italic',
    boldItalic: 'Bold Italic',
    monospace: 'Mono',
    smallCaps: 'Sᴍᴀʟʟ Caps',
    script: 'Script',
    scriptBold: 'Script Bold',
    doubleStruck: 'Double',
    squared: 'Squared',
    squaredFilled: 'Square Fill',
    parenthesized: 'Parenthesis',
    strikethrough: 'Strike',
    underline: 'Underline',
    sparkle: 'Sparkle',
    upsideDown: 'Flip',
    currency: 'Currency',
    superscript: 'Super',
    wideSpaced: 'Wide'
  };
  return names[style];
}

/**
 * Get a preview sample for a text style
 */
export function getStylePreview(style: TextStyle): string {
  return transformText('Abc', style);
}

/**
 * Platform character limits
 */
export const platformLimits = {
  instagram: { name: 'Instagram', limit: 150 },
  twitter: { name: 'Twitter', limit: 160 },
  tiktok: { name: 'TikTok', limit: 80 },
  discord: { name: 'Discord', limit: 190 }
} as const;

export type Platform = keyof typeof platformLimits;

/**
 * Check if text fits within platform character limits
 */
export function checkPlatformCompatibility(text: string): Record<Platform, boolean> {
  const length = [...text].length;
  return {
    instagram: length <= platformLimits.instagram.limit,
    twitter: length <= platformLimits.twitter.limit,
    tiktok: length <= platformLimits.tiktok.limit,
    discord: length <= platformLimits.discord.limit
  };
}

/**
 * Get character count with platform limit context
 */
export function getCharacterStatus(text: string, platform: Platform): {
  current: number;
  limit: number;
  isValid: boolean;
  percentage: number;
} {
  const current = [...text].length;
  const limit = platformLimits[platform].limit;
  return {
    current,
    limit,
    isValid: current <= limit,
    percentage: (current / limit) * 100
  };
}

// Style categories for UI organization
export const styleCategories = {
  basic: ['bold', 'italic', 'boldItalic', 'underline', 'strikethrough'],
  fancy: ['script', 'scriptBold', 'gothic', 'gothicBold', 'doubleStruck'],
  shapes: ['bubble', 'bubbleFilled', 'squared', 'squaredFilled', 'parenthesized'],
  special: ['vaporwave', 'smallCaps', 'monospace', 'currency', 'superscript'],
  fun: ['sparkle', 'upsideDown', 'wideSpaced']
};
