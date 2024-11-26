// src/screens/Home/HomeScreen.tsx

import { View, FlatList, StyleSheet } from "react-native";
import React from "react";
import { Person } from "../../state/static/sampleData";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import {
  removePersonAsync,
  selectPerson,
} from "../../state/redux/person/PersonSlice";
import PersonItem from "../../components/person-card/PersonItem";
import { Screen } from "../../components/themed/ThemedScreen";

const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const { persons } = useAppSelector(selectPerson);

  // Function to trigger person removal
  const _removePerson = (phoneNumber: string) => {
    dispatch(removePersonAsync(phoneNumber));
  };

  // Function to render each person item
  const renderItem = ({ item }: { item: Person }) => {
    return <PersonItem person={item} onRemove={_removePerson} />;
  };

  return (
    <Screen style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={persons}
        renderItem={renderItem}
        keyExtractor={(item) => item.phoneNumber}
      />
    </Screen>
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
