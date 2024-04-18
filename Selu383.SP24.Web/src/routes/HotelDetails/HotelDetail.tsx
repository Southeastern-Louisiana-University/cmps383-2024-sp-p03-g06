import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HotelDto } from "../../Dtos/HotelDto";
import { Card, } from "react-bootstrap";
import { Title } from "@mantine/core";
import DatePickerCalendar from "./DatePicker";

export default function HotelDetail() {
    const {id} = useParams();
    const [hotel, setHotel] = useState<HotelDto>();

    useEffect(() => {
        fetch(`/api/hotels/${id}`, {
            method: "get",
        })
            .then<HotelDto>((r) => r.json())
            .then((j) => {
                setHotel(j);
            });
    }, [id]);

    

    return(
        <>
            {hotel && (
                <div>
                    <div>
                        <Title order={3}>{hotel.name}</Title>
                        <DatePickerCalendar/>
                    </div>
                    <div>
                        <Card></Card>
                    </div>
                </div>
            )}
        </>
    )
}