import { Vibration, Linking } from 'react-native';

function generateRandomNumber(n: number): number {
  return (
    Math.floor(Math.random() * (9 * Math.pow(10, n - 1))) + Math.pow(10, n - 1)
  );
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function makeVibration(): void {
  Vibration.vibrate();
}

async function makeCall(args: { number?: string }): Promise<void> {
  await Linking.openURL(`tel:${args?.number}`);
}

export { generateRandomNumber, sleep, makeVibration, makeCall };
