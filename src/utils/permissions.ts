import { PermissionsAndroid, Platform } from 'react-native';
import type { Permission, PermissionStatus } from 'react-native';

import { permissions } from '../constants';

async function hasAndroidLocationFineAuthorized(): Promise<boolean> {
  const isAuthorized: boolean = await PermissionsAndroid?.check(
    permissions?.android?.location?.fine as Permission
  );

  return isAuthorized;
}

async function requestAndroidLocationFineAuthorization(): Promise<PermissionStatus> {
  const status: PermissionStatus = await PermissionsAndroid?.request(
    permissions?.android?.location?.fine as Permission
  );

  return status;
}

async function hasAndroidLocationCoarseAuthorized(): Promise<boolean> {
  const isAuthorized: boolean = await PermissionsAndroid?.check(
    permissions?.android?.location?.coarse as Permission
  );

  return isAuthorized;
}

async function requestAndroidLocationCoarseAuthorization(): Promise<PermissionStatus> {
  const status: PermissionStatus = await PermissionsAndroid?.request(
    permissions?.android?.location?.coarse as Permission
  );

  return status;
}

async function hasLocationAuthorized(): Promise<boolean> {
  if (Platform?.OS === 'android') {
    return await hasAndroidLocationFineAuthorized();
  }

  return false;
}

async function hasAndroidBluetoothScanAuthorized(): Promise<boolean> {
  const isAuthorized: boolean = await PermissionsAndroid.check(
    permissions?.android?.bluetooth?.scan as Permission
  );

  return isAuthorized;
}

async function requestAndroidBluetoothScanAuthorization(): Promise<PermissionStatus> {
  const status: PermissionStatus = await PermissionsAndroid.request(
    permissions?.android?.bluetooth?.scan as Permission
  );

  return status;
}

async function hasAndroidBluetoothConnectAuthorized(): Promise<boolean> {
  const isAuthorized: boolean = await PermissionsAndroid.check(
    permissions?.android?.bluetooth?.connect as Permission
  );

  return isAuthorized;
}

async function requestAndroidBluetoothConnectAuthorization(): Promise<PermissionStatus> {
  const status: PermissionStatus = await PermissionsAndroid.request(
    permissions?.android?.bluetooth?.connect as Permission
  );

  return status;
}

export {
  hasAndroidLocationFineAuthorized,
  requestAndroidLocationFineAuthorization,
  hasAndroidLocationCoarseAuthorized,
  requestAndroidLocationCoarseAuthorization,
  hasLocationAuthorized,
  hasAndroidBluetoothScanAuthorized,
  requestAndroidBluetoothScanAuthorization,
  hasAndroidBluetoothConnectAuthorized,
  requestAndroidBluetoothConnectAuthorization,
};
