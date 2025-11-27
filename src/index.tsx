import { NitroModules } from 'react-native-nitro-modules';
import type { RNPackUtils } from './RNPackUtils.nitro';

const UtilsHybridObject =
  NitroModules.createHybridObject<RNPackUtils>('RNPackUtils');

export function multiply(a: number, b: number): number {
  return UtilsHybridObject.multiply(a, b);
}

export * from './utils';
export * from './hooks';
export * from './constants';
export * from './types';
