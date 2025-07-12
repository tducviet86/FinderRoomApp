import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "./Message.style";
import { useNavigation } from "@react-navigation/native";

const chatList = [
  {
    id: 1,
    name: "Carso Carpentery",
    message: "i could fix that.",
    time: "32 min ago",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Kristin Watson",
    message: "Hello !!",
    time: "32 min ago",
    avatar: "https://randomuser.me/api/portraits/women/56.jpg",
  },
  {
    id: 3,
    name: "Marvin McKinney",
    message: "That's a very good idea.",
    time: "15:02",
    avatar: "https://randomuser.me/api/portraits/women/57.jpg",
  },
  {
    id: 4,
    name: "Darrell Steward",
    message: "Hello , I was wondering.",
    time: "32 min ago",
    avatar: "https://randomuser.me/api/portraits/women/58.jpg",
    unread: 1,
  },
  {
    id: 5,
    name: "Eleanor Pena",
    message: "Can you check this out?",
    time: "15:13",
    avatar: "https://randomuser.me/api/portraits/women/59.jpg",
    unread: 2,
  },
];

const MessageScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Message</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Search Bar */}
      <View style={styles.searchBox}>
        <Ionicons name="search-outline" size={18} color="#888" />
        <TextInput
          placeholder="Search message"
          placeholderTextColor="#888"
          style={styles.searchInput}
        />
      </View>

      {/* Chat List */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {chatList.map((chat) => (
          <TouchableOpacity
            key={chat.id}
            style={styles.chatCard}
            onPress={() => navigation.navigate("MessageDetail")}
          >
            <Image source={{ uri: chat.avatar }} style={styles.avatar} />
            <View style={styles.chatContent}>
              <View style={styles.chatTopRow}>
                <Text style={styles.name}>{chat.name}</Text>
                <Text style={styles.time}>{chat.time}</Text>
              </View>
              <View style={styles.chatBottomRow}>
                <Text style={styles.message} numberOfLines={1}>
                  {chat.message}
                </Text>
                {chat.unread && (
                  <View style={styles.unreadBadge}>
                    <Text style={styles.unreadText}>{chat.unread}</Text>
                  </View>
                )}
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Floating Button */}
      <TouchableOpacity style={styles.fab}>
        <Ionicons name="mail-outline" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default MessageScreen;
