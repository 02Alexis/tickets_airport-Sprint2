import React from 'react';
import GlobalStyled, { CustomPageStyles } from '../components/app/StyledApp'
import SeatSelectionDeparture from '../components/seatSelectionDeparture/SeatSelectionDeparture';
import SeatSelectionArrival from '../components/seatSelectionArrival/SeatSelectionArrival';
import DetailFligth from '../components/detailFligth/DetailFligth';

const SeatSelection = () => {
    return (
        <>
        <GlobalStyled />
        <CustomPageStyles />
        <SeatSelectionDeparture/>
        <SeatSelectionArrival/>
        <DetailFligth />
        </>
    )
}

export default SeatSelection