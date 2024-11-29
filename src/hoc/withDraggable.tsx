import React, { useState } from "react";
import { StyleSheet, Animated, ViewStyle } from "react-native";
import {
  PanGestureHandler,
  GestureHandlerStateChangeEvent,
  PanGestureHandlerEventPayload,
  State,
} from "react-native-gesture-handler";

interface DraggableProps {
  style?: ViewStyle;
  children?: React.ReactNode;
}

const withDraggable = <P extends object>(
  WrappedComponent: React.ComponentType<P>
): React.FC<P & DraggableProps> => {
  return ({ style, ...props }: P & DraggableProps) => {
    const [translateX] = useState(new Animated.Value(0));
    const [translateY] = useState(new Animated.Value(0));

    const onGestureEvent = Animated.event<PanGestureHandlerEventPayload>(
      [
        {
          nativeEvent: {
            translationX: translateX,
            translationY: translateY,
          },
        },
      ],
      { useNativeDriver: true }
    );

    const onHandlerStateChange = (event: GestureHandlerStateChangeEvent) => {
      const nativeEvent = event.nativeEvent;

      if ("state" in nativeEvent && nativeEvent.state === State.END) {
        const tx =
          typeof nativeEvent.translationX === "number"
            ? nativeEvent.translationX
            : 0;
        const ty =
          typeof nativeEvent.translationY === "number"
            ? nativeEvent.translationY
            : 0;
        translateX.setValue(tx);
        translateY.setValue(ty);
      }
    };

    return (
      <PanGestureHandler
        onGestureEvent={onGestureEvent}
        onHandlerStateChange={onHandlerStateChange}
      >
        <Animated.View
          style={[
            style,
            {
              transform: [{ translateX }, { translateY }],
            },
          ]}
        >
          <WrappedComponent {...(props as P)} />
        </Animated.View>
      </PanGestureHandler>
    );
  };
};

export default withDraggable;
