import { useNavigation, useTheme } from "@react-navigation/native";
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { appStyles } from "../../utils/GlobalStyles";
import sizeHelper from "../../utils/Helpers";
import { fonts } from "../../utils/Themes/fonts";
import { images } from "../../utils/Themes/Images";
import { windowWidth } from "../../utils/Commons/Dimention";
import CustomText from "../Text";
import CustomButton from "../Button";

const CurrentSystemContainer = () => {
  const { colors,dark }: any = useTheme(); // Get the current theme's colors
  const navigation: any = useNavigation();
  const styles = getStyles(colors); // Pass colors to the styles function

  return (
    <View
    style={{
      gap: sizeHelper.calHp(20),
      width: windowWidth / 1.2,
    }}
  >
    <CustomText
      text={"Current System"}
      color={colors.text}
      fontWeight="600"
      fontFam={fonts.Robotor_Medium}
      size={30}
    />
    <View
      style={{
        gap: sizeHelper.calHp(30),
        borderRadius: sizeHelper.calWp(20),
        backgroundColor: colors.eerie_black,
        borderWidth: 0.5,
        borderColor: colors?.gray_divider,
      }}
    >
      <View
        style={{
          ...appStyles.rowjustify,
          gap: sizeHelper.calWp(20),
          paddingHorizontal: sizeHelper.calHp(30),
          paddingVertical: sizeHelper.calHp(40),
        }}
      >
        <View style={{ alignItems: "center", gap: sizeHelper.calHp(10) }}>
          <View
            style={{
              ...styles.circle,
              width: sizeHelper.calWp(100),
              height: sizeHelper.calWp(100),
            }}
          >
            <Image
              style={{
                width: sizeHelper.calWp(45),
                height: sizeHelper.calWp(45),
              }}
              source={images.disarmed}
            />
          </View>
          <CustomText text={"Disarmed"} color={"#85837A"} size={22} />
        </View>

        <View style={{ alignItems: "center", gap: sizeHelper.calHp(10) }}>
          <View
            style={{
              ...styles.circle,
              width: sizeHelper.calWp(100),
              height: sizeHelper.calWp(100),
              backgroundColor: colors.text,
            }}
          >
            <Image
              style={{
                width: sizeHelper.calWp(45),
                height: sizeHelper.calWp(45),
                tintColor: colors.background,
              }}
              source={images.user_shield}
            />
          </View>
          <CustomText
            text={"Home"}
            color={colors.text}
            fontFam={fonts.Roboto_Bold}
            fontWeight="700"
            size={22}
          />
        </View>
        <View style={{ alignItems: "center", gap: sizeHelper.calHp(10) }}>
          <View
            style={{
              ...styles.circle,
              width: sizeHelper.calWp(100),
              height: sizeHelper.calWp(100),
              backgroundColor:dark?"#141414": "#FAF9F5",

            }}
          >
            <Image
              style={{
                width: sizeHelper.calWp(45),
                height: sizeHelper.calWp(45),
              }}
              source={images.workout}
            />
          </View>
          <CustomText text={"Away"} color={"#85837A"} size={22} />
        </View>
      </View>

      <View>
        <View style={styles.divider} />
        <View
          style={{
            ...appStyles.rowjustify,
            gap: sizeHelper.calWp(20),
            padding: sizeHelper.calWp(25),
          }}
        >
          <CustomButton
            text="4 New Events"
            bgColor={dark?"#141414":  "#FAF9F5"}
            borderRadius={999}
            height={47}
            fontWeight="400"
            size={20}
            width={"38%"}
            textColor={"#E64A19"}
          />
          <View style={{ ...appStyles.row, gap: sizeHelper.calWp(12) }}>
            <Image
              style={{
                width: sizeHelper.calWp(42),
                height: sizeHelper.calWp(42),
                tintColor: colors.text,
              }}
              source={images.clock}
            />
            <CustomText text={"History"} size={22} color={colors.text} />
          </View>
        </View>
      </View>
    </View>
  </View>
  );
};
export default CurrentSystemContainer;

const getStyles = (colors: any) =>
  StyleSheet.create({
    slide: {
      width: sizeHelper.calWp(310),
      paddingVertical: sizeHelper.calHp(40),
      borderRadius: sizeHelper.calWp(25),
      backgroundColor: colors.background,
      paddingHorizontal: sizeHelper.calWp(20),
      paddingTop: sizeHelper.calHp(20),
      flexDirection: "row",
      justifyContent: "space-between",
      borderWidth: 0.5,
      borderColor: "#E7E6E4",
    },
    circle: {
      width: sizeHelper.calWp(80),
      height: sizeHelper.calWp(80),
      borderRadius: 999,
      alignItems: "center",
      justifyContent: "center",
    },
    divider: { height: sizeHelper.calHp(1), width: "100%", backgroundColor: colors?.gray_divider},

  });
