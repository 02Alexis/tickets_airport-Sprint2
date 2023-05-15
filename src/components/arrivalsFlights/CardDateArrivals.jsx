import React from "react";
import { StyledCardDateArrivals } from "./StyledCardDateArrivals";
import { StyleTable, StyledTd, StyledTdLast } from "../departureFlight/StylesCardDateBaggage";
import Briefcase from "./../../assets/briefcase.svg";
import Scala from "././../../assets/Scala.png"

const CardDateArrivals = () => {
    return (
      <div>
        <StyledCardDateArrivals>
            <StyleTable>
              <tr>
                <StyledTd><h2>7:25 PM</h2></StyledTd>
                <StyledTd><span>2 h 30 min</span> <img src={ Scala }  alt="Escala" /> <span>sin escalas</span> </StyledTd>
                <StyledTd><h2>9:47 PM</h2></StyledTd>
                <hr />
                <StyledTdLast><img src={ Briefcase }  alt="Briefcase" /> <span>1 objeto personal</span><h4>$ 60.000 COP</h4> </StyledTdLast >
                <StyledTdLast><img src={ Briefcase }  alt="Briefcase" /> <span>Equipaje de mano</span><h4>$ 90.000 COP</h4></StyledTdLast>
                <StyledTdLast><img src={ Briefcase }  alt="Briefcase" /> <span> Equiaje 25kg</span><h4>$ 120.000 COP</h4> </StyledTdLast>
              </tr>
            </StyleTable>
        </StyledCardDateArrivals>

        <StyledCardDateArrivals>
            <StyleTable>
              <tr>
                <StyledTd><h2>8:50 PM</h2></StyledTd>
                <StyledTd><span>2 h 30 min</span> <img src={ Scala }  alt="Escala" /> <span>sin escalas</span> </StyledTd>
                <StyledTd><h2>10:47 PM</h2></StyledTd>
                <hr />
                <StyledTdLast><img src={ Briefcase }  alt="Briefcase" /> <span>1 objeto personal</span><h4>$ 60.000 COP</h4> </StyledTdLast >
                <StyledTdLast><img src={ Briefcase }  alt="Briefcase" /> <span>Equipaje de mano</span><h4>$ 90.000 COP</h4></StyledTdLast>
                <StyledTdLast><img src={ Briefcase }  alt="Briefcase" /> <span> Equiaje 25kg</span><h4>$ 120.000 COP</h4> </StyledTdLast>
              </tr>
            </StyleTable>
        </StyledCardDateArrivals>
        </div>
  
    
    );
  };
  
  export default CardDateArrivals;
  