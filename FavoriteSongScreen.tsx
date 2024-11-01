import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

// Define the type for the navigation and route props
type RootStackParamList = {
  Favorites: undefined; // Adjust this based on your navigation params
};

type FavoritesScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Favorites'>;
  route: RouteProp<RootStackParamList, 'Favorites'>;
};

const FavoritesScreen: React.FC<FavoritesScreenProps> = ({ navigation, route }) => {
  return (
    <View>
      <Text>Favorites Screen</Text>
      {/* You can use navigation and route props here */}
    </View>
  );
};

export default FavoritesScreen;
