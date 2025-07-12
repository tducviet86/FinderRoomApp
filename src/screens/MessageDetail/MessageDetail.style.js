import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#7c3aed",
    height: 100,
    padding: 12,
    paddingTop: 50,
  },
  headerCenter: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 12,
  },
  avatar: {
    width: 34,
    height: 34,
    borderRadius: 17,
    marginRight: 8,
  },
  username: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  messageList: {
    padding: 16,
    flexGrow: 1,
  },
  bubble: {
    maxWidth: "75%",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 14,
    marginVertical: 4,
  },
  bubbleLeft: {
    alignSelf: "flex-start",
    backgroundColor: "#e5e7eb",
  },
  bubbleRight: {
    alignSelf: "flex-end",
    backgroundColor: "#7c3aed",
  },
  bubbleText: {
    fontSize: 14,
    color: "#111",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  input: {
    flex: 1,
    height: 42,
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    paddingHorizontal: 14,
    fontSize: 14,
  },
  sendBtn: {
    marginLeft: 10,
    backgroundColor: "#7c3aed",
    borderRadius: 20,
    padding: 10,
  },
});

export default styles;
