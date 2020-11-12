import * as React from 'react';
import { View, StyleSheet, Image, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import PeoplePage from './src/pages/PeoplePage'
import PeopleDetailsPage from './src/pages/PeopleDetailsPage'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Contatos"
      activeColor="#000" //fonte
      inactiveColor="#404040" //butão nav
      barStyle={{ backgroundColor: 'rgb(89, 89, 89)' }}//butão nav
    >
      <Tab.Screen
        name="Contatos"
        component={PeoplePage}
        options={{
          tabBarLabel: 'Contados Empresariais',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-multiple" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Detalhe da Pessoa"
        component={PeopleDetailsPage}
        options={{
          tabBarLabel: 'Detalhes dos Contatos',
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
          activeTintColor: 'rgb(255, 255, 255);',//fonte do menu
          activeBackgroundColor: 'rgb(26, 26, 26)',
          inactiveTintColor: 'rgb(255, 255, 255)'
        }}
        drawerStyle={{
          backgroundColor: ' rgb(153, 153, 153);', //menu lateral
          width: 240
        }}
        initialRouteName="PeoplePage">


        <Drawer.Screen
          name="Contatos"
          component={Tabs}
        />
        <Drawer.Screen
          name="Detalhe da Pessoa"
          component={PeopleDetailsPage}
        />

      </Drawer.Navigator>
    </NavigationContainer>
  </View>
  );
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