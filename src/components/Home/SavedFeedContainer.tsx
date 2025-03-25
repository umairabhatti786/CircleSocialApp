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

const SavedFeedContainer = () => {
  const { colors }: any = useTheme(); // Get the current theme's colors
  const navigation: any = useNavigation();
  const styles = getStyles(colors); // Pass colors to the styles function
  const SavedFeedData = [
    { img: images.feed1, title: "Outside the Door" },
    { img: images.feed2, title: "TV Lounge" },
    { img: images.feed3, title: "At Doorbell" },
    { img: images.feed4, title: "In Street" },
  ];

  return (
    <View
    style={{
      gap: sizeHelper.calHp(20),
      width: windowWidth / 1.2,
    }}
  >
    <CustomText
      text={"Saved Feed"}
      color={colors.text}
      fontWeight="600"
      fontFam={fonts.Robotor_Medium}
      size={30}
    />
    <View
      style={{
        gap: sizeHelper.calHp(30),
        borderRadius: sizeHelper.calWp(20),
        padding: sizeHelper.calWp(20),
        backgroundColor: colors.eerie_black,
        borderWidth: 0.5,
        borderColor: colors?.gray_divider,
      }}
    >
      <View
        style={{
          ...appStyles.rowjustify,
          gap: sizeHelper.calWp(15),
          flexWrap: "wrap",
        }}
      >
        {SavedFeedData.map((item, index) => {
          return (
            <View
              style={{
                ...styles.saveFeedBox,
                width: index == 0 ? "66%" : "31%",
              }}
            >
              <Image
                style={{ width: "100%", height: "100%" }}
                source={item?.img}
              />
              <View
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  backgroundColor: "#00000050",
                }}
              />
              <TouchableOpacity
                style={{
                  width: sizeHelper.calWp(40),
                  height: sizeHelper.calWp(40),
                  position: "absolute",
                  alignSelf: "center",
                  top: "35%",
                }}
              >
                <Image
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  source={images.play}
                />
              </TouchableOpacity>
              <CustomText
                text={item?.title}
                color={colors.white}
                style={{
                  position: "absolute",
                  left: sizeHelper.calWp(10),
                  bottom: sizeHelper.calHp(10),
                }}
                size={17}
              />
            </View>
          );
        })}

        <View
          style={{
            ...styles.saveFeedBox,
            width: "31%",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: colors.text,
            gap: sizeHelper.calHp(10),
          }}
        >
          <Image
            style={{
              width: sizeHelper.calWp(40),
              height: sizeHelper.calWp(40),
            }}
            source={images.save_feed}
          />

          <CustomText text={"Save Feed"} color={colors.white} size={17} />
        </View>
      </View>
    </View>
  </View>
  );
};
export default SavedFeedContainer;

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
