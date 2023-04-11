import { View, Image, StyleSheet, Text, FlatList } from "react-native";
import orders from "../../assets/data/orders.json";
import restaurants from "../../assets/data/restaurants.json";
import { BasketDishItem } from "../Basket/BasketDishItem";

const order = orders[0];
const restaurant = restaurants[0];

export const OrderDetailsHeader = () => {
  return (
    <>
      <Image
        style={styles.image}
        source={{
          uri: order.Restaurant.image,
        }}
        resizeMode="cover"
      />

      <View style={styles.info}>
        <Text style={styles.title}>{order.Restaurant.name}</Text>
        <Text style={styles.subTitle}>{order.status} &#8226; 2 days ago</Text>
      </View>

      <View
        style={{
          width: "100%",
          height: 1.5,
          backgroundColor: "lightgrey",
          marginTop: 10,
        }}
      />

      <Text style={styles.menu}>Your order</Text>
    </>
  );
};

export const OrderDetails = () => {
  return (
    <View style={styles.page}>
      <FlatList
        data={restaurant.dishes}
        renderItem={({ item }) => <BasketDishItem dishItem={item} />}
        keyExtractor={(item) => item.name}
        ListHeaderComponent={<OrderDetailsHeader />}
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
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
  },
  info: {
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    marginVertical: 10,
  },
  subTitle: {
    color: "grey",
    fontSize: 15,
  },
  menu: {
    fontSize: 20,
    fontWeight: "600",
    marginVertical: 10,
    marginHorizontal: 10,
    letterSpacing: 0.7,
  },
});
