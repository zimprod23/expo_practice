import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ThemedScreen } from "../../components/themed";
import { ContainerStyles } from "../../styles/GlobalStyles";
import PlacesItem from "../../components/places-item/PlacesItem";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchPlaces, Place, removePlace } from "../../api/places.api";

const PlacesScreen = () => {
  const queryClient = useQueryClient();

  const { data, error, isLoading } = useQuery<Place[], Error>({
    queryFn: () => fetchPlaces(),
    queryKey: ["places"],
  });

  const { mutateAsync: removePlaceAsync } = useMutation({
    mutationFn: removePlace,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["places"],
      });
    },
  });

  const _removePlace = async (title: string) => {
    try {
      console.log("ttile", title);
      const res = await removePlaceAsync(title);

      console.log("response :: ", res);
    } catch (error) {
      console.log("Cannot do this operation");
      console.error(error);
    }
  };
  return (
    <ThemedScreen style={[{ flex: 1 }]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 5 }}
      >
        {data?.map((e, i) => {
          return <PlacesItem key={i} onCancel={_removePlace} place={e} />;
        })}
      </ScrollView>
    </ThemedScreen>
  );
};

export default PlacesScreen;
