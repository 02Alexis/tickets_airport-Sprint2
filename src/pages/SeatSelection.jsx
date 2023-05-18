import React from 'react';
import GlobalStyled, { CustomPageStyles } from '../components/app/StyledApp'
import SeatSelectionDeparture from '../components/seatSelectionDeparture/SeatSelectionDeparture';
import SeatSelectionArrival from '../components/seatSelectionArrival/SeatSelectionArrival';

const SeatSelection = () => {
    return (
        <>
        <GlobalStyled />
        <CustomPageStyles />
        <SeatSelectionDeparture/>
        <SeatSelectionArrival/>
        </>
    )
}

export default SeatSelection