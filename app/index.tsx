import { View, Text, StyleSheet } from "react-native";
import { useEffect } from "react";
import { router } from "expo-router";

export default function SplashScreen() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/flats");
    }, 2500); //2500

    return () => clearTimeout(timer);
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Kuber App</Text>
      <Text style={styles.subtitle}>Society Maintenance Management</Text>
      <Text style = {{position: 'absolute', bottom: 10, color: 'rgba(255, 246, 247, 0.57)'}}>Developed with ❤️ from <Text style = {{fontWeight: 'bold'}}>Satya Mehta</Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4F46E5",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    fontSize: 36,
    fontWeight: "700",
    color: "#fff",
  },
  subtitle: {
    marginTop: 10,
    fontSize: 16,
    color: "#E5E7EB",
  },
});