import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { C } from "../../constants/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import GreetingCard from "../cards/GreetingCard";
import CollectionOverviewCard from "../cards/CollectionOverviewCard";
import FlatCards from "../cards/flatStatsCard";
import RecentActivitySection from "../Dashboard/sections/recentActivitySection";
import { StatusBar } from "expo-status-bar";

export default function AdminDashboard() {
  return (
    <>
      <StatusBar style="dark" translucent={false} backgroundColor={"#FFF"} />
      <SafeAreaView style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 120 }}
        >
          <View style={styles.headerRow}>
            <TouchableOpacity>
              <Ionicons name="menu-outline" size={28} color={C.fg} />
            </TouchableOpacity>
            <Text style={styles.HeaderTitle}>Achhe Raj Enclave</Text>
            <TouchableOpacity>
              <Ionicons name="notifications-outline" size={28} color={C.fg} />
            </TouchableOpacity>
          </View>

          <GreetingCard />
          <CollectionOverviewCard />
          <FlatCards />
          <RecentActivitySection />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
    backgroundColor: C.bg,
  },
  headerRow: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    backgroundColor: C.card,
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
  HeaderTitle: {
    color: C.primaryDark,
    fontSize: 22,
    fontFamily: "monospace",
    fontWeight: "bold",
  },
});
