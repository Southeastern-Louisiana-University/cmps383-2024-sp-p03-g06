import { CityDto } from "./CityDto";


export interface HotelDto{
    id: number;
    name: string;
    address: string;
    managerId: number | null;
    cityId: number;
    city: CityDto;
}