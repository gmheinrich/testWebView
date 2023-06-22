import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TendamWebView } from './src/components/tendamWebView/TendamWebView';

export function App(): JSX.Element {
  const urlSourceWebview: string = 'https://myspringfield.com/es';

  return (
    <View style={styles.sectionContainer}>
      <TendamWebView urlSource={urlSourceWebview} enableSpinner />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
});
