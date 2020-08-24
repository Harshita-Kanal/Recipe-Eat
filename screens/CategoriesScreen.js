import React from 'react';
import  {View, Text, StyleSheet, Button, FlatList, TouchableOpacity} from 'react-native';
import {CATEGORIES}  from '../data/dummy-data';
import Colors from '../constants/Colors';


const CategoriesScreen = props => {
    const renderGridItem = (itemData) => {
    return(
        <TouchableOpacity 
        style={styles.gridItem}
        onPress = {() =>props.navigation.navigate({routeName: 'CategoryMeals', params: {
            categoryId: itemData.item.id
        }})}
        >
            <View>
                <Text style={styles.title}>{itemData.item.title}</Text>
            </View>
        </TouchableOpacity>
       
    );
}

    return(
          <FlatList data = {CATEGORIES} numColumns = {2} renderItem = {renderGridItem}/>
    );
};

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories',
    headerStyle: {
        backgroundColor: Colors.primary
    },
    headerTintColor: 'white',
    fontFamily: 'montserrat',
    headerTitleStyle: {
        fontFamily: "montserrat",
        fontWeight: "200"
      }
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

  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,

  }
})

export default CategoriesScreen;