import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {toUpperContato} from '../util' //pega a primeira string e coloca maiuscula
 
const PeopleListItem = props => {
    const {people, onPressItemDetails} = props
    const {contato, celular} = people.contact //vai pegar esses dados da api
    return (
        <TouchableOpacity onPress={() => {
            onPressItemDetails()
        }}>
       
        <View style={style.line}>
            <Image style={style.avatar} source={{uri: people.fotografia}}/>

            <Text style={style.linetext} key={contato}>
            
                {toUpperContato(contato)}
            
            </Text>            
        </View>
        
        </TouchableOpacity>
    )
}
 
const style = StyleSheet.create({ //add o css aki
    line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor:'rgb(0, 0, 0);',
        borderTopWidth: 1,
        borderTopColor:'rgb(0, 0, 0);',
        marginRight: 10,
        marginLeft:10,
        alignItems: 'center',
        flexDirection: 'row',
    },

    linetext: {
        fontSize: 20,
        paddingLeft: 20,
        flex: 7,
        color:'rgb(0, 0, 0);'
    },

    avatar: {
        aspectRatio: 1,
        flex: 1,
        marginLeft: 10,
        borderRadius: 50
    },

    icone: {
        marginRight: 10,
        aspectRatio: 1,
        borderRadius: 50,
        flex: 1
    },
}
)
 
export default PeopleListItem