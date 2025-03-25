import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  StyleProp,
  ImageStyle,
} from "react-native";
import sizeHelper from "../../utils/Helpers";
import { theme } from "../../utils/Themes";
import CustomText from "../Text";
type Props = {
  icon?: any;
  onPress?: () => void;
  title?:any
};

const SocialButton = ({ icon, onPress,title }: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={

        {
          width:  "100%",
          height: sizeHelper.calHp(70),
          backgroundColor: theme.colors.white,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: sizeHelper.calHp( 18),
          gap:sizeHelper.calWp(20),
          borderWidth: 1,
          borderColor: theme.colors.gray_divider,
          flexDirection:"row"
        }

      }
    >
      <Image source={icon} style={styles.socialImg} resizeMode="contain" />
      <CustomText
                text={title}
                // color={theme.colors.gray100}
                // fontFam={fonts.}
                fontWeight="400"
                size={23}
              />
    </TouchableOpacity>
  );
};
export default SocialButton;

const styles = StyleSheet.create({
  socialBtn: {
    width: sizeHelper.calWp(80),
    height: sizeHelper.calWp(80),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: sizeHelper.calWp(70),
    backgroundColor: "#ECECEC",
  },
  socialImg: {
    width: sizeHelper.calWp(40),
    height: sizeHelper.calWp(40),
  },
});
