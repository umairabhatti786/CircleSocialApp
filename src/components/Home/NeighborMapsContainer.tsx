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
import { windowWidth } from "../../utils/Commons/Dimention";
import CustomText from "../Text";
import CustomButton from "../Button";
import { images } from "../../utils/Themes/Images";

const NeighborMapsContainer = () => {
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
        text={"Neighbor Maps"}
        color={colors.text}
        fontWeight="600"
        fontFam={fonts.Robotor_Medium}
        size={30}
      />
      <View
        style={{
          borderRadius: sizeHelper.calWp(20),
          overflow: "hidden",
          height: sizeHelper.calHp(320),
          backgroundColor: colors.eerie_black,
          borderWidth: 0.5,
          borderColor: colors?.gray_divider,
        }}
      >
        <View style={{ width: "100%", height: "75%" }}>
          <Image
            style={{ width: "100%", height: "100%" }}
            source={images.feed1}
          />

          <TouchableOpacity
            style={{
              position: "absolute",
              alignSelf: "center",
              top: "35%",
              backgroundColor: colors.text,
              borderRadius: 999,
              justifyContent: "center",
              paddingHorizontal: sizeHelper.calWp(32),
              paddingVertical: sizeHelper.calWp(15),
              flexDirection: "row",
              alignItems: "center",
              gap: sizeHelper.calWp(10),
            }}
          >
            <Image
              style={{
                width: sizeHelper.calWp(40),
                height: sizeHelper.calWp(40),
                tintColor: colors.background,
              }}
              source={images.view_maap}
              resizeMode="contain"
            />
            <CustomText text={"View Map"} size={22} color={colors.background} />
          </TouchableOpacity>
        </View>
        <CustomButton
          text="42 Security Events in Your Area"
          bgColor={dark ? "#141414" : "#FAF9F5"}
          borderRadius={999}
          height={47}
          fontWeight="400"
          size={20}
          style={{
            marginTop: sizeHelper.calHp(15),
            marginHorizontal: sizeHelper.calWp(20),
          }}
          width={"60%"}
          textColor={"#E64A19"}
        />
      </View>
    </View>
  );
};
export default NeighborMapsContainer;

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
      backgroundColor: "#FAF9F5",
    },
    saveFeedBox: {
      height: sizeHelper.calHp(138),
      borderRadius: sizeHelper.calWp(20),
      overflow: "hidden",
      alignItems: "flex-end",
    },
  });
