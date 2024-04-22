import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { HotelDto } from "../../Dtos/HotelDto";
import { Button, Card, Col, Navbar, Row, } from "react-bootstrap";
import { Container, Title } from "@mantine/core";
import { RoomDto } from "../../Dtos/RoomDto";
import { ReservationDto } from "../Reservations/ReservationsDto";
import DatePicker from 'react-datepicker';

export default function HotelDetail() {
    const {id} = useParams();
    const [hotel, setHotel] = useState<HotelDto>();
    const rooms = hotel?.rooms;

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const checkInParam = params.get('checkIn');
    const checkOutParam = params.get('checkOut');

    const [checkIn, setCheckIn] = useState<Date | null>(checkInParam ? new Date(checkInParam) : null);
    const [checkOut, setCheckOut] = useState<Date | null>(checkOutParam ? new Date(checkOutParam) : null);
    const [availableRooms, setAvailableRooms] = useState<RoomDto[]>([]);
    const [selectedRooms, setSelectedRooms] = useState<{ room: RoomDto, quantity: number }[]>([]);
    const [cartOpen, setCartOpen] = useState(false);

    useEffect(() => {
        fetch(`/api/hotels/${id}`, {
            method: "get",
        })
            .then<HotelDto>((r) => r.json())
            .then((j) => {
                setHotel(j);
            });
    }, [id]);

    const handleCheckInChange = (date: Date | null) => {
        setCheckIn(date);
    };

    const handleCheckOutChange = (date: Date | null) => {
        setCheckOut(date);
    };

    useEffect(() => {
        const fetchAvailableRoomsAndReservations = async () => {
            try {
                if (!checkIn || !checkOut) return;

                const [availableRoomsResponse, reservationsResponse] = await Promise.all([
                    fetch(`/api/rooms/`),
                    fetch(`/api/reservations?checkIn=${checkIn.toISOString()}&checkOut=${checkOut.toISOString()}`)
                ]);

                const [availableRoomsData, reservationsData]: [RoomDto[], ReservationDto[]] = await Promise.all([
                    availableRoomsResponse.json(),
                    reservationsResponse.json()
                ]);

                const filteredRooms = availableRoomsData.filter(room => {
                    // Check if room has reservations conflicting with the given check-in and check-out times
                    return !reservationsData.some(reservation =>
                        reservation.roomId === room.id &&
                        ((new Date(reservation.checkIn) < checkOut && new Date(reservation.checkOut) > checkIn) ||
                        (new Date(reservation.checkIn) >= checkIn && new Date(reservation.checkIn) < checkOut)));
                });

                setAvailableRooms(filteredRooms);
            } catch (error) {
                console.error('Error fetching available rooms and reservations:', error);
            }
        };

        fetchAvailableRoomsAndReservations();
    }, [checkIn, checkOut]);

    const handleRoomSelect = (room: RoomDto) => {
        const existingRoomIndex = selectedRooms.findIndex(selectedRoom => selectedRoom.room.id === room.id);
        const updatedSelectedRooms = [...selectedRooms];
    
        if (existingRoomIndex !== -1) {
            updatedSelectedRooms[existingRoomIndex].quantity++;
        } else {
            updatedSelectedRooms.push({ room, quantity: 1 });
        }
    
        setSelectedRooms(updatedSelectedRooms);
    };




    return(
        <>
            <div>
                <div>{hotel?.name}</div>
            </div>


            <div>
                <div>
                    {rooms?.map((room) => {
                        return(
                            <>
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">All</button>
                                        </li>
                                        {<li className="nav-item" role="presentation">
                                            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">{room.name}</button>
                                        </li>}
                                    </ul>
                            </>
                        )
                    })}
                    {rooms?.map((room) => {
                        return(
                            <>
                                <div>
                                    
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex={0}>huh</div>
                                        <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex={0}>what</div>
                                    </div>
                                </div>
                                <br />
                                <div className="container">
                                    
                                    <div className="row" style={{ backgroundColor: 'rgba(255,255,255,.95)' }}>
                                        <div className="col-1"></div>
                                        <div className="col-8">
                                        <div>
                                            <br />
                                            <h2>{room.name}</h2>
                                            <p>{room.numberOfBeds}</p>
                                            
                                        </div>
                                        </div>
                                        <div className="col-2">
                                        <br />
                                        </div>
                                        <div className="col-1"></div>
                                    </div> 
                                    S
                                </div>
                                <br />
                            </>
                        )
                    })}
                </div>
            </div>


            <div>
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
                rel="stylesheet"
                integrity="<KEY>"
                crossOrigin="anonymous"
            ></link>
            <div className="navbar">
                <Navbar/>
            </div>
            <div>
                <Button variant="info" size="sm" className="mt-5" onClick={() => setCartOpen(!cartOpen)}> Reservations ({selectedRooms.reduce((acc, curr) => acc + curr.quantity, 0)})</Button>
                {cartOpen && (
                    <div>
                        <h2 className="mt-3 mb-2">Selected Rooms:</h2>
                        <div>
                            {selectedRooms.map((selectedRoom, index) => (
                                <Card key={index} className="mb-2">
                                    <Card.Body>
                                        <Card.Title>{selectedRoom.room.beds}</Card.Title>
                                        <Card.Text>
                                            Room ID: {selectedRoom.room.id}<br />
                                            Price: $100 per night
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            ))}
                        </div>
                    </div>
                )}
                
                <Button variant="success" size="lg" className="mt-3" onClick={() => {
                window.location.href = `/reservation?selectedRooms=${JSON.stringify(selectedRooms)}&checkIn=${checkIn?.toISOString()}&checkOut=${checkOut?.toISOString()}`;
                }}>Go to Reservation</Button>

                <h2>Select Dates:</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="checkIn" className="form-label">Check-in Date:</label>
                        <DatePicker
                            id="checkIn"
                            selected={checkIn}
                            onChange={handleCheckInChange}
                            dateFormat="MM/dd/yyyy"
                            minDate={new Date()}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="checkOut" className="form-label">Check-out Date:</label>
                        <DatePicker
                            id="checkOut"
                            selected={checkOut}
                            onChange={handleCheckOutChange}
                            dateFormat="MM/dd/yyyy"
                            minDate={checkIn || new Date()}
                            className="form-control"
                            required
                        />
                    </div>
                </form>
            </div>

            {availableRooms.length > 0 && (
                <div>
                    <h2>Available Rooms:</h2>
                    <Container fluid>
                        <Row xs={1} sm={2} md={3} lg={4}>
                            {availableRooms.map(room => (
                                <Col key={room.id}>
                                    <div className="card-wrapper mb-3">
                                        <Card>
                                            <Card.Body>
                                                <Card.Title>{room.beds}</Card.Title>
                                                <Card.Text>
                                                    Price: $100 per night
                                                </Card.Text>
                                                <Button variant="primary" onClick={() => handleRoomSelect(room)}>Select</Button>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </div>
            )}
        </div>
        </>
    )
}