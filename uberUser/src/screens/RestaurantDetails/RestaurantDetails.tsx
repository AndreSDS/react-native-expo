import { View, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { DishList } from "../../components";
import { useNavigation } from "@react-navigation/native";

export const RestaurantDetails = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.page}>
      <DishList />

      <Pressable onPress={() => navigation.goBack()} style={styles.iconContainer}>
        <Ionicons name="arrow-back-circle" size={45} color="white" />
      </Pressable>
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
