import { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { DataStore } from "aws-amplify";
import { Dish } from "../../models";

export const DishDetailScreen = () => {
  const navigation: any = useNavigation();
  const route = useRoute();
  const { id } = route.params as { id: string };
  const [dish, setDish] = useState<Dish>({} as Dish);
  const [quantityState, setQuantityState] = useState(1);

  async function fetchDish() {
    const [resultDish] = await Promise.all([
      DataStore.query(Dish, id) as Promise<Dish>,
    ]);

    setDish(resultDish);
  }

  function handleAdd() {
    setQuantityState(quantityState + 1);
  }

  function handleRemove() {
    setQuantityState(quantityState - 1);
  }

  const getTotal = () => {
    return (quantityState * dish.price).toFixed(2);
  };

  function addToBasket() {
    navigation.navigate("Basket", { dish, quantity: quantityState });
  }

  useEffect(() => {
    if (id) {
      fetchDish();
    }
  }, []);

  if (!dish.id) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" color="lightblue" />
      </View>
    );
  }

  return (
    <View style={styles.page}>
      <Text style={styles.name}>{dish.name}</Text>
      <Text style={styles.description}>{dish.description}</Text>
      <View style={styles.separator} />

      <View style={styles.buttonsContainer}>
        <TouchableOpacity disabled={quantityState === 1} onPress={handleRemove}>
          <AntDesign name="minuscircleo" size={60} color="black" />
        </TouchableOpacity>
        <Text style={styles.quantity}>{quantityState}</Text>
        <TouchableOpacity onPress={handleAdd}>
          <AntDesign name="pluscircleo" size={60} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.addContainer}>
        <View style={styles.total}>
          <Text style={styles.totalText}>Total: ${getTotal()}</Text>
          <MaterialCommunityIcons
            name="shopping-outline"
            size={30}
            color="black"
          />
        </View>

        <Pressable onPress={addToBasket} style={styles.addButton}>
          <Text style={styles.addText}>
            Add {quantityState} {quantityState > 1 ? "items" : "item"}
          </Text>
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
    fontSize: 30,
    fontWeight: "600",
    marginVertical: 10,
  },
  description: {
    color: "grey",
  },
  image: {},
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: "lightgrey",
    marginVertical: 10,
  },
  buttonsContainer: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  quantity: {
    fontSize: 35,
    fontWeight: "600",
  },
  addContainer: {
    marginTop: "auto",
  },
  total: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: 10,
    gap: 10,
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
