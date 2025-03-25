import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, Platform, StyleSheet, View } from "react-native";
import CustomText from "../../components/Text";
import { theme } from "../../utils/Themes";
import { fonts } from "../../utils/Themes/fonts";
import { useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
import Home from "../../screens/Main/Home";
import { useTheme } from "@react-navigation/native";
import sizeHelper from "../../utils/Helpers";
import { images } from "../../utils/Themes/Images";
import Notifications from "../../screens/Main/Notifications";
import Settings from "../../screens/Main/Settings";
import HomeStack from "../HomeStack";
import SettingStack from "../SettingStack";

const BottomTab = ({}: any) => {
  const Bottom = createBottomTabNavigator();
  const { colors }:any = useTheme(); // Get the current theme's colors

  const TabItem = ({ focused, title, img, colors }: any) => {
    return (
      <View style={[style.itemStyle]}>
        <Image
          resizeMode="contain"
          source={img}
          style={{
            ...style.img,
            tintColor: focused ? theme.colors.primary : "#85837A",
          }}
        />
        <CustomText
          text={title}
          size={20}
          color={focused ? theme.colors.primary : "#85837A"}
        />
      </View>
    );
  };

  return (
    <Bottom.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        animationEnabled: false,
        gestureEnabled: true,
        keyboardHidesTabBar: true,

        cardStyleInterpolator: ({ current, next, layouts }: any) => {
          return {
            cardStyle: {
              transform: [
                {
                  translateX: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [layouts.screen.width, 0],
                  }),
                },
              ],
            },
          };
        },
        tabBarStyle: {
          backgroundColor: colors.eerie_black,
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          height: sizeHelper.calHp(130),
          borderTopWidth: -1,
          paddingTop: sizeHelper.calHp(35),

          marginHorizontal: sizeHelper.calWp(40),
          marginBottom: sizeHelper.calHp(45),
          borderRadius: sizeHelper.calWp(30),
        },

        headerShown: false,
      })}
    >
      <Bottom.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <TabItem
                title={"Home"}
                colors={colors}
                img={images.home}
                focused={focused}
              />
            );
          },
        }}
      />

      <Bottom.Screen
        name="Notifications"
        component={Notifications}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <TabItem
                colors={colors}
                title={"Notifications"}
                img={images.notification}
                focused={focused}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="Settings"
        component={SettingStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <TabItem
                colors={colors}
                title={"Settings"}
                img={images.setting}
                focused={focused}
              />
            );
          },
        }}
      />
    </Bottom.Navigator>
  );
};
export default BottomTab;

const style = StyleSheet.create({
  itemStyle: {
    width: sizeHelper.calWp(140),
    backgroundColor: "transparent", // Semi-transparent background
    justifyContent: "center",
    // width:"100%",
    alignItems: "center",
    alignSelf: "center",
    gap: sizeHelper.calHp(12),
  },

  img: {
    height: sizeHelper.calHp(32),
    width: sizeHelper.calHp(32),
  },
});
