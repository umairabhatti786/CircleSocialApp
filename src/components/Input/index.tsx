import { Image, TextInput, TouchableOpacity, View } from "react-native";
import CustomText from "../Text";
import { InputProps } from "../../utils/Types";
import { theme } from "../../utils/Themes";
import { fonts } from "../../utils/Themes/fonts";
import { useState } from "react";
import { useTheme } from "@react-navigation/native";
import { appStyles } from "../../utils/GlobalStyles";
import sizeHelper from "../../utils/Helpers";

const CustomInput = ({
  placeholder,
  keyboard,
  secureTextEntry,
  rightSource,
  props,
  fontWeight,
  multiline,
  height,
  fontSize,
  value,
  onChangeText,
  onBlur,
  error,
  onShowPassword,
  editable,
  color,
  maxLength,
  leftSource,
  width,
  placeholderTextColor,
  borderWidth,
  borderRadius,
  backgroundColor,
  borderColor,
  rightSourceSize,
  textAlign,
  textAlignVertical,
  paddingTop,
  onSubmitEditing,
  mandatory,
  label,
  rightSourceColor,
  onFocus,
  labelImg,
  labelSize,
  rightlabel
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const { colors }: any = useTheme(); // Get the current theme's colors

  return (
    <View style={{ ...props, width: width || "100%" }}>
      {label && (
        <View style={{ ...appStyles.rowjustify, gap: sizeHelper.calWp(10),marginBottom: sizeHelper.calWp(15)  }}>
         
        
          <CustomText
            // fontFam={fonts.Roboto_Light}
            fontWeight="400"
            size={ labelSize ||22}
            text={label}
          />
           <CustomText
            // fontFam={fonts.Roboto_Light}
            fontWeight="400"
            color={colors.gray100}
            size={20}
            text={rightlabel}
          />
        </View>
      )}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: sizeHelper.calWp(20),
          height: sizeHelper.calHp(height || 70),
          alignItems: "center",
          borderColor: borderColor ,
          borderWidth: borderWidth || -1,
          borderRadius: borderRadius || sizeHelper.calWp(20),
          backgroundColor: backgroundColor || theme.colors.gray_input,
          gap:sizeHelper.calWp(20)
        }}
      >
        {
          leftSource&&(
            <Image
            source={leftSource}
            style={{
              width: sizeHelper.calWp(34),
              height: sizeHelper.calWp(34),
              tintColor:  colors.gray_placeholder,
            }}
            resizeMode={"contain"}
          />
          )
        }
        <TextInput
          value={value}
          editable={editable}
          onSubmitEditing={onSubmitEditing}
          allowFontScaling={false} // Disable font scaling
          style={{
            fontSize: fontSize ||sizeHelper.calHp(22),
            width: rightSource ? "83%" : "98%",
            alignItems: "center",
            height: "100%",
            justifyContent: "center",
            textAlign: textAlign,
            textAlignVertical: textAlignVertical,
            paddingTop: paddingTop || 0,
            paddingVertical: 0, // Adjust as needed for centering
            fontFamily: fonts.Roboto_Regular,
            fontWeight: fontWeight || "400",
            color: color || colors.gray400,
          }}
          placeholder={placeholder}
          multiline={multiline}
          placeholderTextColor={placeholderTextColor ||colors.gray_placeholder}
          keyboardType={keyboard}
          maxLength={maxLength}
          onFocus={onFocus}
          secureTextEntry={secureTextEntry || false}
          onChangeText={onChangeText}
          onBlur={onBlur}
          autoCapitalize="none"
        />
        {rightSource && (
          <TouchableOpacity
            onPress={onShowPassword}
            disabled={!onShowPassword}
            activeOpacity={0.6}
            style={{
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Image
              source={rightSource}
              style={{
                width: sizeHelper.calWp(rightSourceSize || 34),
                height: sizeHelper.calWp(rightSourceSize || 34),
                tintColor:  colors.gray_placeholder,
              }}
              resizeMode={"contain"}
            />
          </TouchableOpacity>
        )}
      </View>

      {error && (
        <View
          style={{
            marginTop: sizeHelper.calHp(10),
          }}
        >
          <CustomText
            size={12}
            text={error}
            // color={colors.red}
          />
        </View>
      )}
    </View>
  );
};
export default CustomInput;
