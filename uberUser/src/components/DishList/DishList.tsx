import { FlatList, ActivityIndicator } from "react-native";
import { DishItem } from "../DishItem/DishItem";
import { IDish } from "../../interfaces/IDish";
import { Header } from "../../screens/RestaurantDetails/Header";
import { useRoute } from "@react-navigation/native";
import { IRestaurant } from "../../interfaces/IRestaurant";
import { useEffect, useState } from "react";
import { DataStore } from "aws-amplify";
import { Restaurant, Dish } from "../../models";

export const DishList = () => {
  const [restaurantDetails, setRestaurantDetails] = useState<IRestaurant>(
    {} as IRestaurant
  );
  const [dishes, setDishes] = useState<IDish[]>([]);

  const route = useRoute();

  const { id } = route.params as { id: string };

  async function fetchRestaurant() {
    const [resultRestaurant, resultDishes] = await Promise.all([
      DataStore.query(Restaurant, id) as Promise<IRestaurant>,
      DataStore.query(Dish, (dish) => dish.restaurantID.eq(id)) as Promise<
        IDish[]
      >,
    ]);

    setRestaurantDetails(resultRestaurant);
    setDishes(resultDishes);
  }

  useEffect(() => {
    fetchRestaurant();
  }, []);

  if (!restaurantDetails.id) {
    return <ActivityIndicator size="large" color="lightblue" />;
  }

  return (
    <FlatList
      data={dishes}
      renderItem={({ item }) => <DishItem dish={item} />}
      keyExtractor={(item: IDish) => item.name}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={() => <Header restaurant={restaurantDetails} />}
    />
  );
};
