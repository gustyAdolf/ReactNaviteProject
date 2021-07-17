import { StyleSheet, Platform, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  card: {
    width: windowWidth / 2,
    height: undefined,
    flexDirection: "row",
    borderRadius: 20,
    padding: 20,
    ...Platform.select({
      android: {
        elevation: 3,
      },
      ios: {
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 4,
      },
    }),
  },
  infoContainer: {
    width: windowWidth / 2,
    flexDirection: "column",
    padding: 20,
    backgroundColor: "#35303F",
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
  },
  info: {
    fontWeight: "normal",
    fontSize: 16,
    flex: 1,
    color: 'white'
  },
  label: {
    fontWeight: "bold",
    fontSize: 16,
    flex: 1,
    color: 'white'
  },
  image: {
    width: windowWidth / 3,
    height: undefined,
    resizeMode: "cover",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
});

export default styles;
