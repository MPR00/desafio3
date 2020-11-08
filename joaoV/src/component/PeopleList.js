import React from 'react';
import {View, StyleSheet} from 'react-native'
import PeopleListItem from './PeopleListItem'
 
const PeopleList = props => {
    const {peoples, onPressItem} = props
    const items = peoples.map(people => {
          return (
              <PeopleListItem 
                    key={people.listContact.nameContact} 
                    people={people} 
                    onPressItemDetails={onPressItem}/>
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
        paddingTop: 120,
        backgroundColor: 'rgb(28, 23, 46);'
    },
 
}
)
 
export default PeopleList