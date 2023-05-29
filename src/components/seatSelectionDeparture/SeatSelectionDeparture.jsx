import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom';

import {
  Aisle,
  Button,
  Column,
  Column2,
  ReferenSeat,
  Row,
  SeatDeparture,
  SeatSelect,
  StyleBottonDeparture,
  StyledContainer,
  StyledDate,
  Subtittle,
} from "./StyleSeatSelectionDeparture";
import { searchParamsContext } from "../../Routes/AppRouter";

const SeatSelectionDeparture = () => {
  const navigate = useNavigate();

  const volverAPaginaPrincipal = () => {
    navigate("/");
    window.location.reload();
  };
  const {
    filters,
  } = useContext(searchParamsContext);

  return (
    <>
    <SeatDeparture>
      <StyledDate>
        <StyledContainer>
          <h1>Vuelo de Salida</h1>
          <StyleBottonDeparture onClick={volverAPaginaPrincipal}>Cambiar vuelo</StyleBottonDeparture>
        </StyledContainer>
        <h2>{filters.dateDre}</h2>
        <h4>{filters.selectedCity}, Colombia(MDE)</h4>
        <p>Selecciona tus asientos</p>
      </StyledDate>
      <ReferenSeat>
        <Column>
          <Row>
            <Aisle>A</Aisle>
            <Aisle>B</Aisle>
            <Aisle>C</Aisle>
          </Row>
        </Column>
        <Column>
          <Aisle></Aisle>
        </Column>
        <Column>
          <Row>
            <Aisle>D</Aisle>
            <Aisle>E</Aisle>
            <Aisle>F</Aisle>
          </Row>
        </Column>
      </ReferenSeat>
      <Subtittle><h5>Salida Segura</h5></Subtittle>
      <SeatSelect>
        <Column>
          <Row>
            <Button></Button>
            <Button></Button>
            <Button></Button>
          </Row>
          <Row>
            <Button></Button>
            <Button></Button>
            <Button></Button>
          </Row>
          <Row>
            <Button></Button>
            <Button></Button>
            <Button></Button>
          </Row>
          <Row>
            <Button></Button>
            <Button></Button>
            <Button></Button>
          </Row>
          <Row>
            <Button></Button>
            <Button></Button>
            <Button></Button>
          </Row>
        </Column>
          <Column2>
            <Aisle>1</Aisle>
            <Aisle>2</Aisle>
            <Aisle>3</Aisle>
            <Aisle>4</Aisle>
            <Aisle>5</Aisle>
            
          </Column2>
        <Column>
          <Row>
            <Button></Button>
            <Button></Button>
            <Button></Button>
          </Row>
          <Row>
            <Button></Button>
            <Button></Button>
            <Button></Button>
          </Row>
          <Row>
            <Button></Button>
            <Button></Button>
            <Button></Button>
          </Row>
          <Row>
            <Button></Button>
            <Button></Button>
            <Button></Button>
          </Row>
          <Row>
            <Button></Button>
            <Button></Button>
            <Button></Button>
          </Row>
        </Column>
      </SeatSelect>
      <Subtittle><h5>Estándar</h5></Subtittle>
      <SeatSelect>
        <Column>
          <Row>
            <Button></Button>
            <Button></Button>
            <Button></Button>
          </Row>
          <Row>
            <Button></Button>
            <Button></Button>
            <Button></Button>
          </Row>
          <Row>
            <Button></Button>
            <Button></Button>
            <Button></Button>
          </Row>
          <Row>
            <Button></Button>
            <Button></Button>
            <Button></Button>
          </Row>
          <Row>
            <Button></Button>
            <Button></Button>
            <Button></Button>
          </Row>
        </Column>
          <Column2>
            <Aisle>6</Aisle>
            <Aisle>7</Aisle>
            <Aisle>8</Aisle>
            <Aisle>9</Aisle>
            <Aisle>10</Aisle>
          </Column2>
        <Column>
          <Row>
            <Button></Button>
            <Button></Button>
            <Button></Button>
          </Row>
          <Row>
            <Button></Button>
            <Button></Button>
            <Button></Button>
          </Row>
          <Row>
            <Button></Button>
            <Button></Button>
            <Button></Button>
          </Row>
          <Row>
            <Button></Button>
            <Button></Button>
            <Button></Button>
          </Row>
          <Row>
            <Button></Button>
            <Button></Button>
            <Button></Button>
          </Row>
        </Column>
      </SeatSelect>
      </SeatDeparture>
    </>
  );
};

export default SeatSelectionDeparture