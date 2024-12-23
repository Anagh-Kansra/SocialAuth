import { useRouter } from "expo-router";
import { View, Text, TextInput, StyleSheet ,Dimensions} from "react-native";
import { useState } from "react";
import ProgressBar from "@/components/ProgressBar";
import ContinueButton from "@/components/ContinueButton";
import GradientText from "@/components/GradientText";
import BottomBlurEffect from "@/components/BottomBlurEffect";

const {width,height} = Dimensions.get("screen");

export default function NameScreen() {
  const [name, setName] = useState("");
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.progressBarContainer}>
        <ProgressBar progress={50} />
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.title}>Let's get to know each other</Text>
        <View style={{flexDirection: 'row', marginBottom:10}}>
        <GradientText style={{fontSize: 28, fontWeight: '700'}} color1="#F7B174" color2="#F3A8CE" text="What "/>
        <Text style={{fontSize: 28, fontWeight: '400' , opacity: 0.7}}>Should We Call</Text>
        <Text>{" "}</Text>
        <Text style={{fontSize: 28, fontWeight: '700'}}>You</Text>
        <Text style={{fontSize: 28, fontWeight: '400', opacity: 0.7}}>?</Text>
        </View>
      </View>
      <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor= {'black'}
          value={name}
          onChangeText={setName}
        />
        <BottomBlurEffect />
      <View style={styles.buttonContainer}>
        <ContinueButton text="Continue" onPress={() => router.push("/age")} />
      </View>
    </View>
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
  nameContainer: {
    position: "absolute",
    top: 253,
    left: 0,
    right: 0,
    zIndex: 1,
    paddingHorizontal: 20,
    alignItems: 'center'
  },
  title: {
    fontSize: 14,
    marginBottom: 0,
    color: '#312F2E',
    textAlign: "center",
    opacity: 0.7,
  },
  input: {
    position: "absolute",
    top: 436,
    zIndex: 1,
    width: "80%",
    paddingHorizontal: 25,
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 50, 
    borderColor: "#D3D8E0",
  },
  buttonContainer: {
    position: "absolute",
    top: height*0.8,
    left: 0,
    right: 0,
    zIndex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
});

