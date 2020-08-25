import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import Colors from '../constants/Colors'

const CategoryMealScreen = props => {
    const catId = props.navigation.getParam('categoryId')
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

    return (
        <View style={styles.screen}>
            <Text>The Meals Screen</Text>
            <Text>{selectedCategory.title}</Text>
            <Button onPress={() => { 
                props.navigation.navigate({ routeName: 'MealDetail' });
                }}
                title = "Meal detail"
                />
        </View>
    )
}


CategoryMealScreen.navigationOptions = navigationData => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    return {
        headerTitle: selectedCategory.title,
        headerStyle: {
            backgroundColor: Colors.primary
        },
        headerTintColor: 'white',
        fontFamily: 'montserrat',
        headerTitleStyle: {
            fontFamily: "montserrat",
            fontWeight: "200"
        }
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