// screens/HomeScreen.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './type'; // Ensure this path is correct
import { Picker } from '@react-native-picker/picker'; // Import Picker

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState<string>('All'); // Default to 'All'

  // Sample data for artists and songs
  const artists = [
    { id: '1', name: 'Artist 1' },
    { id: '2', name: 'Artist 2' },
    { id: '3', name: 'Artist 3' },
    { id: '4', name: 'Artist 4' },
    { id: '5', name: 'Artist 5' },
  ];

  const songs = [
    { id: '1', title: 'Song 1', artistId: '1', genre: 'Pop' },
    { id: '2', title: 'Song 2', artistId: '2', genre: 'Rock' },
    { id: '3', title: 'Song 3', artistId: '3', genre: 'Jazz' },
    { id: '4', title: 'Song 4', artistId: '1', genre: 'Pop' },
    { id: '5', title: 'Song 5', artistId: '2', genre: 'Rock' },
  ];

  // Array of genres
  const genres = ['All', 'Pop', 'Rock', 'Jazz'];

  // Filter songs based on search query and selected genre
  const filteredSongs = songs.filter(song =>
    (selectedGenre === 'All' || song.genre === selectedGenre) &&
    song.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderArtist = ({ item }: { item: { id: string; name: string } }) => (
    <TouchableOpacity
      style={styles.artistButton}
      onPress={() => navigation.navigate('Artist', { artistId: item.id })}>
      <Text style={styles.artistName}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderSong = ({ item }: { item: { id: string; title: string; artistId: string } }) => (
    <View style={styles.songContainer}>
      <Text style={styles.songTitle}>{item.title} (Artist ID: {item.artistId})</Text>
      <TouchableOpacity
        style={styles.favoriteButton}
        onPress={() => console.log(`Favorite ${item.title}`)}>
        <Text style={styles.heart}>❤️</Text>
      </TouchableOpacity>
      <Button
        title="Play"
        onPress={() => navigation.navigate('Player', { songId: item.id })}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search for songs..."
        placeholderTextColor="#ccc"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <View style={styles.favoriteContainer}>
        <Button
          title="Favorites"
          onPress={() => navigation.navigate('Favorites')}
          color="#ff3d00"
        />
      </View>
      <Picker
        selectedValue={selectedGenre}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedGenre(itemValue)}>
        {genres.map((genre) => (
          <Picker.Item label={genre} value={genre} key={genre} />
        ))}
      </Picker>
      <Text style={styles.title}>Artists</Text>
      <FlatList
        data={artists}
        renderItem={renderArtist}
        keyExtractor={(item) => item.id}
      />
      <Text style={styles.title}>Songs</Text>
      {filteredSongs.length > 0 ? ( // Check if there are filtered songs
        <FlatList
          data={filteredSongs}
          renderItem={renderSong}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <Text style={styles.noSongsText}>No songs found</Text> // Show message if no songs found
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#000',
  },
  searchBar: {
    height: 40,
    borderColor: '#666',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    color: '#fff',
    marginBottom: 16,
  },
  favoriteContainer: {
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
  },
  artistButton: {
    padding: 16,
    backgroundColor: '#333',
    borderRadius: 10,
    marginBottom: 8,
  },
  artistName: {
    color: '#fff',
    fontSize: 18,
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
  picker: {
    height: 50,
    width: '100%',
    color: '#fff', // Change picker text color to white
    marginBottom: 16, // Add space below the picker
  },
  noSongsText: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 16,
  },
});

export default HomeScreen;
