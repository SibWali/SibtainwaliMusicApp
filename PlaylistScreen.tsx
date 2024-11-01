// screens/PlaylistScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PlaylistScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Playlists</Text>
      {/* Add your playlist content here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default PlaylistScreen;
