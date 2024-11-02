/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import Constants from 'expo-constants';

const extra = Constants.expoConfig?.extra || {};
console.log(extra);
export const Colors = {
  light: {
    text: extra.LIGHT_TEXT_COLOR || '#11181C',
    background: extra.LIGHT_BACKGROUND_COLOR || '#fff',
    tint: extra.TINT_COLOR_LIGHT || '#0a7ea4',
    icon: extra.ICON_COLOR_LIGHT || '#687076',
    tabIconDefault: extra.TAB_ICON_DEFAULT_LIGHT || '#687076',
    tabIconSelected: extra.TAB_ICON_SELECTED_LIGHT || '#0a7ea4',
  },
  dark: {
    text: extra.DARK_TEXT_COLOR || '#ECEDEE',
    background: extra.DARK_BACKGROUND_COLOR || '#151718',
    tint: extra.TINT_COLOR_DARK || '#ffffff',
    icon: extra.ICON_COLOR_DARK || '#9BA1A6',
    tabIconDefault: extra.TAB_ICON_DEFAULT_DARK || '#9BA1A6',
    tabIconSelected: extra.TAB_ICON_SELECTED_DARK || '#ffffff',
  },
};
