import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {C} from "@/constants/theme"
import * as Progress from "react-native-progress"
import { useEffect,useState } from 'react'


export default function CollectionOverviewCard() {
    const [progress, setProgress] = useState(0);
      useEffect(() => {
        const timer = setTimeout(() => {
          setProgress(0.75);
        }, 300);

        return () => clearTimeout(timer);
      }, []);
  return (
    <View style={styles.collectionOverviewCard}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontWeight: "600" }}>Collection Overview</Text>
        <View style={[styles.dateChipSmall, { paddingVertical: 10 }]}>
          <Text style={[styles.dateText, { fontSize: 10 }]}>May 2026</Text>
        </View>
      </View>

      <View style={styles.collectionMainRow}>
        <View style={styles.progressCircleContainer}>
          <Progress.Circle
            progress={progress}
            color={C.primary}
            unfilledColor={C.primaryLight}
            size={110}
            thickness={10}
            borderWidth={0}
            showsText={false}
            animated={true}
            strokeCap="round"
          />
          <View style={styles.progressCircleContent}>
            <Text style={styles.progressPercent}>
              {Math.round(progress * 100)}%
            </Text>
            <Text style={styles.progressLabel}>Collected</Text>
          </View>
        </View>
        <View style={styles.collectionStats}>
          <Text style={styles.collectionLabel}>Collected</Text>
          <Text style={styles.paidText}>₹ 1,32,000</Text>

          <View
            style={{
              height: 1,
              backgroundColor: "#3333332d",
              width: "100%",
              marginVertical: 10,
            }}
          ></View>

          <Text style={styles.collectionLabel}>Expected</Text>
          <Text style={styles.expectedText}>₹ 1,82,000</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  collectionOverviewCard: {
    backgroundColor: C.card,
    padding: 18,
    borderRadius: 22,
    marginHorizontal: 10,
    marginTop: 20,
  },
  collectionMainRow: {
    flexDirection: "row",
    gap: 10,
  },
  progressCircleContainer: {
    height: 110,
    width: 110,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-start",
  },
  progressCircleContent: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  progressPercent: {
    fontSize: 20,
    color: C.fg,
    fontWeight: "900",
  },
  progressLabel: {
    fontSize: 11,
    color: "grey",
  },
  collectionStats: {
    paddingHorizontal: 20,
  },
  collectionLabel: {
    color: "grey",
  },
  paidText: {
    color: C.paidText,
    fontSize: 34,
    fontWeight: "900",
  },
  expectedText: {
    color: "#333",
    fontSize: 30,
    fontWeight: "900",
  },
  dateChipSmall: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: C.primaryLight,
    borderRadius: 999,
  },
  dateText: {
    fontSize: 12,
    fontWeight: "700",
    color: C.primaryDark,
  },
});