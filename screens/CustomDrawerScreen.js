import React, { useEffect, useState, useRef } from "react";
import {
  Animated,
  StyleSheet,
  Image,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import profile from "../components/CustomDrawer/assets/profile.png";
import photo from "../components/CustomDrawer/assets/photo.jpg";

import TabButton from "../components/CustomDrawer/TabButton";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

// https://www.youtube.com/watch?v=roXoHAP-28g idea from here

export default () => {
  const [currentTab, setCurrentTab] = useState("Home");
  const [showMenu, setShowMenu] = useState(false);

  const handleTabButtonPress = (pressedButton) => {
    setCurrentTab(pressedButton);
  };

  //Animated Properties
  const offsetValue = useRef(new Animated.Value(0)).current;
  //scale initially must be 1
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ justifyContent: "flex-start", padding: 20 }}>
        <Image source={profile} style={styles.profileImage} />
        <Text style={styles.nameText}>Girl Name</Text>
        <TouchableOpacity>
          <Text style={styles.viewProfileText}>View Profile</Text>
        </TouchableOpacity>

        <View style={{ flexGrow: 1 }}>
          {
            //tab bar buttons...
          }
          <TabButton
            title="Home"
            currentTab={currentTab}
            handleTabButtonPress={handleTabButtonPress}
            icon={
              <FontAwesomeIcon
                icon={["far", "home"]}
                size={25}
                color={currentTab == "Home" ? "#5359D1" : "white"}
              />
            }
          />
          <TabButton
            title="Search"
            currentTab={currentTab}
            handleTabButtonPress={handleTabButtonPress}
            icon={
              <FontAwesomeIcon
                icon={["fas", "search"]}
                size={25}
                color={currentTab == "Search" ? "#5359D1" : "white"}
              />
            }
          />
          <TabButton
            title="Notifications"
            currentTab={currentTab}
            handleTabButtonPress={handleTabButtonPress}
            icon={
              <FontAwesomeIcon
                icon={["fas", "bell"]}
                size={25}
                color={currentTab == "Notifications" ? "#5359D1" : "white"}
              />
            }
          />
          <TabButton
            title="Settings"
            currentTab={currentTab}
            handleTabButtonPress={handleTabButtonPress}
            icon={
              <FontAwesomeIcon
                icon={["far", "cog"]}
                size={25}
                color={currentTab == "Settings" ? "#5359D1" : "white"}
              />
            }
          />
        </View>
        <View>
          <TabButton
            title="Log Out"
            currentTab={currentTab}
            handleTabButtonPress={handleTabButtonPress}
            icon={
              <FontAwesomeIcon
                icon={["fas", "sign-out"]}
                size={25}
                color={currentTab == "Log Out" ? "#5359D1" : "white"}
              />
            }
          />
        </View>
      </View>

      {
        //Overlay View...
      }

      <Animated.View
        style={{
          // flexGrow: 1,
          width: "100%",
          backgroundColor: "white",
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          paddingHorizontal: 16,
          paddingVertical: 24,
          borderRadius: showMenu ? 15 : 0,
          //Transforming View
          transform: [{ scale: scaleValue }, { translateX: offsetValue }],
        }}
      >
        <Animated.View
          style={{
            transform: [
              {
                translateY: closeButtonOffset,
              },
            ],
          }}
        >
          <TouchableOpacity
            onPress={() => {
              Animated.timing(scaleValue, {
                toValue: showMenu ? 1 : 0.88,
                duration: 300,
                useNativeDriver: true,
              }).start();

              Animated.timing(offsetValue, {
                toValue: showMenu ? 0 : 230,
                duration: 300,
                useNativeDriver: true,
              }).start();

              Animated.timing(closeButtonOffset, {
                //this value keeps the button in the same vertical position so it looks like the app is pulling away upwards towards the top
                toValue: showMenu ? 0 : -30,
                duration: 300,
                useNativeDriver: true,
              }).start();

              setShowMenu(!showMenu);
            }}
          >
            <FontAwesomeIcon
              icon={showMenu ? ["fas", "times"] : ["far", "bars"]}
              size={22}
              color="black"
              style={{ marginTop: 20 }}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              color: "black",
              paddingTop: 10,
            }}
          >
            {currentTab}
          </Text>

          <Image
            source={photo}
            style={{
              width: "100%",
              height: 300,
              borderRadius: 15,
              marginTop: 25,
            }}
          ></Image>

          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              paddingTop: 15,
              paddingBottom: 5,
            }}
          >
            Girl Photo
          </Text>

          <Text>Generic text</Text>
        </Animated.View>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5359D1",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingTop: 40,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  nameText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginTop: 20,
  },
  viewProfileText: {
    marginTop: 6,
    color: "white",
  },
});
