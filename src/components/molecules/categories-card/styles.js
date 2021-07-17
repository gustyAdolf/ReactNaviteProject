import { Dimensions, Platform, StyleSheet } from "react-native";

const windowWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  card: {
    width: windowWidth ,
    height: undefined,
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
    flexDirection: "row",
    padding: 20,
    backgroundColor: "#35303F",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    flex: 1,
    textAlign: "center",
    color: "white",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default styles;
