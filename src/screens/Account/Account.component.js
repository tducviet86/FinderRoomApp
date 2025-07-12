import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "./Account.style";

const AccountScreen = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Account</Text>
      </View>

      {/* Avatar positioned between header and body */}
      <View style={styles.avatarWrapper}>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/women/90.jpg" }}
          style={styles.avatar}
        />
        <TouchableOpacity style={styles.addIcon}>
          <Ionicons name="add" size={16} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Profile name and info */}
      <View style={styles.profileCard}>
        <Text style={styles.name}>Courtney Henry</Text>
        <Text style={styles.meta}>10 Applied | Kathmandu</Text>
      </View>

      {/* Option List */}
      <View style={styles.optionCard}>
        <TouchableOpacity style={styles.option}>
          <Ionicons name="person-outline" size={20} color="#6366f1" />
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionTitle}>Edit Profile</Text>
            <Text style={styles.optionSubtitle}>
              Edit all the basic profile information associated with your
              profile
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.options}>
        {[
          { icon: "notifications-outline", label: "Notifications" },
          { icon: "time-outline", label: "Recent Viewed" },
          { icon: "help-circle-outline", label: "Get Help" },
          { icon: "information-circle-outline", label: "About us" },
          { icon: "log-out-outline", label: "Sign Out" },
        ].map((item, idx) => (
          <TouchableOpacity key={idx} style={styles.optionRow}>
            <Ionicons name={item.icon} size={20} color="#444" />
            <Text style={styles.optionRowText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Premium Service */}
      <View style={styles.premiumCard}>
        <Text style={styles.premiumTitle}>Go for Premium Service</Text>
        <TouchableOpacity style={styles.upgradeBtn}>
          <Text style={styles.upgradeText}>Upgrade</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default AccountScreen;
