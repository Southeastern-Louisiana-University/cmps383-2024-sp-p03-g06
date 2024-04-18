import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HotelDto } from "../../Dtos/HotelDto";
import { Card, } from "react-bootstrap";
import { Title } from "@mantine/core";

export default function HotelDetail() {
    const {id} = useParams();
    const [hotel, setHotel] = useState<HotelDto>();
    const rooms = hotel?.rooms;

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
        </>
    )
}