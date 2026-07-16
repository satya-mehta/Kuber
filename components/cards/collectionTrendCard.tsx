import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { C, Colors } from "../../constants/theme";
import { LineChart } from "react-native-gifted-charts";
import { collectionTrend } from "@/constants/reports";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

export default function CollectionTrendCard() {
  const chartWidth = screenWidth - 70;

  const processedData = collectionTrend.map((item) => ({
    value: item.value,
    focusedDataPointLabelComponent: () => (
      <View style={styles.tooltipContainer}>
        <Text style={styles.tooltipText}>
          ₹{Math.round(item.value / 1000)}k
        </Text>
      </View>
    ),
  }));

  return (
    <View style={styles.card}>
      <View style={styles.headingRow}>
        <Text style={styles.heading}>Collection Trend</Text>
        <Text style={styles.periodText}>Jan - Jun 2026</Text>
      </View>

      <LineChart
        data={processedData}
        xAxisLabelTexts={collectionTrend.map((item) => item.month)}
        areaChart
        curved
        hideDataPoints={false}
        color={C.primary}
        startFillColor1={C.primaryLight}
        endFillColor1={C.primaryLight}
        endOpacity={0.2}
        thickness={3}
        animationDuration={1500}
        isAnimated={true}
        yAxisThickness={0}
        xAxisThickness={0}
        hideRules={true}
        dataPointsColor={C.primary}
        dataPointsRadius={4}
        dataPointsWidth={3}
        animateOnDataChange={true}
        bounces={true}
        formatYLabel={(value) => {
          const num = Number(value);
          if (num === 0) return "0";
          return `₹${Math.round(num / 1000)}k`;
        }}
        yAxisLabelWidth={40}
        yAxisTextStyle={{
          fontSize: 13,
          color: "#8B8FA3",
          fontWeight: "600",
        }}
        xAxisLabelTextStyle={{
          fontSize: 15,
          color: "#6B7280",
          fontWeight: "600",
        }}
        noOfSections={5}
        width={chartWidth}
        spacing={60}
        initialSpacing={20}
        adjustToWidth={true}
        endSpacing={20}
        focusEnabled={true}
        showDataPointOnFocus={!true}
        showScrollIndicator={false}
        focusedDataPointRadius={5}
        focusedDataPointColor={C.primaryDark}
      />
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
  periodText: {
    color: C.greyIcon,
    fontWeight: "700",
  },
  tooltipContainer: {
    backgroundColor: "#1E293B",
    paddingHorizontal: 0,
    paddingVertical: 6,
    borderRadius: 6,
    width: 60,
    //bottom: 28,
    alignSelf: "center",
  },
  tooltipText: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "700",
    textAlign: 'center'
  },
});
