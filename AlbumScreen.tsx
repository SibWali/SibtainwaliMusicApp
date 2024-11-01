// screens/AlbumScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AlbumScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Albums</Text>
      {/* Add your album content here */}
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

export default AlbumScreen;
