import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';


const MealItem = props => {
    return (
        <View style = {styles.mealItem}>
            <TouchableOpacity onPress={props.onSelectMeal}>
                <View>
                    <View style={[styles.mealRow, styles.mealHeader]}>
                        <Text>{props.title}</Text>
                    </View>
                    <View style={[styles.mealRow, styles.mealDetail]}>
                        <Text>{props.duration}m</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
     
    )
};

const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#ccc'
    },
    mealRow: {
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    mealHeader: {
        height: '90%'
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        
    }

});

export default MealItem;