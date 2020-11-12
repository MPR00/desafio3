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
          component={PeoplePage}
          options={{
            headerLeft: () => (
              <Icon
                onPress={() => this.props.navigation.openDrawer()}
                name="menu"
                containerStyle={{ marginLeft: 10 }}
                color="#fff"
              />
            ),
          }}
        />
        <Stack.Screen name="Detalhe da Pessoa" component={PeopleDetailsPage} />
      </Stack.Navigator>
    </NavigationContainer>
    );
  }
}



export default Home;