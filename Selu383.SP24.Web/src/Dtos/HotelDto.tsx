import { CityDto } from "./CityDto";
import { RoomTypeDto } from "./RoomDto";


export interface HotelDto{
    id: number;
    name: string;
    address: string;
    managerId: number | null;
    cityId: number;
    city: CityDto;
    rooms: Array<RoomTypeDto>
}