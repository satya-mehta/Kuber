import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { C } from "@/constants/theme";
import { topDefaulters } from "@/constants/reports";
import TopDefaulterRow from "@/components/cards/TopDefaultersRow";

export default function TopDefaultersCard() {
  return (
    <View style={styles.card}>
      <View style={styles.headingRow}>
        <Text style={styles.heading}>Top Defaulters</Text>

        <Text style={styles.subtitle}>{topDefaulters.length} Flats</Text>
      </View>

      {topDefaulters.map((item) => (
        <TopDefaulterRow
          key={item.id}
          rank={item.rank}
          flatNo={item.flatNo}
          owner={item.owner}
          overdueDays={item.overdueDays}
          amount={item.amount}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    margin: 8,
    borderRadius: 22,
    paddingBottom: 30,
  },
  headingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
  },
  heading: {
    fontSize: 20,
    fontWeight: "800",
  },
  subtitle: {
    color: C.greyIcon,
    fontWeight: "700",
  },
});
