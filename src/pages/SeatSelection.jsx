import React from 'react';
import GlobalStyled from '../components/app/StyledApp'
import SeatSelectionDeparture from '../components/seatSelectionDeparture/SeatSelectionDeparture';
import SeatSelectionArrival from '../components/seatSelectionArrival/SeatSelectionArrival';

const SeatSelection = () => {
    return (
        <>
        <GlobalStyled />
        <SeatSelectionDeparture/>
        <SeatSelectionArrival/>
        </>
    )
}

export default SeatSelection