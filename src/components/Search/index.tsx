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
import { theme } from "../../utils/Themes";
import { images } from "../../utils/Themes/Images";

  
  type Props = {
    placeholder?: string;
    navigation?: any;
    value?: any;
    onPressClose?: any;
    backgroundColor?: string;
    width?: any;
    height?: any;
    onChangeText?: (text: any) => void;
    onFocus?: () => void;
    leftSource?: any;
    filter?: boolean;
    onSearch?:()=>void
    onFilter?:()=>void
    onSubmitEditing?:()=>void
  };
  
  const CustomSearch = ({
    placeholder,
    onChangeText,
    value,
    backgroundColor,
    width,
    height,
    onFocus,
    leftSource,
    filter,
    onSearch,
    onFilter,
    onSubmitEditing
  }: Props) => {
    const navigation: any = useNavigation();
    const { colors }: any = useTheme(); // Get the current theme's colors

    return (
        <View
          style={{
            ...styles.searchContainer,
            width: width || "100%",
            backgroundColor: "transparent",
            height:sizeHelper.calHp(65),
            gap:sizeHelper.calWp(20)
          }}
        >
             <Image
              source={images.search}
              resizeMode="contain"
              style={{
                width:sizeHelper.calWp(40),
                height:sizeHelper.calWp(40),
                tintColor:colors.text
              }}
            />
           <TextInput
              allowFontScaling={false} // Disable font scaling
              style={{...styles.inputContainer,
                color:colors.text
            }}
              placeholder={placeholder}
              value={value}
              onSubmitEditing={onSubmitEditing}
              onChangeText={onChangeText}
              onFocus={onFocus}
              placeholderTextColor={"#797D86"}
            />
         
        </View>
      
    );
  };
  export default CustomSearch;
  
  const styles = StyleSheet.create({
    main: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: 10,
      marginTop: 20,
    },
    img: { width: 23, height: 23 },
   
    searchContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: sizeHelper.calWp(25),
      borderRadius:999,
      borderWidth:0.5,
      borderColor:"#D9D9D9"
    },
    inputContainer: {
      flex: 1,
      fontSize: 14,
      fontFamily: fonts.Roboto_Regular,
      padding: 0,
    },
  });
  