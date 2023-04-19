import { Text, View, Image, StyleSheet } from "react-native";
import { IRestaurant } from "../../interfaces/IRestaurant";

type HeaderProps = {
  restaurant: IRestaurant;
};

export const Header = ({ restaurant }: HeaderProps) => {
  return (
    <>
      <Image
        style={styles.image}
        source={{
          uri: restaurant.image,
        }}
        resizeMode="cover"
      />

      <View style={styles.info}>
        <Text style={styles.title}>{restaurant.name}</Text>
        <Text style={styles.subTitle}>
          $ {restaurant.deliveryFee.toFixed(1)} &#8226; {restaurant.minDeliveryTime} -{" "}
          {restaurant.maxDeliveryTime} minutes
        </Text>
      </View>

      <View
        style={{
          width: "100%",
          height: 1.5,
          backgroundColor: "lightgrey",
          marginTop: 10,
        }}
      />

      <Text style={styles.menu}>Menu</Text>
    </>
  );
};

const styles = StyleSheet.create({
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
