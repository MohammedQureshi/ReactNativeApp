import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function NavigationBar() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>This is going to be the nav bar and can over lap on two lines maybe this is a test </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 25,
    fontWeight: 'normal',
    textAlign: 'left',
    textDecorationLine: 'none',
  },
});
