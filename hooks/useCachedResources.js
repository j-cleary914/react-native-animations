import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import * as React from "react";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // console.log("hi");
        // SplashScreen.preventAutoHideAsync();

        // Load fonts
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
