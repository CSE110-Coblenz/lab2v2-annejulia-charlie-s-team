export function animateFeature(featureName: string): void {
  const bold = "\x1b[1m";     // ANSI code for bold
  const italic = "\x1b[3m";   // ANSI code for italics
  const reset = "\x1b[0m";    // reset text style

  console.log(`${bold}Perty! Party! Party! - ${italic}${featureName}${reset}`);
}