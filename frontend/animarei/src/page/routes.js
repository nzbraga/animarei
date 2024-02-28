import  React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import Home from "./Home";


const Stack = createStackNavigator();

function Routes(){   
 
    return(
        <Stack.Navigator >
            <Stack.Screen name='Home' component={Home} options={{headerShown:false}} />           
        </Stack.Navigator>
    )
}

export default Routes;