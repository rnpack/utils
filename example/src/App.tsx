import { StyleSheet, View, Text } from 'react-native';

import { isEmpty } from '@rnpack/utils';

export default function App() {
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
