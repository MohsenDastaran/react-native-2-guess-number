import { useState } from "react";
import { StyleSheet, ImageBackground, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  const [userNumber, setUserNumber] = useState<number | null>(null);

  return (
    <View style={styles.container}>
      <LinearGradient colors={["#5b0b33", "#ddb52f"]} style={styles.background}>
        <ImageBackground
          source={require("./assets/ana.jpg")}
          resizeMode="cover"
          style={{ flex: 1 }}
          imageStyle={styles.backgroundImageStyle}
        />
      </LinearGradient>
      <SafeAreaProvider style={styles.container}> 

      {userNumber ? (
        <GameScreen userNumber={userNumber} />
      ) : (
        <StartGameScreen onUserNumberSet={setUserNumber} />
      )}
      </SafeAreaProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
  button: {
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
  },
  text: {
    backgroundColor: "transparent",
    fontSize: 15,
    color: "#fff",
  },
  backgroundImageStyle: { opacity: 0.4 },
});
