import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {
  children: React.ReactNode;
  onPress?: () => void;
};

const PrimaryButton = (props: Props) => {
  const pressHandler = () => {
    console.log("Button Pressed");
    props.onPress?.();
  };

  return (
    <View style={styles.outerContainer}>
      <Pressable
        onPress={pressHandler}
        style={({ pressed }) => [
          styles.innerContainer,
          pressed && styles.pressed,
        ]}
      >
        <Text style={styles.text}>{props.children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
    elevation: 2,
  },
  innerContainer: {
    backgroundColor: "#72063c",
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  text: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
