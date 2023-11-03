import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.background}>
      <StatusBar />
      <Text>Hallo!</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'lime',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
