import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HotelDto } from "../../Dtos/HotelDto";
import { RoomDto } from "../../Dtos/RoomDto";
import { Button, Card } from "react-bootstrap";
import { Title } from "@mantine/core";
import "./HotelDetail.css";
import HotelRoomImage from "./HotelRoomImage.jpg";

export default function HotelDetail() {
  const { id } = useParams();
  const [hotel, setHotel] = useState<HotelDto>();
  const [rooms, setRooms] = useState<RoomDto[]>([]);

  useEffect(() => {
    const hotelDetails = async () => {
      const hotelResponse = await fetch(`/api/hotels/${id}`);

      const HotelData: HotelDto = await hotelResponse.json();

      setHotel(HotelData);
      const roomResponse = await fetch(`/api/rooms/byhotel/${id}`);
      const roomData: RoomDto[] = await roomResponse.json();
      setRooms(roomData);
    };

    hotelDetails();

    /*  fetch(`/api/hotels/${id}`, {
            method: "get",
        })
            .then<HotelDto>((r) => r.json())
            .then((j) => {
                setHotel(j);
            });

        fetch(`/api/rooms/byhotel/${id}`, {
            method: "get",
        })
            .then<RoomDto[]>((r) => r.json())
            .then((j) => {
                setRooms(j);
            });  */
  }, [id]);

  return (
    <>
      {hotel && (
        <div>
          <Title order={3}>
            <h1 style={{ color: "black" }}>{hotel.name}</h1>
          </Title>
          <div className="room-container">
            {rooms.map((room) => (
              <Card className="room-card">
                <Card.Img
                  variant="top"
                  src={HotelRoomImage}
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <Card.Body className="card-content">
                  <Card.Title>
                    <h2 className="text-contrast">Room # {room.id}</h2>
                  </Card.Title>
                  <Card.Subtitle className="text-contrast">
                    {room.beds}
                  </Card.Subtitle>
                  <Card.Subtitle>
                    <Button
                      as="input"
                      type="submit"
                      value="Reserve"
                      className="bigger-button"
                    />{" "}
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
