import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    margin: 8,
    padding: 7,
    borderTopLeftRadius: 70,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    height: Dimensions.get("window").height / 8,
    minWidth: 100,
    resizeMode: "contain",
    borderRadius: 50,
  },
  title: {
    marginLeft: 5,
    fontSize: 20,
    fontWeight: "bold",
  },
});
