import React from 'react';
import  {View, Text, StyleSheet, Button} from 'react-native';

const CategoriesScreen = props => {
    return(
        <View style = {styles.screen}>
            <Text style = {styles.title}>The Categories Screen</Text>
        <Button onPress = {() => {
            props.navigation.navigate({ routeName : 'CategoryMeals'});
        }}
        title = "Meal Categories"
        />
        </View>
    )
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
    fontFamily: 'montserrat-bold',
    fontSize: 16
  }
})

export default CategoriesScreen;