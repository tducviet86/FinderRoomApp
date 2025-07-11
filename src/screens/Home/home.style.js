const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#7472E0",
    paddingTop: 70,
    paddingBottom: 80,
    alignItems: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: 260,
  },
  headerTitle: {
    color: "#fff",
    marginTop: 20,
    fontSize: 36,
    fontFamily: "SF UI Display",
    fontWeight: "700",
    lineHeight: "33.84",
  },
  searchBoxWrapper: {
    position: "absolute",
    top: 170,
    left: 0,
    right: 0,
    alignItems: "center",
    zIndex: 10,
  },
  searchBox: {
    backgroundColor: "#fff",
    padding: 25,
    borderRadius: 12,
    width: "90%",
    height: 190,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  searchLabel: {
    fontSize: 14,
    marginBottom: 8,
    color: "#616161",
    fontFamily: "SF UI Display",
    fontWeight: "700",
  },
  searchView: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 10,
  },
  input: {
    fontSize: 14,
  },
  searchButton: {
    backgroundColor: "#7472E0",
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: "center",
    marginBottom: 6,
  },
  searchButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  advancedSearch: {
    textAlign: "right",
    color: "#555",
    fontSize: 12,
  },
  resultsHeaderWrapper: {
    marginTop: 130,
    paddingHorizontal: 16,
  },
  body: {
    // paddingTop: 140, // bù lại phần bị che bởi box trắng
    paddingHorizontal: 16,
    paddingBottom: 100,
    backgroundColor: "#FDFDFD",
    marginHorizontal: 20,
  },
  resultsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  recentTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  resultsCount: {
    fontSize: 12,
    color: "#888",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    flexDirection: "row",
    padding: 10,
    marginVertical: 12,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  image: {
    width: 100,
    height: 110,
    borderRadius: 12,
    marginRight: 14,
  },
  cardContent: {
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: 4,
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  cardTitle: {
    fontWeight: "700",
    fontSize: 16,
    flex: 1,
    marginRight: 6,
  },
  rating: {
    backgroundColor: "#4ade80",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
  },
  ratingText: {
    fontSize: 13,
    color: "#fff",
    fontWeight: "600",
  },
  location: {
    fontSize: 13,
    color: "#777",
    marginBottom: 4,
  },
  price: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#4f46e5",
    marginBottom: 6,
  },
  metaRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  metaText: {
    fontSize: 13,
    color: "#888",
  },
  status: {
    fontSize: 13,
    fontWeight: "bold",
  },
});
export default styles;
