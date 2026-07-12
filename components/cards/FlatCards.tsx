import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { C } from "@/constants/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as data from "@/constants/flats";

type PlainCardProps = {
  flatNo: number;
  onPress?: () => void;
  status: "paid" | "pending" | "overdue";
};

export function FlatCardPlain({ flatNo, status, onPress }: PlainCardProps) {
  const config = data.statusConfig[status];
  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: config.background }]}
      onPress={onPress}
    >
      <View style={[styles.iconContainer]}>
        <Ionicons name={config.icon} size={24} color={config.color} />
      </View>
      <Text style={styles.cardTitle}>{flatNo}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "23%",
    alignItems: "center",

    backgroundColor: "#FFFFFF",

    borderRadius: 18,

    paddingHorizontal: 6,
    paddingVertical: 12,

    elevation: 1,

    gap : 8,
  },
  iconContainer: {
    padding: 13,
    borderRadius: 12,
  },
  cardTitle: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "900",
  },
});
