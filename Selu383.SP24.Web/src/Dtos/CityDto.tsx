import { HotelDto } from "./HotelDto";

export interface CityDto{
    id: number;
    location: string;
    hotels: Array<HotelDto>;
}