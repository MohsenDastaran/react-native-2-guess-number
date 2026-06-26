import { StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {
  number: number;
};

const NumberContainer = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{props.number}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: "#b89b3b",
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: "#f9c416",
    fontSize: 36,
    fontWeight: "bold",
  },
});
