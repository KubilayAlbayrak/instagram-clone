import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens';

const MainStack = createNativeStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen name='HomeScreen' component={HomeScreen} />
      {/*  Main Stack structure has been set so that it can be used in the later
      stages of the application - Drawer and Tab Stack can be implemented in the
      later versions. */}
    </MainStack.Navigator>
  );
};

export default MainStackScreen;
