import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { DishItem } from "../DishItem/DishItem";
import { IRestaurant } from "../../interfaces/IRestaurant";
import { IDish } from "../../interfaces/IDish";
import { Header } from "../../screens/RestaurantDetails/Header";
import dataRestaurant from "../../assets/data/restaurants.json";
const restaurant: IRestaurant = dataRestaurant[0];

export const DishList = () => {
  return (
    <FlatList
      data={restaurant.dishes}
      renderItem={({ item }) => <DishItem dish={item} />}
      keyExtractor={(item: IDish) => item.name}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={() => <Header restaurant={restaurant} />}
    />
  );
};
