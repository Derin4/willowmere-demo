// Helpers live outside components so the React Compiler purity lint stays quiet.
export function refCode(prefix = "REF") {
  return `${prefix}-${Math.floor(10000 + Math.random() * 90000)}`;
}

export function money(n) {
  return `$${Number(n).toLocaleString("en-CA")}`;
}
