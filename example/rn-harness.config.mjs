import {
  androidEmulator,
  androidPlatform,
} from '@react-native-harness/platform-android';
import {
  applePlatform,
  appleSimulator,
} from '@react-native-harness/platform-apple';

const config = {
  entryPoint: 'expo-router/entry',
  appRegistryComponentName: 'main',

  runners: [
    androidPlatform({
      name: 'android',
      device: androidEmulator('Pixel_9_Pro_API_35', {
        apiLevel: 35,
        profile: 'pixel_6',
        diskSize: '1G',
        heapSize: '1G',
      }),
      bundleId: 'com.callstackincubator.voltraexample',
    }),
    applePlatform({
      name: 'ios',
      device: appleSimulator('iPhone 17 Pro', '26.2'),
      bundleId: 'com.callstackincubator.voltraexample',
    }),
  ],
  defaultRunner: 'android',
  resetEnvironmentBetweenTestFiles: false,
};

export default config;
