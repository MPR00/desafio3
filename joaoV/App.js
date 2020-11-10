
import React from 'react';
import { View, StyleSheet, Image, Button } from 'react-native'
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem, } from '@react-navigation/drawer';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import PeoplePage from './src/pages/PeoplePage';
import PeopleDetailsPage from './src/pages/PeopleDetailsPage';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Contatos"
      activeColor="#1bd4ab"
      inactiveColor="#504579"
      barStyle={{ backgroundColor: '#241d3e' }}
    >
      <Tab.Screen
        name="Contatos"
        component={PeoplePage}
        options={{
          tabBarLabel: 'Contact List',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-multiple" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Informações do Contato"
        component={PeopleDetailsPage}
        options={{
          tabBarLabel: 'Contact',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-details" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

function App() {
  return (
    <View style={style.container}>
      <NavigationContainer>
        <Drawer.Navigator
          drawerContentOptions={{
            activeTintColor: 'rgba(27, 212, 172, 0.804);',
            activeBackgroundColor: '#241d3e',
            inactiveTintColor: '#241d3e'
          }}
          drawerStyle={{
            backgroundColor: ' rgba(27, 212, 172, 0.804);',
            width: 240
          }}
          initialRouteName="PeoplePage">


          <Drawer.Screen
            name="Contatos"
            component={Tabs}
          />
          <Drawer.Screen
            name="Informações do Contato"
            component={PeopleDetailsPage}
          />

        </Drawer.Navigator>
      </NavigationContainer>
    </View>
  )
}

const style = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: 'rgb(49, 42, 75);'
    }
  }
)


export default App;