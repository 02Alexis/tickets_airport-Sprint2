import React from 'react';
import { StyleBa, StyleButton } from './StyleBannerForm';
import Form from '../form/form';

const BannerForm = () => {
    return (
        <>
        <StyleBa>
            <h1>Busca un nuevo destino y comienza la aventura.</h1>
            <p>Descubre vuelos al mejor precio y perfectos para cualquier viaje.</p>
            <StyleButton>
                <button>Viaje redondo</button>
                <button>Viaje sencillo</button>
            </StyleButton>
            <Form />

        </StyleBa>
        </>
    )
}

export default BannerForm