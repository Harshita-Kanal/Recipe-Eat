import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import {MEALS} from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import  CustomHeaderButton from '../components/HeaderButton'

const MealDetailScreen = props => {
    const mealId = props.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId)

    return (
        <View style={styles.screen}>
            <Text>{selectedMeal.title}</Text>
            <Button onPress = {() => props.navigation.goBack()}
                    title = "Go Back" />
        </View>
    )
}

MealDetailScreen.navigationOptions = (navigationData) => {
    const mealId = navigationData.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId)
    return {
        headerTitle: selectedMeal.title,
        headerRight: 
        <HeaderButtons HeaderButtonComponent = {CustomHeaderButton}>
            <Item title = "Favourite"
             iconName = "ios-star" 
            /> 
        </HeaderButtons>
     
    };
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default MealDetailScreen;