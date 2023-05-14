import React from 'react';
import ArrivalsFlight from '../components/arrivalsFlights/ArrivalsFlight';
import DepartureFlight from '../components/departureFlight/DepartureFlight';
import GlobalStyled from '../components/app/StyledApp';

const FlightDetail = () => {
    return (
        <>
        <GlobalStyled/>
       <ArrivalsFlight/>
       <DepartureFlight/>
       
       
        </>
    )
}
export default FlightDetail