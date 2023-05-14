import React from "react";
import { StyledCard } from "./StyledCard";

const Card = ({agent}) => {
    return(
        <StyledCard>
            <figure>
                <img src={agent.image} alt={agent.name} />
            </figure>   
                 <h3>{agent.name}</h3>
                <p>{agent.description}</p>
        </StyledCard>
    )
}
export default Card