import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { C } from "@/constants/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as data from "@/constants/flats";
import { router } from "expo-router";

type FlatCardProps = {
  icon: React.ReactNode;
  title: number;
  subtitle: String;
  filter: "all" | "paid" | "pending" | "overdue";
  onPress?: () => void;
  iconbg: string;
};

function routeToFlats(filter: "all" | "paid" | "pending" | "overdue") {
  router.push({
    pathname: "/flats",

    params: { filter },
  });
}

export default function FlatCards() {
  return (
    <View style={styles.flatCardContainer}>
      <FlatCard
        icon={<Ionicons name="people-outline" size={30} color={C.primary} />}
        title={data.total_flats}
        filter="all"
        subtitle="Total Flats"
        iconbg={C.primaryLight}
      />
      <FlatCard
        icon={
          <Ionicons
            name="checkmark-circle-outline"
            size={30}
            color={C.paidText}
          />
        }
        title={data.paid_flats}
        subtitle="Paid"
        filter="paid"
        iconbg={C.paidBg}
      />
      <FlatCard
        icon={<Ionicons name="time-outline" size={30} color={C.pendingText} />}
        title={data.total_flats - data.paid_flats}
        subtitle="Pending"
        filter="pending"
        iconbg={C.pendingBg}
      />
      <FlatCard
        icon={
          <Ionicons name="warning-outline" size={30} color={C.overdueText} />
        }
        title={data.flats_overdue}
        subtitle="Overdue"
        filter="overdue"
        iconbg={C.overdueBg}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  flatCardContainer: {
    marginVertical: 20,
    paddingHorizontal: 12,
    paddingBottom: 18,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  card: {
    width: "23%",
    alignItems: "center",

    backgroundColor: "#FFFFFF",

    borderRadius: 18,

    paddingHorizontal: 6,
    paddingVertical: 18,

    elevation: 1,
  },
  iconContainer: {
    backgroundColor: C.paidBg,
    padding: 13,
    borderRadius: 18,
  },
  textContainer: {},
  cardTitle: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "900",
  },
  cardSubtitle: {
    textAlign: "center",
    fontSize: 10,
    color: C.fgLight,
  },
});

function FlatCard({ icon, title, subtitle, filter, iconbg, onPress }: FlatCardProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.card}
      onPress={ () => routeToFlats(filter)}
    >
      <View style={[styles.iconContainer, { backgroundColor: iconbg }]}>
        {icon}
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.cardTitle}>{title}</Text>

        <Text style={styles.cardSubtitle}>{subtitle}</Text>
      </View>
    </TouchableOpacity>
  );
}
