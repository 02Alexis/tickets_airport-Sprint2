import React from "react";
import { StyleBottonDeparture, StyleDeparture, StyledContainer, StyledDate } from "./StylesDeparture";
import { StyleCardDateBaggage, StyleTable, StyledTd, StyledTdLast  } from "./StylesCardDateBaggage";
import Briefcase from "./../../assets/briefcase.svg";
import Scala from "././../../assets/Scala.png"

//Recibe dos propiedades: 'selectedContainer' y 'handleContainerClick'.
//Cada contenedor tiene un prop 'selected' que indica si está seleccionado o no, y un evento 'onClick' que llama a la función 'handleContainerClick' con el índice del contenedor como argumento.
const DepartureFlight = ({ selectedContainer, handleContainerClick }) => {
  return (
    <div>
      <StyledDate>
        <StyledContainer>
        <h1>Vuelo de Salida</h1>
        <StyleBottonDeparture>Cambiar vuelo</StyleBottonDeparture>
        </StyledContainer>
        <h2>Jueves 20 jul 2023</h2>
        <h4>Medellín, Colombia(MDE)</h4>
        <p>Selección de horarios y equipaje</p>
      </StyledDate>
      
      <StyleDeparture>
      <StyleCardDateBaggage>
          <StyleTable>
            <tr>
              <StyledTd><h2>5:50 PM</h2></StyledTd>
              <StyledTd><span>2 h 30 min</span> <img src={ Scala }  alt="Escala" /> <span>sin escalas</span> </StyledTd>
              <StyledTd><h2>6:47 PM</h2></StyledTd>
              <hr />
              <StyledTdLast selected={selectedContainer === 0} onClick={() => handleContainerClick(0)}>
                <img src={ Briefcase }  alt="Briefcase" /> <span>1 objeto personal</span><h4>$ 60.000 COP</h4>
              </StyledTdLast>
              <StyledTdLast selected={selectedContainer === 1} onClick={() => handleContainerClick(1)}>
                <img src={ Briefcase }  alt="Briefcase" /> <span>Equipaje de mano</span><h4>$ 90.000 COP</h4>
              </StyledTdLast>
              <StyledTdLast selected={selectedContainer === 2} onClick={() => handleContainerClick(2)}>
                <img src={ Briefcase }  alt="Briefcase" /> <span> Equiaje 25kg</span><h4>$ 120.000 COP</h4>
              </StyledTdLast>
            </tr>
          </StyleTable>
      </StyleCardDateBaggage>

      <StyleCardDateBaggage>
          <StyleTable>
            <tr>
              <StyledTd><h2>8:50 AM</h2></StyledTd>
              <StyledTd><span>1 h 57 min</span> <img src={ Scala }  alt="Escala" /> <span>sin escalas</span> </StyledTd>
              <StyledTd><h2>9:47 PM</h2></StyledTd>
              <hr />
              <StyledTdLast selected={selectedContainer === 3} onClick={() => handleContainerClick(3)}>
                <img src={ Briefcase }  alt="Briefcase" /> <span>1 objeto personal</span><h4>$ 60.000 COP</h4>
              </StyledTdLast>
              <StyledTdLast selected={selectedContainer === 4} onClick={() => handleContainerClick(4)}>
                <img src={ Briefcase }  alt="Briefcase" /> <span>Equipaje de mano</span><h4>$ 90.000 COP</h4>
              </StyledTdLast>
              <StyledTdLast selected={selectedContainer === 5} onClick={() => handleContainerClick(5)}>
                <img src={ Briefcase }  alt="Briefcase" /> <span> Equiaje 25kg</span><h4>$ 120.000 COP</h4>
              </StyledTdLast>
            </tr>
          </StyleTable>
      </StyleCardDateBaggage>
      </StyleDeparture>
    </div>
  );
};

export default DepartureFlight;
