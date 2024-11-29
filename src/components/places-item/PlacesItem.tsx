import * as React from "react";
import { Avatar, Button, Card, Text } from "react-native-paper";
import { StyleSheet } from "react-native";
import { Place } from "../../api/places.api";

type LeftContentProps = {
  size: number;
};

const LeftContent: React.FC<LeftContentProps> = (props) => (
  <Avatar.Icon {...props} icon="folder" />
);

type PlaceItemProps = {
  onCancel: (title: string) => void;
  place: Place;
};

const PlacesItem: React.FC<PlaceItemProps> = ({ onCancel, place }) => (
  <Card style={styles.card}>
    <Card.Title
      title="Card Title"
      subtitle="Card Subtitle"
      left={(props) => <LeftContent {...props} />} // Ensure correct props for the LeftContent
    />
    <Card.Content>
      <Text variant="titleLarge">{place?.title}</Text>
      <Text variant="bodyMedium">{place?.subtitle}</Text>
    </Card.Content>
    <Card.Cover source={{ uri: place?.imageUri }} />
    <Card.Actions>
      <Button onPress={() => onCancel(place.title)}>Cancel</Button>
    </Card.Actions>
  </Card>
);

const styles = StyleSheet.create({
  card: {
    margin: 10,
    borderRadius: 8,
  },
});

export default PlacesItem;
