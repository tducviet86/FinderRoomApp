import { StyleSheet, Dimensions } from "react-native";
const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    backgroundColor: "#00000088",
    padding: 8,
    borderRadius: 20,
  },
  cardOverlay: {
    position: "absolute",
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 20,
    height: height * 0.7,
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    flex: 1,
    marginRight: 10,
  },
  rating: {
    backgroundColor: "#4ade80",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  ratingText: {
    color: "#fff",
    fontWeight: "600",
  },
  price: {
    marginTop: 6,
    fontSize: 20,
    color: "#4f46e5",
    fontWeight: "bold",
  },
  metaRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
    alignItems: "center",
  },
  metaItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  metaText: {
    marginLeft: 6,
    color: "#444",
    fontSize: 13,
  },
  status: {
    fontWeight: "bold",
    fontSize: 13,
  },
  subText: {
    color: "#555",
    marginTop: 6,
  },
  subMeta: {
    fontSize: 12,
    color: "#aaa",
    marginTop: 2,
  },
  divider: {
    height: 1,
    backgroundColor: "#eee",
    marginVertical: 16,
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#444",
    marginBottom: 16,
    lineHeight: 22,
  },
  facilities: {
    marginBottom: 30,
  },
  facilityItem: {
    fontSize: 14,
    marginBottom: 6,
    color: "#333",
  },
  fixedBottom: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    padding: 16,
    borderTopColor: "#eee",
    borderTopWidth: 1,
  },
  bookButton: {
    backgroundColor: "#7472E0",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },
});

export default styles;
