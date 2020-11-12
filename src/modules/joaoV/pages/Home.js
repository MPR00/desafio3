import React from 'react';
import { NavigationContainer, DarkTheme  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import PeoplePage from './PeoplePage';
import PeopleDetailsPage from './PeopleDetailsPage'
import { Icon } from "react-native-elements";

const Stack = createStackNavigator();
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

class Home extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <NavigationContainer independent={true} theme={DarkTheme}>
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
    )
  }
}

export default Home;