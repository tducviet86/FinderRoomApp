import React, { useRef } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  Animated,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "./DetailRoom.style";
import PrimaryButton from "../../components/primary-button/primary-button.component";

const { height } = Dimensions.get("window");

const RoomDetail = ({ route, navigation }) => {
  const { property } = route.params;
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      {/* Hình ảnh chiếm 50% màn hình */}
      <View style={{ height: height * 0.5 }}>
        <Image source={{ uri: property.image }} style={styles.image} />
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Nội dung chính đè lên ảnh và scroll được */}
      <Animated.View
        style={[
          styles.cardOverlay,
          {
            top: height * 0.4,
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [0, 100],
                  outputRange: [0, -20],
                  extrapolate: "clamp",
                }),
              },
            ],
          },
        ]}
      >
        <Animated.ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 120 }}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: true }
          )}
          scrollEventThrottle={16}
        >
          <View style={styles.titleRow}>
            <Text style={styles.title}>{property.title}</Text>
            <View style={styles.rating}>
              <Text style={styles.ratingText}>{property.rating} ★</Text>
            </View>
          </View>

          <Text style={styles.price}>{property.price} /per month</Text>

          <View style={styles.metaRow}>
            <View style={styles.metaItem}>
              <Ionicons name="location-outline" size={16} color="#7472E0" />
              <Text style={styles.metaText}>{property.distance}</Text>
            </View>
            <Text
              style={[
                styles.status,
                {
                  color:
                    property.status === "Available" ? "#22c55e" : "#f43f5e",
                },
              ]}
            >
              {property.status}
            </Text>
          </View>

          <Text style={styles.subText}>{property.location}</Text>
          <Text style={styles.subMeta}>0 Applied | 19 Views</Text>

          <View style={styles.divider} />

          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.description}>
            1 big hall room for rent at {property.location}, with the facilities
            of bike parking and tap water. It offers 1 bedroom, and 1 common
            bathroom for whole flat. It is suitable for student only. Price is
            negotiable for student only.
          </Text>

          <Text style={styles.sectionTitle}>Facilities</Text>
          <View style={styles.facilities}>
            <Text style={styles.facilityItem}>✓ 1 Big Hall</Text>
            <Text style={styles.facilityItem}>✓ Shared Toilet</Text>
            <Text style={styles.facilityItem}>✓ Bikes and Car Parking</Text>
            <Text style={styles.facilityItem}>✓ 24/7 Water facility</Text>
          </View>
        </Animated.ScrollView>
      </Animated.View>

      {/* Button cố định đáy */}
      <View style={styles.fixedBottom}>
        <PrimaryButton style={styles.bookButton}>Book Now</PrimaryButton>
      </View>
    </View>
  );
};

export default RoomDetail;
