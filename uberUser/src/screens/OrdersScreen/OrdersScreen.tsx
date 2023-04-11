import { View, StyleSheet, Text, FlatList } from "react-native";
import orders from "../../assets/data/orders.json";
import { OrderListItem } from "../../components";

export const OrdersScreen = () => {
  return (
    <View>
      <FlatList
        data={orders}
        renderItem={({ item }) => <OrderListItem order={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
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
