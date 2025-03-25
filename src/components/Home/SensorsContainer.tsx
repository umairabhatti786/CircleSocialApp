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

const SensorsContainer = () => {
  const { colors, dark }: any = useTheme(); // Get the current theme's colors
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
        text={"Sensors"}
        color={colors.text}
        fontWeight="600"
        fontFam={fonts.Robotor_Medium}
        size={30}
      />
      <View
        style={{
          ...appStyles.rowjustify,
          gap: sizeHelper.calWp(20),
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("YourDevices")}
          style={{
            ...styles.slide,
            height: sizeHelper.calHp(150),
            backgroundColor: dark ? "#1F1F1F" : colors?.white,
          }}
        >
          <View style={{ gap: sizeHelper.calHp(10) }}>
            <CustomText
              text={"5"}
              color={colors.text}
              fontWeight="700"
              fontFam={fonts.Roboto_Bold}
              size={42}
            />
            <CustomText text={"Devices"} color={colors.text} size={20} />
          </View>
          <View
            style={{
              ...styles.circle,
              backgroundColor: dark ? "#141414" : "#FAF9F5",
            }}
          >
            <Image
              style={{
                width: sizeHelper.calWp(45),
                height: sizeHelper.calWp(45),
              }}
              source={images.devices}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("CamerasScreen")}
          style={{
            ...styles.slide,
            height: sizeHelper.calHp(150),
            backgroundColor: dark ? "#1F1F1F" : colors?.white,
          }}
        >
          <View style={{ gap: sizeHelper.calHp(10) }}>
            <CustomText
              text={"3"}
              color={colors.text}
              fontWeight="700"
              fontFam={fonts.Roboto_Bold}
              size={42}
            />
            <CustomText text={"Cameras"} color={colors.text} size={20} />
          </View>
          <View
            style={{
              ...styles.circle,
              backgroundColor: dark ? "#141414" : "#FAF9F5",
            }}
          >
            <Image
              style={{
                width: sizeHelper.calWp(45),
                height: sizeHelper.calWp(45),
              }}
              source={images.cameras}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          ...appStyles.rowjustify,
          gap: sizeHelper.calWp(20),
        }}
      >
        <View
          style={{
            ...styles.slide,
            height: sizeHelper.calHp(150),
            backgroundColor: dark ? "#1F1F1F" : colors?.white,
          }}
        >
          <View style={{ gap: sizeHelper.calHp(10), width: "60%" }}>
            <CustomText
              text={"4"}
              color={colors.text}
              fontWeight="700"
              fontFam={fonts.Roboto_Bold}
              size={42}
            />
            <CustomText
              text={"Linked Connections"}
              color={colors.text}
              size={20}
            />
          </View>
          <View
            style={{
              ...styles.circle,
              backgroundColor: dark ? "#141414" : "#FAF9F5",
            }}
          >

            <Image
              style={{
                width: sizeHelper.calWp(45),
                height: sizeHelper.calWp(45),
              }}
              source={images.linked}
            />
          </View>
        </View>
        <View
          style={{
            ...styles.slide,
            height: sizeHelper.calHp(150),
            backgroundColor: dark ? "#1F1F1F" : colors?.white,
          }}
        >
          <View style={{ gap: sizeHelper.calHp(10), width: "60%" }}>
            <CustomText
              text={"16"}
              color={colors.text}
              fontWeight="700"
              fontFam={fonts.Roboto_Bold}
              size={42}
            />
            <CustomText
              text={"Security Reports"}
              color={colors.text}
              size={20}
            />
          </View>
     <View
            style={{
              ...styles.circle,
              backgroundColor: dark ? "#141414" : "#FAF9F5",
            }}
          >
            <Image
              style={{
                width: sizeHelper.calWp(45),
                height: sizeHelper.calWp(45),
              }}
              source={images.security_report}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
export default SensorsContainer;

const getStyles = (colors: any) =>
  StyleSheet.create({
    slide: {
      width: sizeHelper.calWp(310),
      paddingVertical: sizeHelper.calHp(40),
      borderRadius: sizeHelper.calWp(25),
      paddingHorizontal: sizeHelper.calWp(20),
      paddingTop: sizeHelper.calHp(20),
      flexDirection: "row",
      justifyContent: "space-between",
      borderWidth: 0.5,
      borderColor: colors?.gray_divider,
    },
    circle: {
      width: sizeHelper.calWp(80),
      height: sizeHelper.calWp(80),
      borderRadius: sizeHelper.calWp(80),
      alignItems: "center",
      justifyContent: "center",
    },
  });
