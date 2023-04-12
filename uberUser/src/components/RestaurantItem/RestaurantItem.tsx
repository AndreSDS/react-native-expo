import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { IRestaurant } from "../../interfaces/IRestaurant";
import { useNavigation } from "@react-navigation/native";

type RestaurantItemProps = {
  restaurant: IRestaurant;
};

export const RestaurantItem = ({ restaurant }: RestaurantItemProps) => {
  const navigation: any = useNavigation();

  function handlePress() {
    navigation.navigate("RestaurantDetails", { restaurant });
  }

  return (
    <Pressable onPress={handlePress} style={styles.restaurantgeContainer}>
      <Image
        style={styles.image}
        source={{
          uri: restaurant.image,
        }}
      />

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={styles.title}>{restaurant.name}</Text>
          <Text style={styles.subTitle}>
            ${restaurant.deliveryFee} {restaurant.minDeliveryTime}-
            {restaurant.maxDeliveryTime} minutes{" "}
          </Text>
        </View>
        <Text style={styles.rating}>{restaurant.rating.toFixed(1)}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  restaurantgeContainer: {
    width: "100%",
    padding: 10,
    backgroundColor: "#cccccc30",
  },
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
    marginBottom: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 5,
  },
  subTitle: {
    color: "grey",
  },
  rating: {
    color: "grey",
    borderRadius: 20,
    padding: 5,
    backgroundColor: "lightgrey",
    width: 50,
    height: 30,
    textAlign: "center",
  },
});
