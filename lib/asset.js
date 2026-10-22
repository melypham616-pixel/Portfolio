// Prefix files in /public with the base path (needed on GitHub Pages project sites).
export const asset = (p) => `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${p}`;
