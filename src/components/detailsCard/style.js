import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  container: { flex: 1 },
  image: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 3,
  },
  inner: {
    borderBottomWidth: 2,
    marginBottom: 5,
    borderColor: "lightgray",
  },
  title: {
    margin: 5,
    color: "darkred",
    fontSize: 25,
    fontWeight: "bold",
  },
  area: {
    margin: 5,
    color: "darkred",
    fontSize: 22,
    fontWeight: "bold",
  },
  button: {
    padding: 10,
    margin: 15,
    borderRadius: 10,

    backgroundColor: "red",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 22,
    fontWeight: "600",
  },
});
