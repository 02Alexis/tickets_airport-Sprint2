import React from 'react';
import { Container, ContainerTwo, StyleButton, StyleForm, StyledContainer } from './StyleForm';
import Plane from '../../assets/plane.svg';
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const navigate = useNavigate();

    const handleButton = () => {
        console.log("entre");
        navigate('/flightDetail')
    }
    return (
        <>
        <StyleForm>
            <Container>
                <StyledContainer>
                    <h1>Ciudad de Mexico</h1>
                    <p>Origen</p>
                </StyledContainer>
            </Container>
            <Container>
                <StyledContainer>
                    <h1> --- </h1>
                    <p>Seleccione un destino</p>
                </StyledContainer>
            </Container>
            <ContainerTwo>
                <StyledContainer>
                    <span>Regreso <p>Mar, 30 nov, 2021</p> </span>
                </StyledContainer>
            </ContainerTwo>
            <ContainerTwo>
                <StyledContainer>
                    <span>Salida <p>Mar, 30 nov, 2021</p> </span>
                </StyledContainer>
            </ContainerTwo>
            <ContainerTwo>
                <StyledContainer>
                <span>Pasajeros <p>1 Adulto</p> </span>
                </StyledContainer>
            </ContainerTwo>
            <ContainerTwo>
                <StyledContainer>
                    <span>¿Tienes un codigo de promocion? <p>-- -- --</p> </span>
                </StyledContainer>
            </ContainerTwo>
        </StyleForm>
        <StyleButton type='button' onClick={() => handleButton()}><img src={Plane} alt="Avion" /> Buscar vuelos</StyleButton>
        </>
    )
}

export default Form