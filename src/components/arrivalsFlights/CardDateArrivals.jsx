import React from "react";
import { StyleTableArrivals, StyledCardDateArrivals, StyledTdArrivals, StyledTdLastArrivals } from "./StyledCardDateArrivals";
import Briefcase from "./../../assets/briefcase.svg";
import Scala from "././../../assets/Scala.png"

const CardDateArrivals = () => {
    return (
      <div>
        <StyledCardDateArrivals>
            <StyleTableArrivals>
              <tr>
                <StyledTdArrivals><h2>7:25 PM</h2></StyledTdArrivals>
                <StyledTdArrivals><span>2 h 30 min</span> <img src={ Scala }  alt="Escala" /> <span>sin escalas</span> </StyledTdArrivals>
                <StyledTdArrivals><h2>9:47 PM</h2></StyledTdArrivals>
                <hr />
                <StyledTdLastArrivals><img src={ Briefcase }  alt="Briefcase" /> <span>1 objeto personal</span><h4>$ 60.000 COP</h4> </StyledTdLastArrivals >
                <StyledTdLastArrivals><img src={ Briefcase }  alt="Briefcase" /> <span>Equipaje de mano</span><h4>$ 90.000 COP</h4></StyledTdLastArrivals>
                <StyledTdLastArrivals><img src={ Briefcase }  alt="Briefcase" /> <span> Equiaje 25kg</span><h4>$ 120.000 COP</h4> </StyledTdLastArrivals>
              </tr>
            </StyleTableArrivals>
        </StyledCardDateArrivals>

        <StyledCardDateArrivals>
            <StyleTableArrivals>
              <tr>
                <StyledTdArrivals><h2>8:50 PM</h2></StyledTdArrivals>
                <StyledTdArrivals><span>2 h 30 min</span> <img src={ Scala }  alt="Escala" /> <span>sin escalas</span> </StyledTdArrivals>
                <StyledTdArrivals><h2>10:47 PM</h2></StyledTdArrivals>
                <hr />
                <StyledTdLastArrivals><img src={ Briefcase }  alt="Briefcase" /> <span>1 objeto personal</span><h4>$ 60.000 COP</h4> </StyledTdLastArrivals >
                <StyledTdLastArrivals><img src={ Briefcase }  alt="Briefcase" /> <span>Equipaje de mano</span><h4>$ 90.000 COP</h4></StyledTdLastArrivals>
                <StyledTdLastArrivals><img src={ Briefcase }  alt="Briefcase" /> <span> Equiaje 25kg</span><h4>$ 120.000 COP</h4> </StyledTdLastArrivals>
              </tr>
            </StyleTableArrivals>
        </StyledCardDateArrivals>
        </div>
  
    
    );
  };
  
  export default CardDateArrivals;
  