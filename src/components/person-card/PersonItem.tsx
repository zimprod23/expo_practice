import {
  View,
  StyleSheet,
  Pressable,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { Person } from "../../state/static/sampleData";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons directly
import { useThemeColor } from "../../hooks/useThemeColor";
import { Text } from "react-native-paper";

interface PersonItemProps {
  person: Person;
  onRemove: (phoneNumber: string) => void;
  onPress: (person: Person) => void;
}

const PersonItem: React.FC<PersonItemProps> = ({
  person,
  onRemove,
  onPress,
}) => {
  const background = useThemeColor({}, "background2");
  const textColor = useThemeColor({}, "text");
  const [isLoading, setisLoading] = useState(false);

  return (
    <Pressable
      style={[styles.itemContainer, { backgroundColor: background }]}
      onPress={() => onPress(person)}
    >
      <View style={styles.avatarContainer}>
        {person.image ? (
          <Image source={{ uri: person.image }} style={styles.avatar} />
        ) : (
          <Ionicons name="person-circle-outline" size={48} color="#ccc" />
        )}
      </View>

      {/* Text Content Section */}
      <View style={styles.textContainer}>
        <Text style={[styles.name, { color: textColor }]}>{person.name}</Text>
        <Text style={[styles.phoneNumber, { color: textColor }]}>
          {person.phoneNumber}
        </Text>
        {person.address && (
          <Text style={[styles.address, { color: textColor }]}>
            {person.address}
          </Text>
        )}
        <Text style={[styles.age, { color: textColor }]}>
          Age: {person.age}
        </Text>
      </View>

      {isLoading ? (
        <ActivityIndicator
          size="small"
          color="blue"
          style={styles.loadingIndicator}
        />
      ) : (
        <Ionicons
          name="trash-outline"
          size={24}
          color="red"
          onPress={() => {
            setisLoading(true);
            onRemove(person.phoneNumber);
          }}
          style={styles.removeIcon}
        />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    padding: 16,
    backgroundColor: "#f8f8f8",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  avatarContainer: {
    marginRight: 16,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#ddd",
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
    alignSelf: "center",
  },
});

export default PersonItem;
