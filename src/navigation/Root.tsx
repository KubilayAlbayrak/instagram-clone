import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainStack from './Main';
import AuthStack from './Auth';
import { useSelector } from 'react-redux';
import { reduxRootTypes } from '../types';

const RootStack = createNativeStackNavigator();

const MainStackScreen = () => {
  const userState = useSelector(
    (state: reduxRootTypes.RootStateType) => state.userState
  );

  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {!userState.authenticated ? (
        <RootStack.Screen name='AuthStack' component={AuthStack} />
      ) : (
        <RootStack.Screen name='MainStack' component={MainStack} />
      )}
    </RootStack.Navigator>
  );
};

export default MainStackScreen;
