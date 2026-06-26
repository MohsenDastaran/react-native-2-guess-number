import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";

type Props = {
  userNumber: number;
};

const GameScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.gameScreen}>
        <Text>GameScreen</Text>
      </View>
      <View style={styles.gameScreen}>
        <Text>User Number: {props.userNumber}</Text>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    // height: 300,
    // // flex: 1,
    // padding: 16,
    // marginTop: 100,
    // marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: "#430624",
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { height: 2, width: 0 },
    shadowRadius: 6,
  },
  gameScreen: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
