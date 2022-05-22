import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen, RegisterScreen } from '../screens';

const AuthStack = createNativeStackNavigator();

const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name='LoginScreen' component={LoginScreen} />
      {/* <AuthStack.Screen name='RegisterScreen' component={RegisterScreen} /> */}
      {/*  Auth Stack structure has been set so that it can be used in the later
      stages of the application */}
    </AuthStack.Navigator>
  );
};

export default AuthStackScreen;
