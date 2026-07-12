import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { C } from "@/constants/theme";
import { FlatCardPlain } from "@/components/cards/FlatCards";

export type FlatStatus = "paid" | "pending" | "overdue";

export interface Flat {
  flatNo: number;
  status: FlatStatus;
}

type FloorSectionProps = {
  floor: string;
  flats: Flat[];
};

export default function FloorSection({ floor, flats }: FloorSectionProps) {
  return (
    <View style={styles.container}>
      <View style={styles.sectionHeader}>
        <Text style={styles.title}>{floor.toUpperCase()}</Text>

        <View style={styles.line} />

        <Text style={styles.subtitle}>
          {flats.length} {flats.length === 1 ? "flat" : "flats"}
        </Text>
      </View>

      <View style={styles.flatCardContainer}>
        {flats.map((flat) => (
          <FlatCardPlain
            key={flat.flatNo}
            flatNo={flat.flatNo}
            status={flat.status}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",

    paddingHorizontal: 8,
    paddingVertical: 12,

    columnGap: 14,
  },

  title: {
    fontSize: 16,
    fontWeight: "700",
    color: C.fgLight,
    letterSpacing: 0.5,
  },

  subtitle: {
    fontSize: 13,
    fontWeight: "600",
    color: C.fgLight,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: C.lightgrey,
  },

  flatCardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",

    justifyContent: "flex-start",

    columnGap: 8,
    rowGap: 8,

    paddingHorizontal: 8,
  },
});
