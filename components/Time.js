import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.timeText}>{time.toLocaleTimeString()}</Text>
      <Text style={styles.dateText}>{time.toDateString()}</Text>
    </View>
  );
};

const Time = () => {
  return (
    <View style={styles.container}>
      <Clock />
    </View>
  );
};

export default Time;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#eee",
    marginHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 30,
  },
  timeText: {
    fontSize: 40,
    fontWeight: "bold",
  },
  dateText: {
    fontSize: 20,
  },
});
