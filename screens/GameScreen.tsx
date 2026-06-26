import { Alert, StyleSheet, Text, View } from "react-native";
import React from "react";
import Title from "../components/Title";
import NumberContainer from "../components/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";

type Props = {
  userNumber: number;
};

const generateRandomNumber = (
  min: number,
  max: number,
  exclude: number,
): number => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return rndNum;
  }
};
let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = (props: Props) => {
  const initialGuess = generateRandomNumber(
    minBoundary,
    maxBoundary,
    props.userNumber,
  );
  const [currentGuess, setCurrentGuess] = React.useState(initialGuess);

  const nextGuessHandler = (direction: "lower" | "higher") => {
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newGuess = generateRandomNumber(
      minBoundary,
      maxBoundary,
      currentGuess,
    );
    setCurrentGuess(newGuess);

    if (currentGuess === props.userNumber) {
      Alert.alert("Game Over", "Ana guessed your number!", [
        { text: "OK", style: "default" },
      ]);
      return;
    }

    if (
      (direction === "lower" && currentGuess < props.userNumber) ||
      (direction === "higher" && currentGuess > props.userNumber)
    ) {
      Alert.alert("Don't lie!", "Pleaseeeeee...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
  };

  return (
    <View style={styles.container}>
      <Title> YOUR GUESS</Title>
      <View style={styles.gameScreen}>
        <NumberContainer number={currentGuess} />
      </View>
      <View style={styles.gameScreen}>
        <Text>Higher or Lower?</Text>
        <View>
          <PrimaryButton onPress={() => nextGuessHandler("lower")}>
            -
          </PrimaryButton>
          <PrimaryButton onPress={() => nextGuessHandler("higher")}>
            +
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: 300,
    // flex: 1,
    padding: 16,
    marginTop: 100,
  },
  gameScreen: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
