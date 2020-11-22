import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MovieRoot} from './MovieNavigator';

const AppNavigator = (props) => {
  return (
    <NavigationContainer>
      <MovieRoot />
    </NavigationContainer>
  );
};

export default AppNavigator;
