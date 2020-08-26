import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import MealsNavigator from './navigation/MealsNavigator';
import { enableScreens } from 'react-native-screens';

enableScreens();

const fetchFonts = () => {
 return Font.loadAsync ({
    'montserrat': require('./assets/fonts/Montserrat-SemiBold.ttf'),
    'montserrat-bold': require('./assets/fonts/Montserrat-Bold.ttf')
  });
}

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  if(!dataLoaded){
    return <AppLoading
    startAsync = {fetchFonts}
    onFinish = {() => setDataLoaded(true)}
    onError = {(err) => console.log(err) } 
    />
  }
  return (
     <MealsNavigator />
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center' 
  },

  title: {
    fontFamily: 'montserrat-bold',
    fontSize: 16
  }

});
