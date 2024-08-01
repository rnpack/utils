import { StyleSheet, View, Text } from 'react-native';

import { isEmpty, storage } from '@rnpack/utils';
import { useEffect } from 'react';

const TEST_KEY = '@TEST_KEY';

export default function App() {
  useEffect(() => {
    mount();
  }, []);

  async function mount() {
    await storage?.set({ key: TEST_KEY, value: 'Test Value' });

    setTimeout(async () => {
      const testValue = await storage?.get({ key: TEST_KEY });
      console.log('Test Key Value: ', { testValue });
    }, 2000);
  }

  return (
    <View style={styles.container}>
      <Text>
        Undefined is{isEmpty(undefined) ? ' not a ' : ' '}valid string
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
