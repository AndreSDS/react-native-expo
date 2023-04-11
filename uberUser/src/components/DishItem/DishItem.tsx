import { StyleSheet, Text, View, Image } from "react-native";
import { IDish } from "../../interfaces/IDish";

type DishItemProps = {
  dish: IDish;
};

export const DishItem = ({ dish }: DishItemProps) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <View style={{flex: 1}}>
          <Text style={styles.name}>{dish.name}</Text>
          <Text style={styles.description} numberOfLines={4} >{dish.description}</Text>
          <Text style={styles.price}>$ {dish.price.toFixed(2)}</Text>
        </View>

        {dish.image ? (
          <Image
            style={styles.image}
            source={{
              uri: dish.image,
            }}
          />
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    marginVertical: 5,
    marginHorizontal: 20,
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1.5,
  },
  image: {
    height: 100,
    aspectRatio: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
  description: {
    color: "grey",
    marginVertical: 5,
  },
  price: {
    fontSize: 15,
    fontWeight: "600",
  },
});