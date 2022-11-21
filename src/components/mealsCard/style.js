import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    padding: 5,
  },
  image: {
    flex: 1,
    height: Dimensions.get("window").height / 3,
    borderRadius: 15,
  },
  titleView: {
    position: "absolute",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: "100%",
    fontSize: 22,
    fontWeight: "bold",
    bottom: 4,
    height: 30,
    left: 5,
    paddingBottom: 5,
    paddingRight: 10,
  },
  title: {
    color: "white",
    textAlign: "right",
    fontSize: 22,
    fontWeight: "bold",
    paddingLeft: 5,
  },
});
