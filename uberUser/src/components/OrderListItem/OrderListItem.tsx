import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { IOrder } from "../../interfaces/IOrder";
import { useNavigation } from "@react-navigation/native";

type OrderListItemProps = {
  order: IOrder;
};

export const OrderListItem = ({ order }: OrderListItemProps) => {
  const navigation: any = useNavigation();

  function navigateToOrderDetails() {
    navigation.navigate("OrderDetails", { order });
  }

  return (
    <Pressable onPress={navigateToOrderDetails} style={styles.container}>
      <Image source={{ uri: order.Restaurant.image }} style={styles.image} />

      <View style={styles.rightContainer}>
        <Text style={styles.name}>{order.Restaurant.name}</Text>
        <Text style={styles.items}>3 items &#8226; $38.45</Text>
        <Text style={styles.status}>2 days ago &#8226; {order.status}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
  },
  image: {
    width: 75,
    height: 75,
  },
  rightContainer: {
    paddingLeft: 10,
    justifyContent: "space-around",
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  items: {
    marginVertical: 5,
    color: "gray",
  },
  status: {
    color: "gray",
  },
});
