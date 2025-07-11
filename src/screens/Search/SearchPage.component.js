import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "./SearchPage.style";
import PrimaryButton from "../../components/primary-button/primary-button.component";

const locations = [
  {
    id: 1,
    name: "Lalitpur",
    count: "10 Found",
    image:
      "https://www.shutterstock.com/image-photo/leipzig-germany-june-18-2024-600nw-2480454921.jpg",
  },
  {
    id: 2,
    name: "Koteshwor",
    count: "8 Found",
    image:
      "https://www.shutterstock.com/image-photo/leipzig-germany-june-18-2024-600nw-2480454921.jpg",
  },
  {
    id: 3,
    name: "Patan",
    count: "5 Found",
    image:
      "https://www.shutterstock.com/image-photo/leipzig-germany-june-18-2024-600nw-2480454921.jpg",
  },
  {
    id: 4,
    name: "Swayambhu",
    count: "6 Found",
    image:
      "https://www.shutterstock.com/image-photo/leipzig-germany-june-18-2024-600nw-2480454921.jpg",
  },
];

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Room Finder</Text>
      </View>

      {/* Search Box */}
      <View style={styles.searchCard}>
        <Text style={styles.advancedTitle}>Advanced Search</Text>

        <View style={styles.inputGroup}>
          <Ionicons name="location-outline" size={18} color="#888" />
          <TextInput
            placeholder="Enter an address or city"
            style={styles.input}
            placeholderTextColor="#888"
          />
        </View>
        <View style={styles.inputGroup}>
          <Ionicons name="pricetag-outline" size={18} color="#888" />
          <TextInput
            placeholder="Enter price range"
            style={styles.input}
            placeholderTextColor="#888"
          />
        </View>
        <View style={styles.inputGroup}>
          <Ionicons name="person-outline" size={18} color="#888" />
          <TextInput
            placeholder="Resident Type"
            style={styles.input}
            placeholderTextColor="#888"
          />
        </View>
        <PrimaryButton style={styles.searchBtn}>Search Now</PrimaryButton>
      </View>

      {/* Locations */}
      <ScrollView contentContainerStyle={styles.body}>
        <Text style={styles.sectionTitle}>Locations</Text>
        <View style={styles.grid}>
          {locations.map((item) => (
            <View key={item.id} style={styles.card}>
              <Image source={{ uri: item.image }} style={styles.cardImage} />
              <View style={styles.overlay}>
                <Text style={styles.cardText}>{item.name}</Text>
                <Text style={styles.cardSubText}>{item.count}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default SearchScreen;
