import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { C } from "@/constants/theme";

export default function GreetingCard() {
  return (
    <View style={styles.greetingCard}>
      <Text style={styles.greetingText}>Good Morning,</Text>
      <Text style={styles.greetingTitle}> Treasurer 👋</Text>
      <TouchableOpacity style={styles.dateChip}>
        <Ionicons name="calendar-outline" size={18} color={C.primaryDark} />
        <Text style={styles.dateText}>May 2026</Text>
        <Ionicons name="chevron-down" size={16} color={C.primaryDark} />
      </TouchableOpacity>
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
  },
  dateChip: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: C.primaryLight,
    borderRadius: 999,
    width: "auto",
    alignItems: "center",
    alignSelf: "flex-start",
    marginTop: 16,
    gap: 10,
  },
  dateText: {
    fontSize: 12,
    fontWeight: "700",
    color: C.primaryDark,
  },
});
