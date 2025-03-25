import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { theme } from "../../utils/Themes";
import { fonts } from "../../utils/Themes/fonts";
import sizeHelper from "../../utils/Helpers";
import { appStyles } from "../../utils/GlobalStyles";
import CustomText from "../Text";
import { useNavigation, useTheme } from "@react-navigation/native";
import { images } from "../../utils/Themes/Images";
const CustomHeader = ({
    title,

}:any ) => {
  const navigation: any = useNavigation();
  const { colors }: any = useTheme(); // Get the current theme's colors
  const styles = getStyles(colors); // Pass colors to the styles function

  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => navigation.goBack()}
      style={styles.box_con}
    >
      <Image
        style={{ ...styles.back_icon, tintColor: colors.text }}
        resizeMode="contain"
        source={images.back_arrow}
      />
    </TouchableOpacity>

    <View style={{ flex: 1, alignItems: "center" }}>
      <CustomText
        text={title}
        color={colors.text}
        fontWeight="600"
        fontFam={fonts.Robotor_Medium}
        size={28}
      />
    </View>

    <View style={{ width: 20 }} />
  </View>
  );
};
export default CustomHeader;

const getStyles = (colors: any) =>
  StyleSheet.create({

    box_con: {
      justifyContent: "center",
      alignItems: "center",
    },

    back_icon: {
      width: sizeHelper.calHp(30),
      height: sizeHelper.calHp(30),
    },
   
  });
