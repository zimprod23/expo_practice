import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Snackbar } from "react-native-paper";

type SnackBarProps = {
  //   Show: () => void;
  Hide: () => void;
  isVisible: boolean;
};

const SnackBar: React.FC<SnackBarProps> = ({ Hide, isVisible }) => {
  const [visible, setVisible] = React.useState(isVisible);

  //   const onToggleSnackBar = () => setVisible(!visible);

  //   const onDismissSnackBar = () => setVisible(false);

  return (
    <View style={styles.container}>
      <Snackbar
        visible={visible}
        onDismiss={Hide}
        action={{
          label: "Undo",
          onPress: () => {
            // Do something
          },
        }}
      >
        Hey there! I'm a Snackbar.
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
});

export default SnackBar;
