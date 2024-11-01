// screens/ArtistScreen.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './type';

type ArtistScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Artist'>;
  route: {
    params: {
      artistId: string;
    };
  };
};

const ArtistScreen: React.FC<ArtistScreenProps> = ({ navigation, route }) => {
  const { artistId } = route.params;

  // Sample data for songs associated with the artist
  const songs = [
    { id: '1', title: 'Song 1', artistId: '1', genre: 'Pop' },
    { id: '2', title: 'Song 2', artistId: '2', genre: 'Rock' },
    { id: '3', title: 'Song 3', artistId: '1', genre: 'Jazz' },
  ];

  const renderItem = ({ item }: { item: { id: string; title: string; artistId: string } }) => (
    <View style={styles.songContainer}>
      <Text style={styles.songTitle}>{item.title} (Artist ID: {item.artistId})</Text>
      <TouchableOpacity
        style={styles.favoriteButton}
        onPress={() => console.log(`Favorite ${item.title}`)}>
        <Text style={styles.heart}>❤️</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Player', { songId: item.id })}>
        <Text style={styles.playButton}>Play</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Songs by Artist {artistId}</Text>
      <FlatList
        data={songs.filter(song => song.artistId === artistId)}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#000',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
  },
  songContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#444',
    borderRadius: 10,
    marginBottom: 8,
  },
  songTitle: {
    color: '#fff',
    fontSize: 16,
    flex: 1,
  },
  favoriteButton: {
    padding: 8,
  },
  heart: {
    fontSize: 20,
  },
  playButton: {
    color: '#1e90ff',
    fontSize: 16,
  },
});

export default ArtistScreen;
