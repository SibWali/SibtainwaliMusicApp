import React from 'react';
import { View, Text } from 'react-native';
import { SearchScreenProps } from './type'; // Adjust the import path if necessary

const SearchScreen: React.FC<SearchScreenProps> = ({ navigation }) => {
  return (
    <View>
      <Text>Search Screen</Text>
    </View>
  );
};

export default SearchScreen;
