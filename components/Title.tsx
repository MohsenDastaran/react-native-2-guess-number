import { StyleSheet, Text, View } from "react-native";
import {ReactNode} from "react";

type Props = {
  children: ReactNode;
};

const Title = (props: Props) => {
  return <Text style={styles.title}>{props.children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#ddb52f",
        textAlign: "center",
        borderWidth: 2,
        borderColor: "#ddb52f",
        padding: 12,
    },
});
