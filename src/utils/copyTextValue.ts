export function copyTextValue(copyTextValue: string) {
  // Copy the text inside the text field
  navigator.clipboard.writeText(copyTextValue);
}

export async function getCopyTextValue(){
    const text = await navigator.clipboard.readText();
    return text;
}