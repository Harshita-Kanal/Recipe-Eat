import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Colors from '../constants/Colors';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

const MealsNavigator = createStackNavigator({
Categories:{
    screen: CategoriesScreen,
    navigationOptions:{
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
},
CategoryMeals: {
    screen: CategoryMealsScreen,
  
},
MealDetail : MealDetailScreen
},
{
    
    defaultNavigationOptions:{
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

);

export default createAppContainer(MealsNavigator);




