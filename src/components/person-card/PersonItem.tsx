import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Person } from "../../state/static/sampleData";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons directly
import { useThemeColor } from "../../hooks/useThemeColor";

interface PersonItemProps {
  person: Person;
  onRemove: (phoneNumber: string) => void;
}
const PersonItem: React.FC<PersonItemProps> = ({ person, onRemove }) => {
  const background = useThemeColor({}, "background2");
  const textColor = useThemeColor({}, "text");
  return (
    <View style={[styles.itemContainer, { backgroundColor: background }]}>
      <View style={styles.textContainer}>
        <Text style={[styles.name, { color: textColor }]}>{person.name}</Text>
        <Text style={styles.phoneNumber}>{person.phoneNumber}</Text>
        {person.address && <Text style={styles.address}>{person.address}</Text>}
        <Text style={styles.age}>Age: {person.age}</Text>
      </View>

      <Ionicons
        name="trash-outline"
        size={24}
        color="red"
        onPress={() => onRemove(person.phoneNumber)}
        style={styles.removeIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default PersonItem;
