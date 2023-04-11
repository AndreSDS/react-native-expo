import { IDish } from "./IDish";

export interface IRestaurant {
    id: string;
    name: string;
    deliveryFee: number;
    minDeliveryTime: number;
    maxDeliveryTime: number;
    rating: number;
    image: string;
    dishes?: IDish[];
    address?: string;
    lat?: number;
    lng?: number;
    createdAt?: string;
    updatedAt?: string;
}