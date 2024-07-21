import { PermissionsAndroid } from 'react-native';

const permissions = {
  android: {
    bluetooth: {
      scan: PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
      connect: PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
    },
    location: {
      fine: PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      coarse: PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
    },
  },
};

export { permissions };
