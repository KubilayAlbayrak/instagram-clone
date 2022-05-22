import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { RootStack } from './src/navigation';
import { Provider } from 'react-redux';
import configureStore from './src/redux/store';
import FlashMessage from 'react-native-flash-message';

const store = configureStore();

//* I used it to show my redux knowledge just don't actually need to use redux for this project

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style='auto' />
      <NavigationContainer>
        <FlashMessage position='top' />
        <RootStack />
      </NavigationContainer>
    </Provider>
  );
}
