import { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs";
import { TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { C } from "@/constants/theme";

export default function BottomFab({
  onPress,
  accessibilityState,
}: BottomTabBarButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      accessibilityState={accessibilityState}
      style={styles.container}
    >
      <Ionicons name="add" size={34} color="#FFF" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 72,
    height: 72,
    borderRadius: 36,

    backgroundColor: C.primary,

    justifyContent: "center",
    alignItems: "center",

    marginTop: -35,

    borderWidth: 5,
    borderColor: "#FFF",

    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 6,
    },

    elevation: 3,
  },
});
