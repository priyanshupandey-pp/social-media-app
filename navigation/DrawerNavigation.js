import React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import TabNavigation from './TabNavigation';
import Profile from '../Screens/Profile';

const Drawer =createDrawerNavigator ();
 
 const DrawerNavigator =() => {
   return(
     <DrawerNavigator>
     <Drawer.Screen name="Home" component={TabNavigation}/>
     <Drawer.Screen name="Profile" component={Profile}/>
     </DrawerNavigator>
   );
 } ;
 export default DrawerNavigator;