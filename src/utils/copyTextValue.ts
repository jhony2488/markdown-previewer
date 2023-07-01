export function copyTextValue(copyTextValue: string) {
  // Copy the text inside the text field
  navigator.clipboard.writeText(copyTextValue);
}
