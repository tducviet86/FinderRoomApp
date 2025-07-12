import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#7c3aed",
    height: 270,
    // justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerText: {
    color: "#fff",
    fontSize: 36,
    fontWeight: "600",
    marginTop: 100,
  },
  profileCard: {
    alignItems: "center",
    backgroundColor: "#fff",
    marginTop: 40,
    paddingBottom: 16,
  },
  avatarWrapper: {
    position: "absolute",
    top: 200,
    left: "50%",
    marginLeft: -45, // half of avatar size
    backgroundColor: "#fff",
    borderRadius: 50,
    padding: 4,
    elevation: 5, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    zIndex: 2,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  addIcon: {
    position: "absolute",
    right: -4,
    bottom: -4,
    backgroundColor: "#7c3aed",
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 3,
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
    color: "#222",
  },
  meta: {
    color: "#666",
    fontSize: 14,
    marginTop: 4,
  },
  optionCard: {
    backgroundColor: "#eef2ff",
    borderRadius: 12,
    marginHorizontal: 16,
    marginTop: 16,
    padding: 12,
  },
  option: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  optionTextContainer: {
    marginLeft: 12,
    flex: 1,
  },
  optionTitle: {
    fontWeight: "600",
    color: "#4f46e5",
    fontSize: 14,
  },
  optionSubtitle: {
    fontSize: 13,
    color: "#666",
    marginTop: 4,
  },
  options: {
    marginHorizontal: 16,
    marginTop: 16,
  },
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    gap: 12,
  },
  optionRowText: {
    fontSize: 15,
    color: "#111",
  },
  premiumCard: {
    backgroundColor: "#eef2ff",
    margin: 16,
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  premiumTitle: {
    fontWeight: "600",
    fontSize: 14,
    color: "#222",
  },
  upgradeBtn: {
    backgroundColor: "#4f46e5",
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 6,
  },
  upgradeText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 12,
  },
});
export default styles;
