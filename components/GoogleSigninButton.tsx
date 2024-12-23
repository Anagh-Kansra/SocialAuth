import React, { useEffect } from "react";
import SocialAuthButton from "./SocialAuthButton";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

// Web and Android client IDs
const ANDROID_CLIENT_ID =
  "405829158609-nu7kpm1n97nu02psvtfmqtlssthialhd.apps.googleusercontent.com";
const WEB_CLIENT_ID =
  "405829158609-70tims6ldk9bc8861t0qo2ea7bvt13bl.apps.googleusercontent.com";

WebBrowser.maybeCompleteAuthSession();

const GoogleSignInButton = () => {
  // Config for Google OAuth
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: ANDROID_CLIENT_ID,
    webClientId: WEB_CLIENT_ID,
  });

  // Handle the authentication response
  useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      const token = authentication?.accessToken;

      if (token) {
        console.log("Access Token:", token);

        // Fetch user info
        fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: { Authorization: `Bearer ${token}` },
        })
          .then((res) => res.json())
          .then(async (userInfo) => {
            console.log("User Info:", userInfo);

            // Store user information
            await AsyncStorage.setItem("user", JSON.stringify(userInfo));

            // Navigate to the next screen
            router.push("/name");
          })
          .catch((error) => console.error("Error fetching user info:", error));
      }
    }
  }, [response]);

  return (
    <SocialAuthButton
      icon="google"
      text="Continue with Google"
      onPress={() => promptAsync()}
      color="white"
      textColor="black"
    />
  );
};

export default GoogleSignInButton;
