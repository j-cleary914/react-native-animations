import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import * as React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars as farBars,
  faPlus as farPlus,
  faMinus as farMinus,
  faHome as farHome,
  faCog as farCog,
} from "@fortawesome/pro-regular-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  faComment,
  faTh,
  faUser,
  faBell,
  faFile,
  faInfoCircle,
  faBriefcase,
  faCommentsAlt,
  faSignOut,
  faMusicAlt,
  faSearch,
  faTimes,
} from "@fortawesome/pro-solid-svg-icons";
import { faCreditCard as falCreditCard } from "@fortawesome/pro-light-svg-icons";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // console.log("hi");
        // SplashScreen.preventAutoHideAsync();

        // Load fonts
        library.add(
          farBars,
          faTwitter,
          faComment,
          faTh,
          faUser,
          faBell,
          faFile,
          faInfoCircle,
          faBriefcase,
          falCreditCard,
          faCommentsAlt,
          faSignOut,
          farPlus,
          farMinus,
          faMusicAlt,
          farHome,
          faSearch,
          farCog,
          faTimes
        );

        await Font.loadAsync({
          "space-mono": require("../assets/fonts/SpaceMono-Regular.ttf"),
        });

        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        // await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        // SplashScreen.hideAsync();
        // the splash screen is being hidden in the navigators as that avoids white flash
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
