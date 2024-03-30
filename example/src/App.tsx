import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { Draggable } from 'rn-draggable';

const App = () => {
  return (
    <View style={styles.container}>
      <Draggable>
        <View style={styles.box} />
      </Draggable>
    </View>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    backgroundColor: 'blue',
  },
});
