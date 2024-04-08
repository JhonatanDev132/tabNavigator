import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ola from './src/screens/Ola'
import Tchau from './src/screens/Tchau'


const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Ola" component={Ola} options={{ headerShown: false, tabBarBadge: 5 }} />
      <Tab.Screen name="Tchau" component={Tchau} />
    </Tab.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
