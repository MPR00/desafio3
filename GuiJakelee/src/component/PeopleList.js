import React from 'react';
import {View, StyleSheet} from 'react-native'
import PeopleListItem from './PeopleListItem'
 
const PeopleList = props => {
    const {peoples, onPressItem} = props
    const items = peoples.map(people => {
          return (
          <PeopleListItem 
          key={people.contact.contato}
          people={people} 
          onPressItemDetails={event => onPressItem(people)} />
          )
        }
        )
    return (
        <View style={style.container}> 
            {items}
        </View>
    )
}
 
const style = StyleSheet.create({
    container: {
        paddingTop: 40,
        backgroundColor: 'rgb(191, 191, 191);'
    },
}
)
 
export default PeopleList