import React from 'react';
import{Text,View,StyleSheet} from 'react-native';
import Feed from "./Screens/Feed";
import TabNavigator from './navigation/TabNavigation'
import {NavigationContainer} from '@react-navigation/native'
import DrawerNavigation from './navigation/DrawerNavigation'

export default function App() {
   return (
    <NavigationContainer>
  <TabNavigator/>
    </NavigationContainer>
  );
}