import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Foundation, FontAwesome5, MaterialIcons } from "@expo/vector-icons";

import {
  HomeScreen,
  RestaurantDetails,
  DishDetailScreen,
  Basket,
  OrdersScreen,
  OrderDetails,
} from "../screens";

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen
        name="RestaurantDetails"
        component={RestaurantDetails}
      />
      <HomeStack.Screen name="DishDetailScreen" component={DishDetailScreen} />

      <HomeStack.Screen name="Basket" component={Basket} />
    </HomeStack.Navigator>
  );
};

const OrdersStack = createNativeStackNavigator();

const OrdersStackNavigator = () => {
  return (
    <OrdersStack.Navigator initialRouteName="Orders">
      <OrdersStack.Screen name="Orders" component={OrdersScreen} />
      <OrdersStack.Screen name="OrderDetails" component={OrderDetails} />
    </OrdersStack.Navigator>
  );
};

const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="purple"
      inactiveColor="gray"
      barStyle={{ backgroundColor: "#fff" }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeStackNavigator}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Foundation name="home" color={color} size={24} />
          ),
        }}
      />

      <Tab.Screen
        name="OrdersScreen"
        component={OrdersStackNavigator}
        options={{
          tabBarLabel: "Orders",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="list-alt" color={color} size={24} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Basket}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-alt" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="HomeTabs"
        component={HomeTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RestaurantDetails"
        component={RestaurantDetails}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
