import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { C } from "@/constants/theme";

type Props = {
  rank: number;
  flatNo: number;
  owner: string;
  overdueDays: number;
  amount: number;
  onPress?: () => void;
};

export default function TopDefaulterRow({
  rank,
  flatNo,
  owner,
  overdueDays,
  amount,
  onPress,
}: Props) {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.row} onPress={onPress}>
      <Text style={styles.rank}>#{rank}</Text>

      <View style={styles.flatBadge}>
        <Text style={styles.flatNo}>{flatNo}</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.owner}>{owner}</Text>

        <View style={styles.overdueRow}>
          <Ionicons name="time-outline" size={13} color={C.overdueText} />

          <Text style={styles.overdueText}>{overdueDays} days overdue</Text>
        </View>
      </View>

      <Text style={styles.amount}>₹{amount.toLocaleString("en-IN")}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 14,
  },

  rank: {
    width: 32,
    fontWeight: "700",
    color: C.greyIcon,
    fontSize: 16,
  },

  flatBadge: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: C.overdueBg,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },

  flatNo: {
    color: C.overdueText,
    fontWeight: "800",
    fontSize: 18,
  },

  info: {
    flex: 1,
  },

  owner: {
    fontSize: 18,
    fontWeight: "700",
    color: C.fg,
  },

  overdueRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
    gap: 4,
  },

  overdueText: {
    color: C.overdueText,
    fontSize: 11,
  },

  amount: {
    color: C.overdueText,
    fontSize: 20,
    fontWeight: "800",
  },
});
