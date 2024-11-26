// src/screens/Home/HomeScreen.tsx

import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Button,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { Person } from "../../state/static/sampleData";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons directly
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { removePersonAsync } from "../../state/redux/person/PersonSlice";

const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const { persons, status } = useAppSelector((state) => state.person);

  // Function to trigger person removal
  const _removePerson = (phoneNumber: string) => {
    dispatch(removePersonAsync(phoneNumber));
  };

  // Function to render each person item
  const renderItem = ({ item }: { item: Person }) => {
    const isRemoving = status === "loading"; // Check if a person is being removed

    return (
      <View style={styles.itemContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.phoneNumber}>{item.phoneNumber}</Text>
          {item.address && <Text style={styles.address}>{item.address}</Text>}
          <Text style={styles.age}>Age: {item.age}</Text>
        </View>

        {/* Remove Bin Icon on the right */}
        <Ionicons
          name="trash-outline"
          size={24}
          color="red"
          onPress={() => _removePerson(item.phoneNumber)}
          style={styles.removeIcon}
        />

        {/* Show Loading Indicator in the middle of the item if it's being removed */}
        {isRemoving && (
          <ActivityIndicator
            size="large"
            color="blue"
            style={styles.loadingIndicator}
          />
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={persons}
        renderItem={renderItem}
        keyExtractor={(item) => item.phoneNumber}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 16,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
    padding: 16,
    backgroundColor: "#f8f8f8",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    position: "relative", // Set position to relative for loading indicator
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  phoneNumber: {
    fontSize: 14,
    color: "#555",
  },
  address: {
    fontSize: 14,
    color: "#777",
  },
  age: {
    fontSize: 14,
    color: "#333",
  },
  removeIcon: {
    alignSelf: "center",
  },
  loadingIndicator: {
    position: "absolute", // Position the indicator absolutely
    top: "50%", // Center it vertically
    left: "50%", // Center it horizontally
    transform: [{ translateX: -12 }, { translateY: -12 }], // Offset to perfectly center the spinner
  },
});

export default HomeScreen;
