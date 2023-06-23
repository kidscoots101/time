import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Time from "./components/Time";
import Duration from "./components/Duration";

export default function App() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 35,
          padding: 30,
          marginTop: 100,
        }}
      >
        Time
      </Text>
      <Time />
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 35,
          padding: 30,
        }}
      >
        Duration
      </Text>
      <Duration />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
