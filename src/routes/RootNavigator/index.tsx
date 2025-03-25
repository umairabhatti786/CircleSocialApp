import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar, Appearance } from "react-native";
import AppStack from "../AppStack";
import { darkTheme, lightTheme } from "../../utils/Themes";

const RootNavigator = () => {
  const Stack = createStackNavigator();
  const [systemTheme, setSystemTheme] = useState(Appearance.getColorScheme());

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setSystemTheme(colorScheme); // Automatically updates theme on change
    });

    return () => subscription.remove(); // Cleanup on unmount
  }, []);
  const navigationTheme = systemTheme === "light" ? lightTheme : darkTheme; //TODO



  return (
    <NavigationContainer theme={navigationTheme}>
      <StatusBar backgroundColor={systemTheme === "light"? "#000000" :"#F3F5F7"} barStyle="light-content" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AppStack" component={AppStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
