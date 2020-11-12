import * as React from 'react';
import { NavigationContainer, DarkTheme  } from '@react-navigation/native';
import PeoplePage from './PeoplePage'
import PeopleDetailsPage from './PeopleDetailsPage'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from "react-native-elements";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator()

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

class Home extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (  
    <NavigationContainer independent={true} theme={DarkTheme}>
      <Stack.Navigator initialRouteName="Lista">
        <Stack.Screen
          name="Lista"
          component={Tabs}
          options={{
            headerLeft: () => (
              <Icon
                onPress={() => this.props.navigation.openDrawer()}
                name="menu"
                style={{ marginLeft: 20 }}
                color="#fff"
              />
            ),
          }}
        />
        <Stack.Screen name="Detalhes" component={PeopleDetailsPage} />
      </Stack.Navigator>
    </NavigationContainer>
    );
  }
}



export default Home;