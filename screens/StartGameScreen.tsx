import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import PrimaryButton from "../components/PrimaryButton";

interface StartGameScreenProps {
  onUserNumberSet: (number: number) => void;
}
const StartGameScreen = (props: StartGameScreenProps) => {
  const [enteredNumber, setEnteredNumber] = React.useState("");
  const confirmInputHandler = (text: string) => {
    if (text.trim().length === 0) {
      Alert.alert("Invalid Input", "Please enter a valid number.", [
        {
          text: "OK",
          onPress: () => setEnteredNumber(""),
        },
      ]);
      return;
    }
    if (isNaN(Number(text)) || Number(text) < 1 || Number(text) > 99) {
      Alert.alert("Invalid Number", "Please enter a number between 1 and 99.", [
        {
          text: "OK",
          onPress: () => setEnteredNumber(""),
        },
      ]);
      return;
    }
    props.onUserNumberSet?.(Number(text)); // Call the callback function with the valid number
  };

  return (
    <View style={styles.container}>
      <Text style={{ color: "#ddb52f", fontSize: 18, fontWeight: "bold" }}>
        Guess Ana's Number
      </Text>
      <TextInput
        style={styles.textInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={(text) => setEnteredNumber(text)}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.button}>
          <PrimaryButton onPress={() => setEnteredNumber("")}>
            Reset
          </PrimaryButton>
        </View>
        <View style={styles.button}>
          <PrimaryButton onPress={() => confirmInputHandler(enteredNumber)}>
            Confirm
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: "#430624",
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { height: 2, width: 0 },
    shadowRadius: 6,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    height: 50,
    width: 50,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    width: "100%",
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    flex: 1,
  },
});
