import React from 'react';
import { StyledTitle } from '../footerpayments/StayledPayments';
import { agents } from '../../data/data';
import Card from '../footer/CardsServices/CardsServices';
import { StyledServices } from './StayledServices';



const ServicesCards = () => {
  
    return (
      <div>
        
        <StyledTitle>
            <h3>Servicios disponibles</h3>
        </StyledTitle>
        <StyledServices>
        {agents.map((agent) => (
          <Card key={agent.id} agent={agent} />
        ))}
        </StyledServices>
        </div>

    )
}

export default ServicesCards;