import { Assets } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { toUpperFirst } from '../util';
import iconSelect from '../assets/iconSelect.png';

const PeopleListItem = props => {
    const { people, onPressItemDetails } = props
    const { title, first, last } = people.name
    return (
        <TouchableOpacity  onPress={() => {
            onPressItemDetails()
        }}>
            <View style={style.line}>
                <Image style={style.avatar} source={{ uri: people.picture.thumbnail }} />
                <Text style={style.linetext} key={first}>
                    {`${toUpperFirst(title)
                        } ${toUpperFirst(first)
                        } ${toUpperFirst(last)
                        }`}
                </Text>

                <Image style={style.icone} source={require('../assets/iconSelect.png')} />

            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor:'rgb(49, 42, 75);',
        borderTopWidth: 1,
        borderTopColor:'rgb(49, 42, 75);',
        marginRight: 10,
        marginLeft:10,
        alignItems: 'center',
        flexDirection: 'row',
    },

    linetext: {
        fontSize: 20,
        paddingLeft: 20,
        flex: 7,
        color:'rgba(247, 247, 247, 0.891);'
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