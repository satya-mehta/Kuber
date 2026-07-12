
// Not in Use anymore, been replaced by FloorSection.tsx, the responsibility hass been distributed to FloorSection and data/flats.ts


import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { C } from "@/constants/theme";
import { FlatCardPlain } from "@/components/cards/FlatCards";

export default function FlatViewSection() {
  return (
    <View style={styles.container}>
      <View style={styles.sectionHeader}>
        <Text style={styles.title}>FLOOR 1</Text>
        <View style={styles.line}></View>
        <Text style={styles.subtitle}>8 flats</Text>
      </View>

      <View style={styles.flatCardContainer}>
        <FlatCardPlain flatNo={101} status="paid" />
        <FlatCardPlain flatNo={102} status="pending" />
        <FlatCardPlain flatNo={103} status="paid" />
        <FlatCardPlain flatNo={104} status="paid" />
        <FlatCardPlain flatNo={105} status="pending" />
        <FlatCardPlain flatNo={106} status="paid" />
        <FlatCardPlain flatNo={107} status="overdue" />
        <FlatCardPlain flatNo={108} status="paid" />
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.title}>FLOOR 2</Text>
        <View style={styles.line}></View>
        <Text style={styles.subtitle}>8 flats</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  sectionHeader: {
    paddingVertical: 10,
    paddingHorizontal: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
  },
  line: {
    flex: 1,
    height: 1.5,
    backgroundColor: C.lightgrey,
  },
  title: {
    fontSize: 16,
    fontWeight: "800",
    color: "grey",
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "800",
    color: "grey",
  },
  flatCardContainer : {
    paddingHorizontal: 8,
    flexDirection : 'row',
    justifyContent : 'space-between',
    flexWrap: 'wrap',
    rowGap: 8,
  }
});
