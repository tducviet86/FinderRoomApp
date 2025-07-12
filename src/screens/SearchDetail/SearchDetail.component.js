// SearchDetail.component.js
import React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import styles from "./SearchDetail.style";

const properties = [
  {
    id: 1,
    title: "1 Big Hall at Lalitpur",
    location: "Mahalaxmi, Lalitpur",
    price: "Rs. 8000",
    rating: "3.5",
    distance: "1.2 km from Gwarko",
    applied: 9,
    views: 19,
    status: "Available",
    image:
      "https://i-thethao.vnecdn.net/2024/01/11/screenshot-2024-01-11-at-14-12-6403-7730-1704957386.png",
  },
  {
    id: 2,
    title: "A Flat at Rent",
    location: "Mahalaxmi, Lalitpur",
    price: "Rs. 8000",
    rating: "3.5",
    distance: "1.2 km from Gwarko",
    applied: 0,
    views: 10,
    status: "Booked",
    image:
      "https://i-thethao.vnecdn.net/2024/01/11/screenshot-2024-01-11-at-14-12-6403-7730-1704957386.png",
  },
];

const SearchDetail = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Search Details</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Search Box */}
      <View style={styles.searchBox}>
        <Text style={styles.searchLabel}>Search for Properties</Text>
        <View style={styles.inputBox}>
          <Ionicons name="location-outline" size={18} color="#888" />
          <TextInput
            placeholder="Lalitpur, Kathmandu"
            style={styles.input}
            placeholderTextColor="#888"
          />
        </View>
      </View>

      {/* Results */}
      <View style={styles.resultsHeader}>
        <Text style={styles.resultsTitle}>Showing Results</Text>
        <Text style={styles.resultsCount}>94 Results</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      >
        {properties.map((item) => (
          <View key={item.id} style={styles.card}>
            <View>
              <Image source={{ uri: item.image }} style={styles.cardImage} />
              <View style={styles.ratingBadge}>
                <Text style={styles.ratingText}>{item.rating}★</Text>
              </View>
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.location}>{item.location}</Text>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.price}>{item.price} /per month</Text>

              <View style={styles.statusRow}>
                <Ionicons name="location-outline" size={14} color="#775AEF" />
                <Text style={styles.metaInfo}>{item.distance}</Text>
              </View>

              <View style={styles.metaRow}>
                <Text style={styles.metaInfo}>{item.applied} Applied</Text>
                <Text style={styles.metaInfo}>{item.views} Views</Text>
              </View>

              <View style={styles.statusRow}>
                <View
                  style={[
                    styles.statusDot,
                    {
                      backgroundColor:
                        item.status === "Available" ? "#22c55e" : "#f43f5e",
                    },
                  ]}
                />
                <Text
                  style={[
                    styles.statusText,
                    {
                      color:
                        item.status === "Available" ? "#22c55e" : "#f43f5e",
                    },
                  ]}
                >
                  {item.status}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default SearchDetail;
