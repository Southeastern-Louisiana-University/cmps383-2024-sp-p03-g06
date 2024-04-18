
export interface RoomDto{
    id: number;
    hotelId: number;
    beds: string;
    Availability: boolean;
    roomTypeId: number;
}

export interface RoomTypeDto{
    id: number;
    name: string;
    numberOfBeds: number;
    rooms: Array<RoomDto>;
}