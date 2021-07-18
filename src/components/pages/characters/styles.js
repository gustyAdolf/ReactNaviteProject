import { Dimensions, StyleSheet } from "react-native";
const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    padding: 30

  },
  contentContainer: {
    width: windowWidth,
    justifyContent: "center",
  },
});

export default styles;
