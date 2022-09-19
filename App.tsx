/* eslint-disable prettier/prettier */
import React from 'react';
import HomeScreen from './App/HomeScreen';
import DetailScreen from './App/DetailScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Provider } from 'react-redux';
import { Store } from './App/redux/store';
import Cart from './App/Cart';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#A72608' },
            headerTintColor: '#F4F1DE',
            headerTitleStyle: { fontWeight: 'bold', fontSize: 24 },
            headerRight: () => <Cart />,
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider >
  );
};

export default App;
