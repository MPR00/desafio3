import React from "react";
import { NavigationContainer, DarkTheme  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CompanieDetails from './ContactDetails'
import CompanieList from './ListContacts'
import { Icon } from "react-native-elements";

const Stack = createStackNavigator()

class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <NavigationContainer independent={true} theme={DarkTheme}>
        <Stack.Navigator initialRouteName="Lista">
          <Stack.Screen
            name="Lista"
            component={CompanieList}
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
          <Stack.Screen name="ContactDetails" component={CompanieDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Home;