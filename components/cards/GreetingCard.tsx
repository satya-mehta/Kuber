import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { C } from "@/constants/theme";
import {Datechips} from "../commons/datechips"

export default function GreetingCard() {
  return (
    <View style={styles.greetingCard}>
      <Text style={styles.greetingText}>Good Morning,</Text>
      <Text style={styles.greetingTitle}> Treasurer 👋</Text>
      <Datechips />
    </View>
  );
}

const styles = StyleSheet.create({
  greetingCard: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: C.card,
    borderBottomRightRadius: 22,
    borderBottomLeftRadius: 22,
  },
  greetingText: {
    color: "grey",
    fontSize: 18,
    fontFamily: "inherit",
  },
  greetingTitle: {
    color: "#000",
    fontSize: 34,
    fontWeight: "900",
    fontFamily: "inherit",
    paddingBottom: 12,
  }
});
