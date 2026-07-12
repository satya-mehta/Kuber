import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons'
import { C, Colors } from '@/constants/theme'
import { router } from 'expo-router'
import { Datechips } from '../commons/datechips'
import { ReportCollectionCard } from '../cards/reportsCollectionCard'
import CollectionTrendCard from '../cards/collectionTrendCard'

export default function Reports() {
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
            <Text style={styles.title}>Reports</Text>
          </View>
          <TouchableOpacity>
            <Datechips />
          </TouchableOpacity>
        </View>

        <View style = {styles.collectionCardContainer}>
          <ReportCollectionCard amount={132000} status="paid" />
          <ReportCollectionCard amount={30000} status="pending" />
          <ReportCollectionCard amount={20000} status="overdue" />
        </View>

        <CollectionTrendCard />
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
  collectionCardContainer : {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
  }
});