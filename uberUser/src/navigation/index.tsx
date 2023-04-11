import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  HomeScreen,
  RestaurantDetails,
  DishDetailScreen,
  Basket,
  OrdersScreen,
  OrderDetails,
} from "../screens";

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};
