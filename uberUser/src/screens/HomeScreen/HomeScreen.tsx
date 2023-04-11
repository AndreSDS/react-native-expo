import { View, StyleSheet } from "react-native";
import { RestaurantList } from "../../components";

export const HomeScreen = () => {
  return (
  <View style={styles.container}>
    <RestaurantList />
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  }
})
