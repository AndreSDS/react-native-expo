import { View, Text, StyleSheet } from "react-native";

export const BasketDishItem = ({ dishItem }: any) => {
  return (
    <View style={styles.row}>
      <View style={styles.quantityContainer}>
        <Text>1</Text>
      </View>
      <Text style={styles.dishName}>{dishItem.name}</Text>
      <Text style={styles.price}>${dishItem.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    paddingHorizontal: 10,
  },
  quantityContainer: {
    backgroundColor: "lightgrey",
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 3,
    marginRight: 10,
  },
  dishName: {
    fontSize: 14,
    fontWeight: "600",
  },
  price: {
    marginLeft: "auto",
  },
});
