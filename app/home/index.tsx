import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Index = () => {
  const [userDetails, setUserDetails] = useState(null);

  // Fetch user details from AsyncStorage
  const getUserDetails = async () => {
    try {
      const userData = await AsyncStorage.getItem("user");
      if (userData) {
        setUserDetails(JSON.parse(userData)); // Parse and set the user details
      }
    } catch (error) {
      console.error("Failed to load user details:", error);
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <View style={styles.container}>
      {userDetails ? (
        <>
          <Text style={styles.label}>Name: {userDetails.name}</Text>
          <Text style={styles.label}>Email: {userDetails.email}</Text>
        </>
      ) : (
        <Text style={styles.label}>Loading user details...</Text>
      )}
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    color: "#333",
  },
});
