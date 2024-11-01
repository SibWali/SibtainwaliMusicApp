// screens/PlayerScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider'; // Ensure you've installed this package
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './type'; // Adjust the import based on your folder structure

type PlayerScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Player'>;
  route: {
    params: {
      songId: string; // Pass song ID
    };
  };
};

const PlayerScreen: React.FC<PlayerScreenProps> = ({ navigation, route }) => {
  const { songId } = route.params;

  // Sample data for songs (ideally, this should come from your app's state or API)
  const songs = [
    { id: '1', title: 'Song 1', artist: 'Artist 1', albumArt: 'https://via.placeholder.com/150', duration: 180 },
    { id: '2', title: 'Song 2', artist: 'Artist 2', albumArt: 'https://via.placeholder.com/150', duration: 210 },
    { id: '3', title: 'Song 3', artist: 'Artist 3', albumArt: 'https://via.placeholder.com/150', duration: 200 },
    { id: '4', title: 'Song 4', artist: 'Artist 1', albumArt: 'https://via.placeholder.com/150', duration: 190 },
    { id: '5', title: 'Song 5', artist: 'Artist 2', albumArt: 'https://via.placeholder.com/150', duration: 240 },
  ];

  const currentSong = songs.find(song => song.id === songId);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentTime(prevTime => {
          if (prevTime < (currentSong?.duration || 0)) {
            return prevTime + 1; // Increment current time
          } else {
            clearInterval(interval); // Stop when song ends
            return currentSong?.duration || 0;
          }
        });
      }, 1000);

      return () => clearInterval(interval); // Clean up interval on unmount
    }
  }, [isPlaying, currentSong]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    // Logic to go to the next song
    console.log('Next song');
  };

  const handlePrevious = () => {
    // Logic to go to the previous song
    console.log('Previous song');
  };

  return (
    <View style={styles.container}>
      {currentSong && (
        <>
          <Image source={{ uri: currentSong.albumArt }} style={styles.albumArt} />
          <Text style={styles.songTitle}>{currentSong.title}</Text>
          <Text style={styles.artistName}>{currentSong.artist}</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={currentSong.duration}
            value={currentTime}
            onValueChange={(value: number) => setCurrentTime(value)} // Allow scrubbing
          />
          <View style={styles.controls}>
            <TouchableOpacity onPress={handlePrevious}>
              <Text style={styles.controlText}>⏮️</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePlayPause}>
              <Text style={styles.controlText}>{isPlaying ? '⏸️' : '▶️'}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleNext}>
              <Text style={styles.controlText}>⏭️</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  albumArt: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 10,
  },
  songTitle: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 10,
  },
  artistName: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 20,
  },
  slider: {
    width: '80%',
    height: 40,
    marginBottom: 20,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
  controlText: {
    fontSize: 30,
    color: '#fff',
  },
});

export default PlayerScreen;
