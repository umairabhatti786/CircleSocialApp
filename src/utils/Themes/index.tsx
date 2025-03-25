import { DarkTheme, DefaultTheme, Theme } from "@react-navigation/native";

// export const theme = {
//   colors: {
//     secondry: "#0099FF",
//     primary: "#AD9D6A",
//     gray_input:"#F8F7F7",
//     gray_placeholder:"#9F9B93",
//     gray_divider:"#E7E6E4",
//     gray100:"#85837A",
//     light_red:"#FF3131",
//     blue: "#3777F5",
//     blue100:"#0C5FBE",
//     black: "#000000",
//     half_black: "#150000",

//     black100: "#161616",
//     background:"#F5F5F5",

//     white: "#FFFFFF",
//     gray:"#4E4E4E",
//     half_white: "#FFFFFFB4",
//     input_border: "#707070",
//     gray_button: "#B4B4B4",
//     screen_background: "#F6F7F9",
//     input_background: "#F9F9F9",
//     gray200: "#F4F4F4",
//     gray400:"#434343",
//     gray500:"#797D86",
//     gray600:"#E3E5E8",
//     gray700:"#757575",
//     gray800:"#F6F5F5",
//     gray900:"#7E7E7E",
//     gray1000:"#9C9C9C",
//     gray65:"#0E0C0C65",
//     green: "#3FBF27",

//   },
// };

export const theme = {
  colors: {
    secondry: "#0099FF",
    primary: "#AD9D6A",
    gray_input: "#F8F7F7",
    gray_placeholder: "#9F9B93",
    gray_divider: "#E7E6E4",
    gray100: "#85837A",
    light_red: "#FF3131",
    blue: "#3777F5",
    background: "#ffffff",
  },
};

const commonColors = {
  secondry: "#0099FF",
  primary: "#AD9D6A",
  white: "#ffffff",
  green: "#3FBF27",
  green100:"#30D158",
  red: "#d62828",
  black: "#000000",
};



export const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...commonColors,
    background: "#FFFFFF",
    white: "#FFFFFF",
    text: "#000000",
    grey: "#868897",
    blue: "#3875E9",
    gray_input: "#F8F7F7",
    gray_placeholder: "#9F9B93",
    gray_divider: "#E7E6E4",
    gray100: "#85837A",
    off_white:"#F4F3F1",
    eerie_black:"#FFFFFF",
  },
  dark: false,
} as Theme;
export const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DefaultTheme.colors,
    ...commonColors,
    background: "#000000",
    text: "#ffffff",
    grey: "#868897",
    blue: "#3875E9",
    gray_input: "#F8F7F7",
    gray_placeholder: "#9F9B93",
    gray_divider: "#282724",
    gray100: "#85837A",
    off_white:"#191919",
    eerie_black:"#1F1F1F",

    ...commonColors,
  },
  dark: true,
};
