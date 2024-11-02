export default () => {
  return {
  "expo": {
    "name": "clientStore",
    "slug": "clientStore",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/images/icon.png",
    "scheme": "myapp",
    "userInterfaceStyle": "automatic",
    "splash": {
      "image": process.env.LOGO_URL,
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/images/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      }
    },
    "web": {
      "bundler": "metro",
      "output": "static",
      "favicon": "./assets/images/favicon.png"
    },
    "plugins": [
      "expo-router"
    ],
    "experiments": {
      "typedRoutes": true
    },
    "extra": {
      ENTERPRISE_ID: process.env.ENTERPRISE_ID,
      LOGO_URL: process.env.LOGO_URL,
      LIGHT_TEXT_COLOR: process.env.LIGHT_TEXT_COLOR,
      LIGHT_BACKGROUND_COLOR: process.env.LIGHT_BACKGROUND_COLOR,
      TINT_COLOR_LIGHT: process.env.TINT_COLOR_LIGHT,
      ICON_COLOR_LIGHT: process.env.ICON_COLOR_LIGHT,
      TAB_ICON_DEFAULT_LIGHT: process.env.TAB_ICON_DEFAULT_LIGHT,
      TAB_ICON_SELECTED_LIGHT: process.env.TAB_ICON_SELECTED_LIGHT,
      DARK_TEXT_COLOR: process.env.DARK_TEXT_COLOR,
      DARK_BACKGROUND_COLOR: process.env.DARK_BACKGROUND_COLOR,
      TINT_COLOR_DARK: process.env.TINT_COLOR_DARK,
      ICON_COLOR_DARK: process.env.ICON_COLOR_DARK,
      TAB_ICON_DEFAULT_DARK: process.env.TAB_ICON_DEFAULT_DARK,
      TAB_ICON_SELECTED_DARK: process.env.TAB_ICON_SELECTED_DARK,
    }
  }
}
};
