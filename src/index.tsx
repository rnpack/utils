import { NitroModules } from 'react-native-nitro-modules';
import type { Utils } from './Utils.nitro';

const UtilsHybridObject = NitroModules.createHybridObject<Utils>('Utils');

export function multiply(a: number, b: number): number {
  return UtilsHybridObject.multiply(a, b);
}

export * from './utils';
export * from './hooks';
export * from './constants';
export * from './types';
