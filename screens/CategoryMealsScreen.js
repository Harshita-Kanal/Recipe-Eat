import React from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import {CATEGORIES, MEALS} from '../data/dummy-data';
import Colors from '../constants/Colors'

const CategoryMealScreen = props => {   
    const catId = props.navigation.getParam('categoryId')
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId)
    
    const renderMealItem = itemData => {
        return (<View><Text>{itemData.item.title}</Text></View>)
    }

    const displayedMeals = MEALS.filter(
        meal => meal.categoryIds.indexOf(catId) >= 0
    );

    return (
        <View style={styles.screen}>
           <FlatList data = {displayedMeals}
           renderItem = {renderMealItem}
           
           />
        </View>
    )
}


CategoryMealScreen.navigationOptions = navigationData => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    return {
        headerTitle: selectedCategory.title, 
    }
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default CategoryMealScreen;