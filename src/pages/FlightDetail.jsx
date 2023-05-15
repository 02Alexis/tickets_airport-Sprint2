import React from 'react';
import ArrivalsFlight from '../components/arrivalsFlights/ArrivalsFlight';
import DepartureFlight from '../components/departureFlight/DepartureFlight';
import GlobalStyled from '../components/app/StyledApp';
import ReservationFligth from '../components/reservationFligth/ReservationFligth';
import FlightCost from '../components/flightCost/FlightCost';

const FlightDetail = () => {
    return (
        <>
       <GlobalStyled/>
       <ArrivalsFlight/>
       <DepartureFlight/>
       <ReservationFligth />
       <FlightCost />   
        </>
    )
}
export default FlightDetail