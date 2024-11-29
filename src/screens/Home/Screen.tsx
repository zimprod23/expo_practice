// src/screens/Home/HomeScreen.tsx

import { FlatList, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Person } from "../../state/static/sampleData";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import {
  // removePersonAsync,
  selectPerson,
} from "../../state/redux/person/PersonSlice";
import PersonItem from "../../components/person-card/PersonItem";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { HomeStackParamList } from "../../types/navigation.types";
import { ThemedScreen } from "../../components/themed";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ActivityIndicator, FAB } from "react-native-paper";
import { addPerson, fetchPersons, removePerson } from "../../api/person.api";
import SnackBar from "../../components/snackbar/SnackBar";
import { ContainerStyles } from "../../styles/GlobalStyles";
import withDraggable from "../../hoc/withDraggable";
import Draggable from "../../hoc/withDraggable";

type HomeStackNavigationProp = NativeStackNavigationProp<HomeStackParamList>;
// const DraggableFAB = withDraggable(FAB);

const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const { persons, loading } = useAppSelector(selectPerson);
  const navigation = useNavigation<HomeStackNavigationProp>();
  const [isVisible, setIsVisible] = useState(false);
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
      setIsVisible(true);
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
      {!isLoading ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.phoneNumber}
          contentContainerStyle={{ paddingBottom: 65 }}
        />
      ) : (
        <View style={ContainerStyles.centerizedContainer}>
          <ActivityIndicator
            size="small"
            color="blue"
            style={{ alignSelf: "center" }}
          />
        </View>
      )}
      <SnackBar isVisible={isVisible} Hide={() => setIsVisible(false)} />
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={async () => {
          try {
            await addPersonAsync(Math.random() * Math.pow(5, 5) + "");
          } catch (error) {
            console.error(error);
          }
        }}
      />
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
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default HomeScreen;
