import React from 'react';
import { StyledTitle, StayledArticle } from './StayledPayments';
import Amex from "../../assets/index/amex.svg";
import PayPal from "../../assets/index/paypal.svg";
import Invex from "../../assets/index/invex.svg";
import MasterCard from "../../assets/index/mastercard.svg";
import Visa from "../../assets/index/visa.svg";
import Oxxo from "../../assets/index/oxxo.svg";
import Seven from "../../assets/index/seven.svg";
import Walmart from "../../assets/index/walmart.svg";
import FarmaAhorros from "../../assets/index/famahorro.svg";
import ServicesCards from '../footerservices/Services';



const Payments = () => {
    return (
        <div>
        <StyledTitle>
            <h3>Pago seguro</h3>
        </StyledTitle>
        <StayledArticle>
            <div>
                <h4>Tarjeta de crédito, tarjeta débito y pago electrónico</h4>
                    <ul>
                        <li> <img src={ Amex }  alt="Amex" /> </li>
                        <li> <img src={ PayPal }  alt="PayPal" /> </li>
                        <li> <img src={ Invex }  alt="Invex" /> </li>
                        <li> <img src={ MasterCard }  alt="AMasterCard" /> </li>
                        <li> <img src={ Visa }  alt="Visa" /> </li>
                    </ul>
            </div>
            <div>
                <h4>Efectivo en cualquiera de las sucursales participantes</h4>
                    <ul>
                        <li> <img src={ Oxxo }  alt="Oxxo" /> </li>
                        <li> <img src={ Seven }  alt="Seven" /> </li>
                        <li> <img src={ Walmart }  alt="Walmart" /> </li>
                        <li> <img src={ FarmaAhorros }  alt="FarmaAhorros" /> </li>
                    </ul>
            </div>
        </StayledArticle>
        <ServicesCards />
        
        
        </div>
    )
}

export default Payments;