
import React from 'react';
import {View, StyleSheet, Image} from 'react-native'
import {NavigationContainer, StackActions} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createDrawerNavigator} from '@react-navigation/drawer'
import PeoplePage from './src/pages/PeoplePage'
import PeopleDetailsPage from './src/pages/PeopleDetailsPage'

const stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function App(){
  return(
    <View style={style.container}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName ="PeoplePage">
          <Drawer.Screen name="Contatos" component={PeoplePage} />
          <Drawer.Screen name="Informações do Contato" component={PeopleDetailsPage} />
        </Drawer.Navigator>
      </NavigationContainer>
    </View>
  )
}

const style = StyleSheet.create(
  {
    container:{
      flex:1,

    }
  }
)


export default App;