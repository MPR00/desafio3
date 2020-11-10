
import React from 'react';
import { View, StyleSheet, Image } from 'react-native'
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

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
      initialRouteName="Feed"
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
        <Stack.Navigator initialRouteName="PeoplePage">
          <Stack.Screen
            name="Contact Book"
            component={Tabs}
            options={{
              headerStyle: {
                backgroundColor: 'rgb(27, 212, 171);'
              },
              headerTintColor: 'rgb(49, 42, 75);'
            }}

          />
          <Stack.Screen
            name="Informações do Contato"
            component={PeopleDetailsPage}
            options={{
              headerStyle: {
                backgroundColor: 'rgb(27, 212, 171);'
              },
              headerTintColor: 'rgb(49, 42, 75);'
            }}
          />

        </Stack.Navigator>
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