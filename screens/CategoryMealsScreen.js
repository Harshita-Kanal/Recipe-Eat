import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CategoryMealScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Meals Screen</Text>
            <Button onPress={() => { 
                props.navigation.navigate({ routeName: 'MealDetail' });
                }}
                title = "Meal detail"
                />
        </View>
    )
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default CategoryMealScreen;