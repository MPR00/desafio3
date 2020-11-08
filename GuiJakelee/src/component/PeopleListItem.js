import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {toUpperContato} from '../util' //pega a primeira string e coloca maiuscula
 
const PeopleListItem = props => {
    const {people, onPressItemDetails} = props
    const {empresa_nome, contato, celular} = people.nome //vai pegar esses dados da api
    return (
        <TouchableOpacity onPress={() => {
            onPressItemDetails()
        }}>
        <View style={style.line}>
            <Image style={style.avatar} source={{uri: people.picture.thumbnail}}/>
            <Text style={style.linetext} key={contato}>
                {`
                ${toUpperContato(contato)}
                `}
            </Text>            
        </View>
        </TouchableOpacity>
    )
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
 
export default PeopleListItem