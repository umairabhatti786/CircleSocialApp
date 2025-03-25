import { Text, StyleProp, ViewStyle, TextStyle } from "react-native";
import { TextType } from "../../utils/Types";
import { theme } from "../../utils/Themes";
import { fonts } from "../../utils/Themes/fonts";
import sizeHelper from "../../utils/Helpers";
import { useTheme } from "@react-navigation/native";
const CustomText = ({
  color,
  size,
  fontFam,
  text,
  style,
  lineHeight,
  numberOfLines,
  fontWeight,
  textDecorationLine,
  label,
  textTransform,
}: TextType) => {
  const { colors }: any = useTheme(); // Get the current theme's colors

  return (
    <Text
      numberOfLines={numberOfLines}
      allowFontScaling={false}
      style={
        [
          {
            color: color || colors.text,
            fontSize:  sizeHelper.calHp(size ||30),
            fontWeight: fontWeight || "400",
            fontFamily: fontFam || fonts.Roboto_Regular,
            textTransform: textTransform,
            textDecorationLine: textDecorationLine,

            ...(lineHeight && { lineHeight: lineHeight }),
          },
          style,
        ] as StyleProp<TextStyle>
      }
    >
      {text}
      {label}
    </Text>
  );
};
export default CustomText;
