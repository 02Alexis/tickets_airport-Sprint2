import React from 'react';
import GlobalStyled from './StyledApp';
import Footer from '../footer/Footer';
import Banner from '../banner/Banner';

const App = () => {
    return (
        <>
        <GlobalStyled />
        <Banner />
        <Footer />
        </>
    )
}

export default App