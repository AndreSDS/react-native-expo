import { IRestaurant } from "./IRestaurant";
import { IUser } from "./IUser";

export interface IOrder {
    id: string;
    userID: string;
    status: string;
    createdAt: string;
    updatedAt: string;
    orderRestaurantId: string;
    Restaurant: IRestaurant;
    User: IUser;
}