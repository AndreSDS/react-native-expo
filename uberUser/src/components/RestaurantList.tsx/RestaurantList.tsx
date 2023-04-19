import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { RestaurantItem } from "../RestaurantItem/RestaurantItem";

import { IRestaurant } from "../../interfaces/IRestaurant";
import { DataStore } from "aws-amplify";
import { Restaurant } from "../../models";

export const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);

  async function fetchRestaurants() {
    const results: any[] = await DataStore.query(Restaurant);

    setRestaurants(results);
  }

  useEffect(() => {
    fetchRestaurants();
  }, []);

  return (
    <FlatList
      data={restaurants}
      renderItem={({ item }) => <RestaurantItem restaurant={item} />}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ marginVertical: 10 }}
    />
  );
};
