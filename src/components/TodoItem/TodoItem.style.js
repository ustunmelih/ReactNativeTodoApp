import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    backgroundColor: "#1267EA",
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  containerCompleted: {
    backgroundColor: "#95C3D9",
  },
  titleCompleted: {
    color: "#fff",
    textDecorationLine: "line-through",
  },
});

export default styles;
