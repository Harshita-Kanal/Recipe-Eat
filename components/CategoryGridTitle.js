import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';


const CategoryGridTitle = props => {
    return(
        <TouchableOpacity
            style={styles.gridItem}
            onPress= {props.onSelect}
        >
            <View
            style = {[styles.container, { backgroundColor: props.color}]}
             >
                <Text style={styles.title}>{props.title}</Text>
            </View>
        </TouchableOpacity>  
    )
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
    },
    title: {
        fontFamily: 'montserrat-bold',
        fontSize: 16
    },
    container: {
        flex: 1
    }
});

export default CategoryGridTitle;