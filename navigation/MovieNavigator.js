import React from 'react';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';

import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';

const MovieStack = createSharedElementStackNavigator();

export const MovieRoot = (props) => {
  return (
    <MovieStack.Navigator headerMode="none">
      <MovieStack.Screen name="Home" component={HomeScreen} />
      <MovieStack.Screen name="Detail" component={DetailScreen} />
    </MovieStack.Navigator>
  );
};
