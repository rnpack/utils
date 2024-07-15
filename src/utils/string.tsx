import { Buffer } from 'buffer';

function isEmpty(text: unknown): boolean {
  if (!text) {
    return true;
  }

  const value: string = text as string;

  return /^\s*$/.test(value);
}

function isNotEmpty(text: unknown): boolean {
  return !isEmpty(text);
}

function byteArrayToString(byteArray: Array<number>): string {
  let result = '';

  for (let i = 0; i < byteArray.length; i++) {
    if (!byteArray[i]) {
      continue;
    }

    result += String.fromCharCode(byteArray[i] as number);
  }

  return result;
}

function stringToByteArray(data: string): Uint8Array {
  const arrayBuffer = new ArrayBuffer(data.length * 1);
  const newUint = new Uint8Array(arrayBuffer);
  newUint.forEach((_, i) => {
    newUint[i] = data.charCodeAt(i);
  });

  return newUint;
}

function base64ToString(input: string): string {
  return Buffer?.from(input, 'base64').toString('utf8');
}

function stringToBase64(input: string): string {
  return Buffer?.from(input, 'utf8').toString('base64');
}

function removeNullCharactersFromText(text: string) {
  const alphaNumericRegex = new RegExp(/[^a-z0-9]/gi);
  return text
    ?.replaceAll('\0', '')
    ?.replaceAll('%s', '')
    ?.replace(alphaNumericRegex, '');
}

function convertStringToNumber(value: string): number | undefined {
  return !isEmpty(value) ? parseFloat(value) : undefined;
}

function splitString(text: string, splitBy: string): Array<string> {
  return text.split(splitBy);
}

export {
  isEmpty,
  isNotEmpty,
  byteArrayToString,
  stringToByteArray,
  base64ToString,
  stringToBase64,
  removeNullCharactersFromText,
  convertStringToNumber,
  splitString,
};
