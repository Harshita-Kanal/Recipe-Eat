import React from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import {CATEGORIES, MEALS} from '../data/dummy-data';
import Colors from '../constants/Colors';
import MealItem from '../components/MealItem';

const CategoryMealScreen = props => {   
    const catId = props.navigation.getParam('categoryId')
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId)
    
    const renderMealItem = itemData => {
        return <MealItem 
        title = {itemData.item.title} 
        image = {itemData.item.imageUrl}
        duration = {itemData.item.duration}
        complexity = {itemData.item.complexity}
        affordability = {itemData.item.affordability}
        onSelectMeal = {() => {
            props.navigation.navigate({routeName: 'MealDetail', params:{
                mealId: itemData.item.id
            }
        })
        }}/>
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