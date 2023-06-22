import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

export const TendamSpinner = (): JSX.Element => (
    <View style={styles.spinnerContainer} pointerEvents="none">
      <ActivityIndicator size="small"/>
    </View>
);

const styles = StyleSheet.create({
  spinnerContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
});
