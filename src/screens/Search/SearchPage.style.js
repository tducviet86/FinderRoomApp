import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#7B6EF6",
    paddingTop: 60,
    paddingBottom: 80,
    alignItems: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: 290,
  },
  headerText: {
    marginTop: 30,
    fontWeight: "700",
    fontSize: 36,
    fontWeight: "700",
    color: "#fff",
  },
  searchCard: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 12,
    marginTop: -120,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 4,
  },
  advancedTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 10,
  },
  inputGroup: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#eee",
    paddingHorizontal: 12,
    borderRadius: 8,
    marginBottom: 10,
    height: 40,
  },
  input: {
    marginLeft: 10,
    flex: 1,
    fontSize: 13,
    color: "#333",
  },
  searchBtn: {
    backgroundColor: "#7B6EF6",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  searchBtnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
  body: {
    marginTop: 30,
    paddingHorizontal: 20,
    paddingBottom: 100,
    backgroundColor: "#FDFDFD",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 16,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: (width - 60) / 2,
    height: 150,
    borderRadius: 12,
    marginBottom: 16,
    overflow: "hidden",
    backgroundColor: "#ccc",
  },
  cardImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    padding: 10,
    backgroundColor: "#00000066",
    width: "100%",
  },
  cardText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
  cardSubText: {
    color: "#eee",
    fontSize: 12,
  },
});

export default styles;
