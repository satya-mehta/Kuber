import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { C, Colors } from "@/constants/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import * as data from "@/constants/flats";
import FloorSection from "../flats/FloorSection";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";

type FilterChipsProps = {
  title: string;
  total: number;
  isActive: boolean;
  onPress?: () => void;
};

type FlatFilter = "all" | "paid" | "pending" | "overdue";

export default function AdminFlats() {
  const { filter } = useLocalSearchParams();
  const [selectedFilter, setSelectedFilter] = useState(filter ?? "all");

  const filteredFloors = data.floors.map((floor) => ({
    ...floor,

    flats: floor.flats.filter((flat) => {
      if (selectedFilter === "all") return true;

      return flat.status === selectedFilter;
    }),
  }));

  useEffect(() => {
    if (filter) {
      setSelectedFilter(filter);
    }
  }, [filter]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        <View style={styles.headerRow}>
          <View style={styles.titleContainer}>
            <TouchableOpacity onPress={() => router.push("/(tabs)/dashboard")}>
              <View style={styles.iconContainer}>
                <Ionicons name="chevron-back" size={24} color={"#333"} />
              </View>
            </TouchableOpacity>
            <Text style={styles.title}>All Flats</Text>
          </View>
          <TouchableOpacity>
            <View style={styles.iconContainer}>
              <Ionicons
                name="funnel-outline"
                size={24}
                color={Colors.light.icon}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.searchBar}>
          <Ionicons name="search-outline" size={18} color={Colors.light.icon} />
          <TextInput
            style={styles.textInput}
            placeholder="Search flat or owner..."
          />
        </View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.filterChipsContainer}>
            <FilterChips
              title="All"
              total={data.total_flats}
              isActive={selectedFilter === "all"}
              onPress={() => setSelectedFilter("all")}
            />

            <FilterChips
              title="Paid"
              total={data.paid_flats}
              isActive={selectedFilter === "paid"}
              onPress={() => setSelectedFilter("paid")}
            />

            <FilterChips
              title="Pending"
              total={data.total_flats - data.paid_flats}
              isActive={selectedFilter === "pending"}
              onPress={() => setSelectedFilter("pending")}
            />

            <FilterChips
              title="Overdue"
              total={data.flats_overdue}
              isActive={selectedFilter === "overdue"}
              onPress={() => setSelectedFilter("overdue")}
            />
          </View>
        </ScrollView>

        {filteredFloors
          .filter((floor) => floor.flats.length > 0)
          .map((floor) => (
            <FloorSection
              key={floor.floor}
              floor={floor.floor}
              flats={floor.flats}
            />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
    backgroundColor: C.bg,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
  },
  headerRow: {
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  iconContainer: {
    backgroundColor: C.primaryLight,
    borderRadius: 12,
    padding: 8,
  },
  searchBar: {
    marginTop: 10,
    paddingHorizontal: 16,
    paddingVertical: 6,
    backgroundColor: "#3333330a",
    marginHorizontal: 8,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    gap: 10,
    justifyContent: "flex-start",
  },
  textInput: {},

  filterChipsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 8,
    gap: 10,
  },
  chips: {
    backgroundColor: C.primaryLight,
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 22,
    // borderCurve: "continuous",
    // borderWidth: 1,
    // borderColor: C.lightgrey,
  },
  chipsActive: {
    backgroundColor: C.primary,
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 22,
  },
  chipsTitle: {
    color: "#4440406c",
    fontWeight: "800",
  },
  chipsTitleActive: {
    color: "#FFF",
    fontWeight: "800",
  },
});

function FilterChips({ title, total, isActive, onPress }: FilterChipsProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={isActive ? styles.chipsActive : styles.chips}>
        <Text style={isActive ? styles.chipsTitleActive : styles.chipsTitle}>
          {title} ({total})
        </Text>
      </View>
    </TouchableOpacity>
  );
}
