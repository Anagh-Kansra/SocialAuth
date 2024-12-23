import { useRouter } from "expo-router";
import { View, Text, StyleSheet, TouchableWithoutFeedback,Dimensions } from "react-native";
import { useState } from "react";
import ProgressBar from "@/components/ProgressBar";
import ContinueButton from "@/components/ContinueButton";
import GradientText from "@/components/GradientText";
import BottomBlurEffect from "@/components/BottomBlurEffect";
import SelectOptions from "@/components/SelectOptions";

const {width,height} = Dimensions.get("screen")

export default function AgeScreen() {
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
          <ProgressBar progress={75} />
        </View>
        <View style={styles.ageContainer}>
          <Text style={styles.title}>Great, Let’s make Mynd all about you!</Text>
          <Text style={styles.centerTitle}>How long have you been</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.centerTitle}>rocking this</Text>
            <GradientText
              text=" World?"
              style={{ fontSize: 28, fontWeight: '700' }}
              color1="#F7B174"
              color2="#F3A8CE"
            />
            <Text style={{ fontSize: 24 }}>🎂</Text>
          </View>
        </View>
        <View style={styles.options}>
          <SelectOptions
            text="Under 18"
            width={width*0.4}
            isSelected={selectedOption === "Under 18"}
            onSelect={() => handleSelect("Under 18")}
          />
          <SelectOptions
            text="18-24"
            width={width*0.4}
            isSelected={selectedOption === "18-24"}
            onSelect={() => handleSelect("18-24")}
          />
          <SelectOptions
            text="25-34"
            width={width*0.4}
            isSelected={selectedOption === "25-34"}
            onSelect={() => handleSelect("25-34")}
          />
          <SelectOptions
            text="35-44"
            width={width*0.4}
            isSelected={selectedOption === "35-44"}
            onSelect={() => handleSelect("35-44")}
          />
          <SelectOptions
            text="45-54"
            width={width*0.4}
            isSelected={selectedOption === "45-54"}
            onSelect={() => handleSelect("45-54")}
          />
          <SelectOptions
            text="55+"
            width={width*0.4}
            isSelected={selectedOption === "55+"}
            onSelect={() => handleSelect("55+")}
          />
        </View>
        <BottomBlurEffect />
        <View style={styles.buttonContainer}>
          <ContinueButton text="Continue" onPress={() => router.push("/gender")} />
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
  ageContainer: {
    position: "absolute",
    top: 217,
    left: 0,
    right: 0,
    zIndex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: "400",
    opacity: 0.5,
  },
  centerTitle: {
    fontSize: 28,
    fontWeight: "400",
    opacity: 0.5,
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
    top: height*0.8,
    left: 0,
    right: 0,
    zIndex: 1,
    paddingHorizontal: 20,
    alignItems: "center",
  },
});
