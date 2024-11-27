import React from "react";
import { ContainerStyles } from "../../styles/GlobalStyles";
import { HomeStackParamList } from "../../types/navigation.types";
import { RouteProp, useRoute } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { ThemedScreen, ThemedText, ThemedView } from "../../components/themed";

type DetailsScreenRouteProp = RouteProp<HomeStackParamList, "Details">;

const DetailsScreen = () => {
  const route = useRoute<DetailsScreenRouteProp>();
  const { person } = route.params;

  return (
    <ThemedScreen style={ContainerStyles.centerizedContainer}>
      <ThemedText style={styles.header}>Person Details</ThemedText>
      <ThemedView colorName="background2" style={[styles.card]}>
        <ThemedText style={styles.label}>Name:</ThemedText>
        <ThemedText style={styles.value}>{person.name || "N/A"}</ThemedText>

        <ThemedText style={styles.label}>Phone:</ThemedText>
        <ThemedText style={styles.value}>
          {person.phoneNumber || "N/A"}
        </ThemedText>

        <ThemedText style={styles.label}>Age:</ThemedText>
        <ThemedText style={styles.value}>{person.age || "N/A"}</ThemedText>

        {person.address && (
          <>
            <ThemedText style={styles.label}>Address:</ThemedText>
            <ThemedText style={styles.value}>{person.address}</ThemedText>
          </>
        )}
      </ThemedView>
    </ThemedScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    ...ContainerStyles.centerizedContainer,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  card: {
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    width: "100%",
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 8,
  },
  value: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default DetailsScreen;
