import { FlatList } from "react-native";
import { RestaurantItem } from "../RestaurantItem/RestaurantItem";

import dataRestaurant from "../../assets/data/restaurants.json";

export const RestaurantList = () => {
  return (
    <FlatList
      data={dataRestaurant}
      renderItem={({ item }) => <RestaurantItem restaurant={item} />}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ marginVertical: 10 }}
    />
  );
};
