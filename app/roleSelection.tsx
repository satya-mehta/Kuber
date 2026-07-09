import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";

import BuildingIllustration from "@/components/illustrations/buildings";
import { C } from "../constants/theme";

type LoginCardProps = {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  onPress?: () => void;
};

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Top Section */}
      <View style={styles.topContainer}>
        <BuildingIllustration size={220} />

        <Text style={styles.title}>ACHHE RAJ ENCLAVE</Text>

        <Text style={styles.subtitle}>Society Management Portal</Text>
      </View>

      {/* Bottom Section */}
      <View style={styles.cardsContainer}>
        <LoginCard
          icon={
            <Ionicons
              name="shield-checkmark-outline"
              size={26}
              color={C.primary}
            />
          }
          title="Administrator Login"
          subtitle="Treasurer • Secretary • Admin"
        />

        <LoginCard
          icon={<Ionicons name="home-outline" size={26} color={C.primary} />}
          title="Resident Login"
          subtitle="View payments • Download receipts"
        />

        <Text style={styles.footer}>v1.1.0</Text>
      </View>
    </SafeAreaView>
  );
}

function LoginCard({ icon, title, subtitle, onPress }: LoginCardProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      style={styles.card}
      onPress={onPress}
    >
      <View style={styles.iconContainer}>{icon}</View>

      <View style={styles.textContainer}>
        <Text style={styles.cardTitle}>{title}</Text>

        <Text style={styles.cardSubtitle}>{subtitle}</Text>
      </View>

      <View style={styles.arrowContainer}>
        <Ionicons name="chevron-forward" size={18} color={C.primary} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: C.bg,
    justifyContent: "space-between",
  },

  topContainer: {
    alignItems: "center",
    paddingTop: 55,
    paddingHorizontal: 25,
  },

  title: {
    marginTop: 18,
    fontSize: 32,
    fontWeight: "800",
    color: C.primary,
    textAlign: "center",
  },

  subtitle: {
    marginTop: 8,
    fontSize: 17,
    color: "#667085",
    textAlign: "center",
  },

  cardsContainer: {
    paddingHorizontal: 22,
    paddingBottom: 18,
  },

  card: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#FFFFFF",

    borderRadius: 22,

    paddingHorizontal: 18,
    paddingVertical: 18,

    marginBottom: 18,

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 4,
    },

    elevation: 5,
  },

  iconContainer: {
    width: 56,
    height: 56,

    borderRadius: 16,

    backgroundColor: "#EEF2FF",

    justifyContent: "center",
    alignItems: "center",

    marginRight: 16,
  },

  textContainer: {
    flex: 1,
  },

  cardTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111827",
  },

  cardSubtitle: {
    marginTop: 5,
    fontSize: 14,
    color: "#6B7280",
    lineHeight: 20,
  },

  arrowContainer: {
    width: 36,
    height: 36,

    borderRadius: 18,

    backgroundColor: "#F5F3FF",

    justifyContent: "center",
    alignItems: "center",
  },

  footer: {
    marginTop: 8,
    textAlign: "center",
    fontSize: 13,
    color: "#98A2B3",
  },
});
