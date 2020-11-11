
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
import { Icon } from "react-native-elements";

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
          tabBarLabel: 'Lista de contatos',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-multiple" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Informações do Contato"
        component={PeopleDetailsPage}
        options={{
          tabBarLabel: 'Contato',
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
    <View style={style.container} >
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Contatos">

          <Stack.Screen
            name="Agenda"
            component={Tabs}
            options={{
              headerStyle: {
                backgroundColor: 'rgb(36, 29, 62);'
              },
              headerTintColor: 'rgba(27, 212, 172, 0.804);',
              headerTitleAlign: 'center',
              textAlignmentsVertical: 'center',
              headerLeft: () => (
                <Icon
                  onPress={() => this.props.navigation.openDrawer()}
                  name="menu"
                  style={{ marginLeft: 20 }}
                  color="#000000"
                />
              ),
            }}
          />

          <Stack.Screen name="Informações do Contato"
            component={PeopleDetailsPage} options={{
              headerStyle: {
                backgroundColor: 'rgb(36, 29, 62);'
              },
              headerTintColor: 'rgba(27, 212, 172, 0.804);',
              headerTitleAlign: 'center',
              textAlignmentsVertical: 'center',
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