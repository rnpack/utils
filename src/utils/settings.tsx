import { Linking, Platform } from 'react-native';

import { settings } from '../constants';
import type { SentIntentAndroid } from '../types';

async function canOpenUrl(url: string): Promise<boolean> {
  try {
    const isOpenable: boolean = await Linking?.canOpenURL(url);

    return isOpenable;
  } catch (error: unknown) {
    const err: Error = error as Error;
    console.error('Given url is not valid to open: ', url, err?.message);

    return false;
  }
}

async function openUrl(url: string): Promise<boolean> {
  const isOpenable: boolean = await canOpenUrl(url);

  if (isOpenable) {
    try {
      await Linking?.openURL(url);
      console.log('Opened given url: ', url);
      return true;
    } catch (error: unknown) {
      const err: Error = error as Error;
      console.error('Can not open given url: ', url, err?.message);

      return false;
    }
  }

  console.warn('Given url is not openable: ', url);
  return false;
}

async function sentIntentAndroid(args: SentIntentAndroid) {
  try {
    await Linking?.sendIntent(args?.action, args?.extras);

    return true;
  } catch (error: unknown) {
    const err: Error = error as Error;

    console.error('Sent android intent Error: ', args, err?.message);

    return false;
  }
}

async function openIOSBluetoothSettings(): Promise<boolean> {
  const status: boolean = await openUrl(settings?.ios?.bluetooth);

  return status;
}

async function openAndroidBluetoothSettings(): Promise<boolean> {
  return await sentIntentAndroid({ action: settings?.android?.bluetooth });
}

async function openBluetoothSettings(): Promise<boolean> {
  if (Platform?.OS === 'ios') {
    return await openIOSBluetoothSettings();
  }

  if (Platform?.OS === 'android') {
    return await openAndroidBluetoothSettings();
  }

  return false;
}

async function openAppCustomSettings(): Promise<boolean> {
  try {
    await Linking?.openSettings();

    return true;
  } catch (error: unknown) {
    const err: Error = error as Error;
    console.error('Open app custom settings Error: ', err?.message);

    return false;
  }
}

async function openIOSLocationSettings(): Promise<boolean> {
  const status: boolean = await openUrl(settings?.ios?.location);

  return status;
}

async function openAndroidLocationSettings(): Promise<boolean> {
  const status: boolean = await sentIntentAndroid({
    action: settings?.android?.location,
  });

  return status;
}

async function openLocationSettings(): Promise<boolean> {
  if (Platform?.OS === 'ios') {
    return await openIOSLocationSettings();
  }

  if (Platform?.OS === 'android') {
    return await openAndroidLocationSettings();
  }

  return false;
}

export {
  canOpenUrl,
  openUrl,
  openIOSBluetoothSettings,
  openAndroidBluetoothSettings,
  openAppCustomSettings,
  openIOSLocationSettings,
  openAndroidLocationSettings,
  openLocationSettings,
  openBluetoothSettings,
};
