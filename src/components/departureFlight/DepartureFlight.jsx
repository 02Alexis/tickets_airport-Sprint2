import React, { useContext } from "react";
import { StyleBottonDeparture, StyleDeparture, StyledContainer, StyledDate } from "./StylesDeparture";
import { StyleCardDateBaggage, StyleTable, StyledTd, StyledTdLast  } from "./StylesCardDateBaggage";
import Briefcase from "./../../assets/briefcase.svg";
import Scala from "././../../assets/Scala.png"
import { searchParamsContext } from "../../Routes/AppRouter";
import { useNavigate } from 'react-router-dom';

//Recibe dos propiedades: 'selectedContainer' y 'handleContainerClick'.
//Cada contenedor tiene un prop 'selected' que indica si está seleccionado o no, y un evento 'onClick' que llama a la función 'handleContainerClick' con el índice del contenedor como argumento.
const DepartureFlight = ({ handleDepartureClick, selectedButton1 }) => {

  const {
    filters,
  } = useContext(searchParamsContext);

  const navigate = useNavigate();

  return (
    <div>
      
      <StyledDate>
        <StyledContainer>
        <h1>Vuelo de Salida</h1>
        <StyleBottonDeparture onClick={() => navigate(-1)}>Cambiar vuelo</StyleBottonDeparture>
        </StyledContainer>
        <h2>{filters.dateDre}</h2>
        <h4>{filters.selectedCity}, Colombia(MDE)</h4>
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
              <StyledTdLast isSelected={selectedButton1 === '60.00'} onClick={() => handleDepartureClick("05:50", "06:47", "60.00")}>
                <img src={ Briefcase }  alt="Briefcase" /> <span>1 objeto personal</span><h4>$ 60.000 COP</h4>
              </StyledTdLast>
              <StyledTdLast  isSelected={selectedButton1 === '90.00'} onClick={() => handleDepartureClick("05:50", "06:47", "90.00")}>
                <img src={ Briefcase }  alt="Briefcase" /> <span>Equipaje de mano</span><h4>$ 90.000 COP</h4>
              </StyledTdLast>
              <StyledTdLast  isSelected={selectedButton1 === '120.00'} onClick={() => handleDepartureClick("05:50", "06:47", "120.00")}>
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
              <StyledTdLast isSelected={selectedButton1 === '60.000'} onClick={() => handleDepartureClick("08:50", "09:47", "60.000")}>
                <img src={ Briefcase }  alt="Briefcase" /> <span>1 objeto personal</span><h4>$ 60.000 COP</h4>
              </StyledTdLast>
              <StyledTdLast isSelected={selectedButton1 === '90.000'} onClick={() => handleDepartureClick("08:50", "09:47", "90.000")}>
                <img src={ Briefcase }  alt="Briefcase" /> <span>Equipaje de mano</span><h4>$ 90.000 COP</h4>
              </StyledTdLast>
              <StyledTdLast isSelected={selectedButton1 === '120.000'} onClick={() => handleDepartureClick("08:50", "09:47", "120.000")}>
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
