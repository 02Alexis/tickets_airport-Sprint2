import React from 'react';
import Error404 from '../../img/404.gif';
import { StyleError, Page404, StyleText, StyleText404, StyleText2, ContantBox404 } from './StyleNotFound';

const NotFound = () => {
    return (
        <>
        <Page404>
            <StyleText404>404</StyleText404>
            <StyleError src={ Error404 }/>
            <ContantBox404>
                <StyleText>Parece que estás perdido</StyleText>
                <StyleText2>¡La página que buscas no está disponible!</StyleText2>
            </ContantBox404>
            
        </Page404>
        </>
    )
}
export default NotFound