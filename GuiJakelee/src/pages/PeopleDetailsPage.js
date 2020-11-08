import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default class PeopleDetailsPage extends React.Component{   
  
  render(){
    return (
        <View>
            <Text>People Details Here!</Text> 
        </View> 
    )
  }
  
}

const style = StyleSheet.create({ //add o css aki
  line: {
      height: 60,
      borderBottomWidth: 1,
      borderBottomColor: '#bbb',
      alignItems: 'center',
      flexDirection: 'row'
  },
  linetext:{
      fontSize:20,
      paddingLeft: 20,
      flex: 7
  },
  avatar:{
      aspectRatio: 1,
      flex: 1,
      marginLeft: 10,
      borderRadius: 50
  }
}
)
//Deve aparecer NOME DA EMPRESA, CEL, EMAIL, CIDADE, ESTADO. 