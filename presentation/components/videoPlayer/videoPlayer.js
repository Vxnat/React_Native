import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';

const VideoPlayer = ({ videoUrl }) => {
  const [loading, setLoading] = useState(true);

  return (
    <View style={styles.container}>
      {loading && (
        <ActivityIndicator
          style={styles.loading}
          size="large"
          color="black"
        />
      )}
      <WebView
        source={{ uri: videoUrl }}
        style={styles.video}
        onLoadStart={() => setLoading(true)}
        onLoad={() => setLoading(false)}
        allowsFullscreenVideo={true}
      />
    </View>
  );
};

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  video: {
    width: width,
    height: (width * 9) / 16, // 16:9 ratio
  },
  loading: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -25 }, { translateY: -25 }],
  },
});

export default VideoPlayer;
