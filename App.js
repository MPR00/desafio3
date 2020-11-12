import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import HomeScreen from './src/components/HomeScreen'
import CompaniesHome from './src/modules/thiago/Home'
import BooksHome from './src/modules/books/Home'
import PeoplePageJakeLee from './src/modules/guiJakelee/pages/Home'
import PeoplePageJoaoV from './src/modules/JoaoV/pages/Home'

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
        <Drawer.Screen name="Thiago" options={{ drawerLabel: 'Thiago Nogueira' }} component={CompaniesHome} />
        <Drawer.Screen name="GuiJakelee" options={{ drawerLabel: 'GuiJakelee' }} component={PeoplePageJakeLee} />
        <Drawer.Screen name="JoaoV" options={{ drawerLabel: 'JoaoV' }} component={PeoplePageJoaoV} />
        <Drawer.Screen name="Vinicius" options={{ drawerLabel: 'Vinicius' }} component={BooksHome} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}