import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, ImageBackground } from 'react-native';


const MealItem = props => {
    return (
        <View>
            <TouchableOpacity onPress={props.onSelectMeal}>
                <View style={styles.mealItem}>
                    <View style={[styles.mealRow, styles.mealHeader]}>
                        <ImageBackground source = {{uri: props.image}} style = {styles.bgimg}>
                        <Text style = {styles.title}>{props.title}</Text>
                        </ImageBackground >
                    </View>
                    <View style={[styles.mealRow, styles.mealDetail]}>
                        <Text style = {styles.textItem}>{props.duration}m</Text>
                        <Text style={styles.textItem}>{props.complexity}</Text>
                        <Text style={styles.textItem}>{props.affordability}</Text>
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
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        overflow: 'hidden',
       
    },
    mealRow: {
        flexDirection: 'row',
    },
    mealHeader: {
       height: '80%',
          
    },
    mealDetail: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        justifyContent: 'space-between',
       // flexDirection: 'row', 
        alignItems: 'center',
        height: '15%'
    },
    bgimg: {
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end'
    },
    title: {
        fontFamily: 'montserrat',
        fontSize: 22,
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.9)',
        paddingVertical: 5,
        paddingHorizontal:  12
    },
    textItem: {
        fontFamily: 'montserrat',
        fontSize: 12
    }
    });

export default MealItem;