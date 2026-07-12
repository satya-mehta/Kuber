import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { C } from "@/constants/theme";
import RecentActivityCard from "../../cards/recentActivityCard";
import { activityConfig, activities } from "@/constants/activities";

export default function recentActivitySection() {
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.sectionTitle}>Recent Activity</Text>
        <TouchableOpacity>
          <View style={styles.viewAll}>
            <Text style={styles.viewAllText}>View All</Text>
            <Ionicons name="chevron-forward" size={18} color={C.primary} />
          </View>
        </TouchableOpacity>
      </View>

      {activities.map((activity) => {
        const config = activityConfig[activity.type];

        return (
          <RecentActivityCard
            key={activity.id}
            title={activity.title}
            subtitle={activity.subtitle}
            amount={activity.amount}
            time={activity.time}
            iconbg={config.background}
            amountColor={config.amountColor}
            icon={
              <Ionicons name={config.icon} size={22} color={config.iconColor} />
            }
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    padding: 18,
    backgroundColor: C.card,
    borderRadius: 22,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sectionTitle: {
    fontWeight: "600",
  },
  viewAll: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  viewAllText: {
    color: C.primary,
  },
});
