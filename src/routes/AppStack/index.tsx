import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../../Screens/Auth/Login";



export type AppStackParamList = {
  BottomTab: undefined;
  Login: undefined;

  
};
const Stack = createNativeStackNavigator<AppStackParamList>();

const AppStack = () => {
  return (
    <Stack.Navigator
      // screenOptions={TransitionScreenOptions}
      screenOptions={{
        headerShown: false,

        // cardStyleInterpolator: ({current: {progress}}) => {
        //   return {
        //     cardStyle: {
        //       opacity: progress,
        //     },
        //   };
        // },
      }}
    >
           
            <Stack.Screen name={"Login"} component={LoginScreen} />
          


            

            
    </Stack.Navigator>
  );
};
export default AppStack;
