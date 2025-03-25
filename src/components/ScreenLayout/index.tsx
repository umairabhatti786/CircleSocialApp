import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
  StyleProp,
  ViewStyle,
  StyleSheet,
  RefreshControlProps,
} from "react-native";
import { ScreenType } from "../../utils/Types";

import { useTheme } from "@react-navigation/native";
import sizeHelper from "../../utils/Helpers";
import { theme } from "../../utils/Themes";

const ScreenLayout = ({
  bgColor,
  isScrollEnabled,
  ScrollRef,
  onScroll,
  refreshControl,
  style,
  children,
  StatusBarColor
}: ScreenType) => {
  const { colors, dark }:any = useTheme(); // Get the current theme's colors
  const styles = getStyles(colors); // Pass colors to the styles function
  console.log("colors", dark);
  return (
    // Main container for handling keyboard interactions (pushing UI up when the keyboard is visible)

    <KeyboardAvoidingView
      // behavior={Platform.OS === "ios" ? "padding" : "height"} // Adjusts behavior for iOS and Android platforms
      style={styles.container} // Styles for the main container
    >
      <View
        style={[
          styles.safeAreaView,
          { backgroundColor: bgColor || colors.off_white }, // Use `bgColor` or fallback to the theme's primary color
        ]}
      >
        {/* StatusBar configuration */}

        <StatusBar
          barStyle={dark?"light-content": "dark-content"} // Light content for better visibility on dark backgrounds
          backgroundColor={colors.off_white} // Solid red background color for the status bar
          translucent={false} // Makes the status bar solid (not transparent)
        />

        {/* ScrollView for vertical scrolling */}

        {/* The main content view where child components will be rendered */}
        {/* Renders the children passed to this component */}
        <View style={[styles.contentView, style || {}]}>{children}</View>
      </View>
    </KeyboardAvoidingView>
  );
};
export default ScreenLayout;

const getStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    safeAreaView: {
      flex: 1,
      paddingTop:  sizeHelper.calHp( Platform.OS == "ios" ? 50 : 20)
    },
    contentView: {
      flex: 1,
      backgroundColor: colors.background 
    },
    scrollView: {
      flex: 1,
    },
    scrollViewContent: {
      flexGrow: 1,
    },
  });

// const getStyles = (colors: any) =>

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   safeAreaView: {
//     flex: 1,
//     paddingTop: verticalScale(Platform.OS == "ios" ? 40 : 10),
//   },
//   contentView: {
//     flex: 1,
//     backgroundColor: theme.colors.primary,
//   },
//   scrollView: {
//     flex: 1,
//   },
//   scrollViewContent: {
//     flexGrow: 1,
//   },
// });

//   });
