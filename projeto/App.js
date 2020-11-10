import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import HomeScreen from './src/components/HomeScreen'
import CompaniesHome from './src/modules/companies/Home'
import BooksHome from './src/modules/books/Home'

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Drawer.Navigator
        initialRouteName="Início"
        drawerContentOptions={{
          itemStyle: { marginHorizontal: 0, borderRadius: 0 },
        }}>
        <Drawer.Screen name="Início" component={HomeScreen} />
        <Drawer.Screen name="Companhias" component={CompaniesHome} />
        <Drawer.Screen name="Books" component={BooksHome} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}