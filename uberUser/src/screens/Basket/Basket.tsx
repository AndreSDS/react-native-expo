import { View, StyleSheet, Text, FlatList, Pressable } from "react-native";
import datarestaurants from "../../assets/data/restaurants.json";
import { BasketDishItem } from "./BasketDishItem";
import { useNavigation, useRoute } from "@react-navigation/native";
import { IDish } from "../../interfaces/IDish";
import { IOrder } from "../../interfaces/IOrder";

const restaurant = datarestaurants[0];

export const Basket = () => {
  const navigation: any = useNavigation();
  const { dishes } = restaurant;

  const order: IOrder = {
    id: "1",
    userID: "1",
    status: "New",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    orderRestaurantId: restaurant.id,
    Restaurant: restaurant,
    User: {
      id: "1",
      name: "John Doe",
      address: "123 Main St",
    },
  };

  function handleCreateOrder() {
    navigation.navigate("Orders");
  }

  return (
    <View style={styles.page}>
      <Text style={styles.name}>{restaurant.name}</Text>
      <Text style={styles.yourItems}>Your Items</Text>

      <View style={{ flex: 1 }}>
        <FlatList
          data={dishes}
          renderItem={({ item }) => <BasketDishItem dishItem={item} />}
          keyExtractor={(item) => item.name}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 10 }}
        />
      </View>

      <View style={styles.separator} />

      <View style={{ flex: 1 }}>
        <Text>Subtotal ${18.99}</Text>
        <Text>Total ${33.53}</Text>
      </View>

      <View style={styles.addContainer}>
        <Pressable onPress={handleCreateOrder} style={styles.addButton}>
          <Text style={styles.addText}>Create order</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    paddingVertical: 30,
    paddingHorizontal: 10,
  },
  name: {
    fontSize: 23,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 30,
  },
  yourItems: {
    fontSize: 18,
    fontWeight: "bold",
  },
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: "lightgrey",
    marginVertical: 10,
  },
  addContainer: {
    marginTop: "auto",
  },
  totalText: {
    fontSize: 20,
    fontWeight: "600",
  },
  addButton: {
    backgroundColor: "black",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  addText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
});
