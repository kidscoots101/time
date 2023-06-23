import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect } from "react";

const Duration = () => {
  const [value, onChangeText] = React.useState(0);

  function Calculate() {
    const parsedvalue = parseInt(value);

    if (parsedvalue >= 60) {
      const hours = Math.floor(parsedvalue / 60);
      return `${hours} ${hours === 1 ? "hour" : "hours"} `;
    } else if (parsedvalue < 60) {
      return `${parsedvalue} ${parsedvalue === 1 ? "minute" : "minutes"}`;
    }
  }
  useEffect(() => {
    onChangeText(Calculate());
  }, []);
  const parsedValueDividedBy60 = Calculate();
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 }}>Enter no. of minutes: </Text>
      <View style={{ flexDirection: "row" }}>
        <TextInput
          onChangeText={(text) => onChangeText(text)}
          value={value}
          style={{
            paddingHorizontal: 20,
            backgroundColor: "white",
            fontSize: 20,
          }}
        />
        <Text style={{ fontSize: 20 }}>Minutes</Text>
      </View>
      <Text style={{ fontSize: 20 }}>{parsedValueDividedBy60}</Text>
    </View>
  );
};

export default Duration;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eee",
    marginHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 15,
  },
});
