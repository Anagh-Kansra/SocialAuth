import { useRouter } from "expo-router";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import GradientText from "@/components/GradientText";
import GoogleSigninButton from "@/components/GoogleSigninButton";
import ActivityIndex from "@/components/ActivityIndex";
import ProgressBar from "@/components/ProgressBar";
import Images from "@/utils/Images";

const { height, width } = Dimensions.get("window");

export default function LoginScreen() {
  const router = useRouter();

  return (
    <View style={styles.mainContainer}>
      {/* PROGRESS BAR */}

      <View style={styles.progressBarContainer}>
        <ProgressBar progress={25} />
      </View>

      {/* TEXT -- Begin your mindful journey */}

      <View style={styles.upperContainer}>
        <GradientText
          text="Begin Your"
          color1="#F7B174"
          color2="#F3A8CE"
          style={styles.titleTop}
        />
        <GradientText
          text="Mindful Journey"
          color1="#F7B174"
          color2="#F3A8CE"
          style={styles.titleBottom}
        />
        <Text style={styles.subtitle}>
          Log in or sign up to begin your journey with personalized, human-like
          wellness support.
        </Text>
      </View>

      {/* SHADOW EFFECT OF BOTTOM CARD */}

      <LinearGradient
        colors={["#F7B174", "#F3A8CE"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.card}
      >
        {/* TEXTURE ON THE CARD */}

        <Image source={Images.Texture} style={styles.textureImage} />
        <View
          style={[
            styles.textureImage,
            {
              position: "absolute",
              top: -50,
              height: 100,
              opacity: 0.1,
              zIndex: -1,
            },
          ]}
        >
          <LinearGradient
            colors={["white", "black"]}
            start={[0, 0]}
            end={[0, 1]}
            style={{
              flex: 1,
              borderRadius: 20,
            }}
          />
        </View>

        {/* HARDCODED ACTIVITY BAR*/}

        <View style={{ position: "absolute", top: 0, marginTop: 20 }}>
          <ActivityIndex />
        </View>

        {/* AUTH BUTTONS */}

        {/*
        <SocialAuthButton
          icon="apple1"
          text="Continue with Apple"
          goTo="/name"
          color="black"
          textColor="white"
        />

        <SocialAuthButton
          icon="google"
          text="Continue with Google"
          goTo="/name"
          color="white"
          textColor="black"
        />
        */}

        <GoogleSigninButton />
        <GoogleSigninButton />

        {/* OR TEXT WITH LINE */}

        <View style={styles.orContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>Or</Text>
          <View style={styles.line} />
        </View>

        {/* TERMS AND CONDITIONS LINKS */}

        <Text style={styles.termsText}>
          I agree to <Text style={styles.linkText}>Privacy Policy</Text> &{" "}
          <Text style={styles.linkText}>Terms of Service</Text>
        </Text>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  progressBarContainer: {
    position: "absolute",
    top: 50,
    left: 0,
    right: 0,
    zIndex: 1,
    paddingHorizontal: 20,
  },
  upperContainer: {
    flex: 0.6,
    justifyContent: "center",
    alignItems: "center",
  },
  titleTop: {
    fontSize: 36,
    marginBottom: 0,
    textAlign: "center",
  },
  titleBottom: {
    fontSize: 44,
    fontWeight: "bold",
    marginTop: -10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 40,
    color: "#000000",
    opacity: 0.5,
  },
  card: {
    position: "absolute",
    bottom: 0,
    width: width,
    height: height * 0.4,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingTop: 25,
    paddingHorizontal: 30,
    paddingBottom: 40,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 0,
    backgroundColor: "#FFFFFF",
  },
  textureImage: {
    position: "absolute",
    top: 0,
    width: width,
    height: height,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    opacity: 0.05,
    zIndex: 1,
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    marginVertical: 10,
    padding: 20,
    zIndex: 1,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "white",
  },
  orText: {
    color: "white",
    fontSize: 14,
    paddingHorizontal: 10,
  },
  termsText: {
    color: "white",
    fontSize: 12,
    textAlign: "center",
    zIndex: 1,
  },
  linkText: {
    textDecorationLine: "underline",
    color: "white",
    fontSize: 12,
  },
});
