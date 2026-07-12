import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { C, Colors } from "@/constants/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as data from "@/constants/flats";
import { Background } from "@react-navigation/elements";

type reportCardProps = {
  amount: number;
  onPress?: () => void;
  status: "paid" | "pending" | "overdue";
};

export function ReportCollectionCard({
  amount,
  status,
  onPress,
}: reportCardProps) {
  const config = data.statusConfig[status];
  return (
    <TouchableOpacity style={[styles.card]} onPress={onPress}>
      <View style={[styles.iconContainer, {backgroundColor: config.background}]}>
        <Ionicons name={config.icon} size={24} color={config.color} />
      </View>
      <FormattedAmount amount={amount} status={status} />
      <Text style={[styles.statusText]}>
        {status === "paid" ? "Collected" : status.charAt(0).toUpperCase() + status.slice(1)}
      </Text>
    </TouchableOpacity>
  );
}

function FormattedAmount({
  amount,
  status,
}: {
  amount: number;
  status: "paid" | "pending" | "overdue";
}) {
  const color = data.statusConfig[status].color;
  if (amount >= 10000000) {
    return (
      <Text style={[styles.cardTitle, { color }]}>
        ₹ {(amount / 10000000).toFixed(2)} Cr
      </Text>
    );
  }

  if (amount >= 100000) {
    return (
      <Text style={[styles.cardTitle, { color }]}>
        ₹ {(amount / 100000).toFixed(2)} L
      </Text>
    );
  }

  if (amount >= 1000) {
    return (
      <Text style={[styles.cardTitle, { color }]}>
        ₹ {amount%1000 === 0 ? amount/1000 : (amount / 1000).toFixed(2)} K
      </Text>
    );
  }

  return <Text style={[styles.cardTitle, { color }]}>₹ {amount}</Text>;
}

const styles = StyleSheet.create({
  card: {
    width: "32%",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 14,
    elevation: 1,
    gap: 10,
  },
  iconContainer: {
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 12,
  },
  cardTitle: {
    textAlign: "left",
    fontSize: 18,
    fontWeight: "900",
  },
  statusText: {
    fontWeight: "900",
    fontSize: 15,
    color: "grey",
  },
});
