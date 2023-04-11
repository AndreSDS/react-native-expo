import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { DishList } from "../../components";

export const RestaurantDetails = () => {
  return (
    <View style={styles.page}>
      <DishList />

      <View style={styles.iconContainer}>
        <Ionicons name="arrow-back-circle" size={45} color="white" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#fff",
  },
  iconContainer: {
    position: "absolute",
    top: 45,
    left: 10,
  },
});
