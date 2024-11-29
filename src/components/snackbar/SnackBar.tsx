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
  React.useEffect(() => {
    setVisible(isVisible);
  }, [isVisible]);

  return (
    <View style={styles.container}>
      <Snackbar
        visible={visible}
        onDismiss={Hide}
        action={{
          label: "Remove",
          onPress: () => {
            // Do something
          },
        }}
      >
        Item Deleted
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
