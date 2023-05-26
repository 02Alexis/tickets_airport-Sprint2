import React from 'react';
import styled from "styled-components"
import { StyleBa, StyleButton } from './StyleBannerForm';
import FormFligth from '../form/form';

const Button = styled.button`
background-color: ${(props) => (props.active ? 'var(--purple)' : 'var(--White)')};
color: ${(props) => (props.active ? 'var(--White)' : 'dark')};
border-radius: 4px;
`;

const BannerForm = () => {
    const [viaje, setViaje] = React.useState('redondo');

    return (
        <>
        <StyleBa>
            <h1>Busca un nuevo destino y comienza la aventura.</h1>
            <p>Descubre vuelos al mejor precio y perfectos para cualquier viaje.</p>
            <StyleButton>
                <Button active={viaje === 'redondo'} onClick={() => setViaje('redondo')}>Viaje redondo</Button>
                <Button active={viaje === 'sencillo'} onClick={() => setViaje('sencillo')}>Viaje sencillo</Button>
            </StyleButton>
            <FormFligth viaje={viaje} />

        </StyleBa>
        </>
    )
}

export default BannerForm