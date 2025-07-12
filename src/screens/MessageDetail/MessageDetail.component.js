import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  SafeAreaView,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "./MessageDetail.style";
import { useNavigation } from "@react-navigation/native";

const messages = [
  { id: "1", text: "Hey there!", sender: "them" },
  { id: "2", text: "Hi, how can I help you?", sender: "me" },
  { id: "3", text: "I need some help with my furniture.", sender: "them" },
  { id: "4", text: "Sure, let me know what’s needed.", sender: "me" },
];

const DetailMessage = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/men/44.jpg" }}
            style={styles.avatar}
          />
          <Text style={styles.username}>Courtney Henry</Text>
        </View>
      </View>

      {/* Messages */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.messageList}
        renderItem={({ item }) => (
          <View
            style={[
              styles.bubble,
              item.sender === "me" ? styles.bubbleRight : styles.bubbleLeft,
            ]}
          >
            <Text
              style={[
                styles.bubbleText,
                item.sender === "me" && { color: "#fff" },
              ]}
            >
              {item.text}
            </Text>
          </View>
        )}
      />

      {/* Input */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Type a message..."
          placeholderTextColor="#888"
          style={styles.input}
        />
        <TouchableOpacity style={styles.sendBtn}>
          <Ionicons name="send" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailMessage;
