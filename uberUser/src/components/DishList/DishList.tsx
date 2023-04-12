import { FlatList } from "react-native";
import { DishItem } from "../DishItem/DishItem";
import { IDish } from "../../interfaces/IDish";
import { Header } from "../../screens/RestaurantDetails/Header";
import { useRoute } from "@react-navigation/native";
import { IRestaurant } from "../../interfaces/IRestaurant";

export const DishList = () => {
  const route = useRoute();

  const { restaurant } = route.params as { restaurant: IRestaurant };

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
