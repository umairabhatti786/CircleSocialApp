import { TouchableOpacity, StyleProp, ViewStyle } from "react-native";
import CustomText from "../Text";
import { ButtonProps } from "../../utils/Types";
import { theme } from "../../utils/Themes";
import { fonts } from "../../utils/Themes/fonts";
import sizeHelper from "../../utils/Helpers";
import { useTheme } from "@react-navigation/native";

const CustomButton = ({
  text,
  onPress,
  width,
  height,
  size,
  fontFam,
  borderRadius,
  style,
  bgColor,
  textColor,
  borderColor,
  disable = false,
  borderWidth,
  paddingHorizontal,
  isLoading,
  fontWeight,
  children
}: ButtonProps) => {
  const { colors}:any = useTheme(); // Get the current theme's colors

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disable}
      activeOpacity={0.5}
      style={
        [
          {
            width: width,
            height: sizeHelper.calHp(height || 70),
            backgroundColor: bgColor || theme.colors.primary,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: sizeHelper.calHp(borderRadius || 18),
            borderWidth: borderWidth || -1,
            borderColor: borderColor,
            paddingHorizontal: paddingHorizontal,
            flexDirection:"row"
          },
          style,
        ] as StyleProp<ViewStyle>
      }
    >
      <CustomText
        text={text}
        color={textColor ||colors.white}
        size={size || 22}
        fontWeight={fontWeight || "500"}
        fontFam={fontFam || fonts.Roboto_Regular}
      />
      {children}
    </TouchableOpacity>
  );
};
export default CustomButton;
