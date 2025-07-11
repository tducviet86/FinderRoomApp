import React from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import styles from "./home.style";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const properties = [
  {
    id: 1,
    title: "1 Big Hall at Lalitpur",
    location: "Mahalaxmi, Lalitpur",
    price: "Rs. 8000",
    distance: "1.2 km from Gwarko",
    status: "Available",
    rating: "3.5",
    image:
      "https://i-thethao.vnecdn.net/2024/01/11/screenshot-2024-01-11-at-14-12-6403-7730-1704957386.png",
  },
  {
    id: 2,
    title: "A Flat at Ekantakuna",
    location: "Ekantakuna, Lalitpur",
    price: "Rs. 25000",
    distance: "1.2 km from Gwarko",
    status: "Booked",
    rating: "4.0",
    image:
      "https://i-thethao.vnecdn.net/2024/01/11/screenshot-2024-01-11-at-14-12-6403-7730-1704957386.png",
  },
  {
    id: 3,
    title: "2BHK Flat",
    location: "Mahalaxmi, Lalitpur",
    price: "Rs. 8000",
    distance: "1.2 km from Gwarko",
    status: "Available",
    rating: "3.8",
    image:
      "https://i-thethao.vnecdn.net/2024/01/11/screenshot-2024-01-11-at-14-12-6403-7730-1704957386.png",
  },
];

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Nền tím */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Room Finder</Text>
      </View>

      {/* Hộp tìm kiếm nổi */}
      <View style={styles.searchBoxWrapper}>
        <View style={styles.searchBox}>
          <Text style={styles.searchLabel}>Find a property anywhere.</Text>
          <View style={styles.searchView}>
            <Ionicons name="location-outline" size={24} color="black" />
            <TextInput
              placeholder="Enter an address, neighbourhood or city"
              style={styles.input}
              placeholderTextColor="#888"
            />
          </View>
          <TouchableOpacity style={styles.searchButton}>
            <Text style={styles.searchButtonText}>Search Now</Text>
          </TouchableOpacity>
          <Text style={styles.advancedSearch}>Advanced Search</Text>
        </View>
      </View>

      {/* 🔥 Title tĩnh không scroll */}
      <View style={styles.resultsHeaderWrapper}>
        <View style={styles.resultsHeader}>
          <Text style={styles.recentTitle}>Recently Added Properties</Text>
          <Text style={styles.resultsCount}>1040 Results</Text>
        </View>
      </View>

      {/* 🔥 ScrollView chỉ cho danh sách */}
      <ScrollView
        contentContainerStyle={styles.body}
        showsVerticalScrollIndicator={false}
      >
        {properties.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.card}
            onPress={() =>
              navigation.navigate("RoomDetail", { property: item })
            }
          >
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.cardContent}>
              <View style={styles.titleRow}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <View style={styles.rating}>
                  <Text style={styles.ratingText}>{item.rating}★</Text>
                </View>
              </View>
              <Text style={styles.location}>{item.location}</Text>
              <Text style={styles.price}>{item.price} /per month</Text>
              <View style={styles.metaRow}>
                <Text style={styles.metaText}>📍 {item.distance}</Text>
                <Text
                  style={[
                    styles.status,
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
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Home;
