import React from "react";
import { NavigationContainer, DarkTheme  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CompanieDetails from './Details'
import CompanieList from './List'
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
                  style={{ marginLeft: 20 }}
                  color="#fff"
                />
              ),
            }}
          />
          <Stack.Screen name="Detalhes" component={CompanieDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Home;