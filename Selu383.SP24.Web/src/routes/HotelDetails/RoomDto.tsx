export interface RoomDto {
    id: number;
    hotelId?: number;
    beds?: string | null;
    hotelName?: string | null;
    isAvailable: boolean;
}