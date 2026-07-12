import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { C } from "@/constants/theme";

type RecentActivityCardProps = {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  amount: string;
  time: string;
  iconbg: string;
  amountColor?: string;
  onPress?: () => void;
};

export default function RecentActivityCard({
  icon,
  title,
  subtitle,
  amount,
  time,
  iconbg,
  amountColor = C.primary,
  onPress,
}: RecentActivityCardProps) {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.card} onPress={onPress}>
      <View style={[styles.iconContainer, { backgroundColor: iconbg }]}>
        {icon}
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.cardTitle}>{title}</Text>

        <Text style={styles.cardSubtitle}>{subtitle}</Text>

        <Text style={styles.timeText}>{time}</Text>
      </View>

      <Text style={[styles.amountText, { color: amountColor }]}>{amount}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#FFF",

    paddingHorizontal: 18,
    paddingVertical: 16,

    borderRadius: 20,

    marginBottom: 12,
  },

  iconContainer: {
    width: 52,
    height: 52,

    borderRadius: 16,

    justifyContent: "center",
    alignItems: "center",
  },

  textContainer: {
    flex: 1,
    marginLeft: 14,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: C.fg,
  },

  cardSubtitle: {
    fontSize: 13,
    color: C.fgLight,
    marginTop: 2,
  },

  timeText: {
    fontSize: 12,
    color: "#9CA3AF",
    marginTop: 4,
  },

  amountText: {
    fontSize: 16,
    fontWeight: "800",
  },
});
