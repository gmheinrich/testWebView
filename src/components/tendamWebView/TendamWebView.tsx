import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import WebView, { WebViewProps } from 'react-native-webview';
import { TendamSpinner } from '../spinner/TendamSpinner';

interface ITendamWebViewProps extends WebViewProps {
  urlSource: string;
  enableSpinner?: boolean;
}

export const TendamWebView = ({ urlSource, enableSpinner }: ITendamWebViewProps): JSX.Element => {
  const [isWebviewLoading, setIsWebviewLoading] = useState(false);

  return (
    <View style={styles.webViewContainer}>
      <WebView
        source={{uri: urlSource}}
        setSupportMultipleWindows={false}
        decelerationRate={'normal'}
        androidLayerType={'hardware'}
        mediaPlaybackRequiresUserAction={true}
        javaScriptEnabled={true}
        cacheEnabled={true}
        thirdPartyCookiesEnabled
        sharedCookiesEnabled
        startInLoadingState
        onLoadStart={() => setIsWebviewLoading(true)}
        onLoad={() => setIsWebviewLoading(false)}
      />
      {enableSpinner && isWebviewLoading ? <TendamSpinner /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  webViewContainer: {
    flex: 1,
  },
});
