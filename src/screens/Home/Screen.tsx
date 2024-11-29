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
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ActivityIndicator } from "react-native-paper";
import { addPerson, fetchPersons, removePerson } from "../../api/person.api";
import SnackBar from "../../components/snackbar/SnackBar";

type HomeStackNavigationProp = NativeStackNavigationProp<HomeStackParamList>;

const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const { persons, loading } = useAppSelector(selectPerson);
  const navigation = useNavigation<HomeStackNavigationProp>();
  const queryClient = useQueryClient();

  // Navigating to the details
  const navigateToDetails = (person: Person) => {
    navigation.navigate("Details", { person });
  };

  const { data, error, isLoading } = useQuery<Person[], Error>({
    queryFn: () => fetchPersons(),
    queryKey: ["persons"],
  });

  const { mutateAsync: removePersonAsync } = useMutation({
    mutationFn: removePerson,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["persons"],
      });
    },
  });

  const { mutateAsync: addPersonAsync } = useMutation({
    mutationFn: addPerson,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["persons"],
      });
    },
  });

  const _removePerson = async (phoneNumber: string) => {
    //dispatch(removePersonAsync(phoneNumber));
    try {
      const res = await removePersonAsync(phoneNumber);
      console.log("response :: ", res);
    } catch (error) {
      console.log("Cannot do this operation");
      console.error(error);
    }
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
      {!loading || isLoading ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.phoneNumber}
        />
      ) : (
        <ActivityIndicator
          size="small"
          color="blue"
          style={{ alignSelf: "center" }}
        />
      )}
      {/* <SnackBar isVisible={true} Hide={() => {}} /> */}
    </ThemedScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 16,
    justifyContent: "center",
  },
});

export default HomeScreen;
