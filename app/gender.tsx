import { useRouter } from "expo-router";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { useState } from "react";
import ProgressBar from "@/components/ProgressBar";
import BottomBlurEffect from "@/components/BottomBlurEffect";
import ContinueButton from "@/components/ContinueButton";
import GradientText from "@/components/GradientText";
import SelectOptions from "@/components/SelectOptions";

const { width, height } = Dimensions.get("screen");

export default function GenderScreen() {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const handleDeselect = () => {
    setSelectedOption(null);
  };

  return (
    <TouchableWithoutFeedback onPress={handleDeselect}>
      <View style={styles.container}>
        <View style={styles.progressBarContainer}>
          <ProgressBar progress={100} />
        </View>
        <View style={styles.genderContainer}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.title}>Choose the</Text>
            <GradientText
              text=" Identity "
              color1="#F7B174"
              color2="#F3A8CE"
              style={[styles.title, { fontWeight: "700", opacity: 1.0 }]}
            />
            <Text style={styles.title}>That</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.title}>Feels Right for</Text>
            <Text> </Text>
            <Text style={[styles.title, { fontWeight: "700", opacity: 0.7 }]}>
              You
            </Text>
            <Text style={styles.title}>?</Text>
          </View>
        </View>
        <View style={styles.options}>
          <SelectOptions
            text="Female"
            width={width * 0.8}
            isSelected={selectedOption === "Female"}
            onSelect={() => handleSelect("Female")}
          />
          <SelectOptions
            text="Male"
            width={width * 0.8}
            isSelected={selectedOption === "Male"}
            onSelect={() => handleSelect("Male")}
          />
          <SelectOptions
            text="Non-Binary"
            width={width * 0.8}
            isSelected={selectedOption === "Non-Binary"}
            onSelect={() => handleSelect("Non-Binary")}
          />
          <SelectOptions
            text="Other"
            width={width * 0.8}
            isSelected={selectedOption === "Other"}
            onSelect={() => handleSelect("Other")}
          />
        </View>
        <BottomBlurEffect />
        <View style={styles.buttonContainer}>
          <ContinueButton
            text="Continue"
            onPress={() => router.push("/home")}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
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
  genderContainer: {
    alignItems: "center",
    position: "absolute",
    top: 253,
    left: 0,
    right: 0,
  },
  title: {
    opacity: 0.5,
    fontSize: 28,
    fontWeight: "400",
  },
  options: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    position: "absolute",
    paddingHorizontal: 30,
    top: 403,
    zIndex: 1,
  },
  buttonContainer: {
    position: "absolute",
    top: height * 0.8,
    left: 0,
    right: 0,
    zIndex: 1,
    paddingHorizontal: 20,
    alignItems: "center",
  },
});
