// src/screens/Home/HomeScreen.tsx

import { FlatList, StyleSheet } from "react-native";
import React from "react";
import { Person } from "../../state/static/sampleData";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import {
  removePersonAsync,
  selectPerson,
} from "../../state/redux/person/PersonSlice";
import PersonItem from "../../components/person-card/PersonItem";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { HomeStackParamList } from "../../types/navigation.types";
import { ThemedScreen } from "../../components/themed";

type HomeStackNavigationProp = NativeStackNavigationProp<HomeStackParamList>;

const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const { persons } = useAppSelector(selectPerson);
  const navigation = useNavigation<HomeStackNavigationProp>();

  const _removePerson = (phoneNumber: string) => {
    dispatch(removePersonAsync(phoneNumber));
  };

  // Navigating to the details
  const navigateToDetails = (person: Person) => {
    navigation.navigate("Details", { person });
  };

  const renderItem = ({ item }: { item: Person }) => {
    return (
      <PersonItem
        person={item}
        onRemove={_removePerson}
        onPress={navigateToDetails}
      />
    );
  };

  return (
    <ThemedScreen style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={persons}
        renderItem={renderItem}
        keyExtractor={(item) => item.phoneNumber}
      />
    </ThemedScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 16,
  },
});

export default HomeScreen;
