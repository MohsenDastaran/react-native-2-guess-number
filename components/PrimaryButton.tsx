import { StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const PrimaryButton = (props: Props) => {
  return (
    <View style={{}}>
      <Text>{props.children}ddddd</Text>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({});
