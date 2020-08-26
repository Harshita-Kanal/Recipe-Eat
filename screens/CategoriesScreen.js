import React from 'react';
import  {View, Text, StyleSheet, Button, FlatList, TouchableOpacity} from 'react-native';
import {CATEGORIES}  from '../data/dummy-data';
import Colors from '../constants/Colors';
import CategoryGridTitle from '../components/CategoryGridTitle';


const CategoriesScreen = props => {
    const renderGridItem = (itemData) => {
    return(      
        <CategoryGridTitle
        color = {itemData.item.color} 
        title = {itemData.item.title}
        onSelect = {() => {
            props.navigation.navigate({
                routeName: 'CategoryMeals', params: {
                    categoryId: itemData.item.id
                }
            });
        }}
     />
       
    );
}

    return(
          <FlatList data = {CATEGORIES} numColumns = {2} renderItem = {renderGridItem}/>
    );
};

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories',
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
    fontFamily: 'montserrat-bold',
    fontSize: 16
  },

 
})

export default CategoriesScreen;