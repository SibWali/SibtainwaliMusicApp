// types.ts
import { StackNavigationProp } from '@react-navigation/stack';

// Define the RootStackParamList type
export type RootStackParamList = {
  Home: undefined; // No parameters needed for Home
  Player: { songId: string }; // Parameters for Player screen
  Favorites: undefined; // No parameters needed for Favorites
  Search: undefined; // No parameters needed for Search
  Playlist: undefined; // Playlist screen does not require any parameters
  AS: undefined; // Artist screen does not require any parameters
  Album: undefined; // Album screen does not require any parameters
};

// Define props types for screens
export type PlayerScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Player'>;
  route: { params: { songId: string } };
};

export type FavoritesScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Favorites'>;
};

export type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

export type SearchScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Search'>;
};
