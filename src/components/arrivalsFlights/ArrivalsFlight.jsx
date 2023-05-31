import React, { useContext } from "react";
import { StyleArrivals, StyleBottonArrivals, StyledContainerArrival, StyledDateArrival } from "./StylesArrivalsFlight";
import { StyleTableArrivals, StyledCardDateArrivals, StyledTdArrivals, StyledTdLastArrivals } from "./StyledCardDateArrivals";
import Briefcase from "./../../assets/briefcase.svg";
import Scala from "././../../assets/Scala.png"
import { searchParamsContext } from "../../Routes/AppRouter";
import { useNavigate } from 'react-router-dom';

const ArrivalsFlight = ({ selectedButton2, handleArrivalClick }) => {
  const navigate = useNavigate();

  const {
    filters,
  } = useContext(searchParamsContext);

  return (
    <div>
      <StyledDateArrival>
        <StyledContainerArrival>
        <h1>Vuelo de Regreso</h1>
        <StyleBottonArrivals  onClick={() => navigate(-1)}>Cambiar vuelo</StyleBottonArrivals>
        </StyledContainerArrival>
        <h2>{filters.date}</h2>
        <h4>{filters.selectedCityDon}, Colombia({filters.selectedCityDon.slice(-3)})</h4>
        <p>Selección de horarios y equipaje</p>
      </StyledDateArrival>

      <StyleArrivals>
      <StyledCardDateArrivals>
            <StyleTableArrivals>
              <tr>
                <StyledTdArrivals><h2>7:25 PM</h2></StyledTdArrivals>
                <StyledTdArrivals><span>2 h 30 min</span> <img src={ Scala }  alt="Escala" /> <span>sin escalas</span> </StyledTdArrivals>
                <StyledTdArrivals><h2>9:47 PM</h2></StyledTdArrivals>
                <hr />

                <StyledTdLastArrivals isSelected={selectedButton2 === '60.000'}
            onClick={() => handleArrivalClick('07:25 PM', '09:47 PM', '60.000')}>
                  <img src={ Briefcase }  alt="Briefcase" /> <span>1 objeto personal</span><h4>$ 60.000 COP</h4>
                  </StyledTdLastArrivals >
                <StyledTdLastArrivals isSelected={selectedButton2 === '90.000'}
            onClick={() => handleArrivalClick('07:25 PM', '09:47 PM', '90.000')}>
                  <img src={ Briefcase }  alt="Briefcase" /> <span>Equipaje de mano</span><h4>$ 90.000 COP</h4>
                  </StyledTdLastArrivals>
                <StyledTdLastArrivals isSelected={selectedButton2 === '120.000'}
            onClick={() => handleArrivalClick('07:25 PM', '09:47 PM', '120.000')}>
                  <img src={ Briefcase }  alt="Briefcase" /> <span> Equiaje 25kg</span><h4>$ 120.000 COP</h4>
                  </StyledTdLastArrivals>

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
                <StyledTdLastArrivals isSelected={selectedButton2 === '60.00'}
            onClick={() => handleArrivalClick('08:50 PM', '10:47 PM', '60.00')}>
                  <img src={ Briefcase }  alt="Briefcase" /> <span>1 objeto personal</span><h4>$ 60.000 COP</h4> 
                </StyledTdLastArrivals>
                <StyledTdLastArrivals isSelected={selectedButton2 === '90.00'}
            onClick={() => handleArrivalClick('08:50 PM', '10:47 PM', '90.00')}>
                  <img src={ Briefcase }  alt="Briefcase" /> <span>Equipaje de mano</span><h4>$ 90.000 COP</h4>
                </StyledTdLastArrivals>
                <StyledTdLastArrivals isSelected={selectedButton2 === '120.00'}
            onClick={() => handleArrivalClick('08:50 PM', '10:47 PM', '120.00')}>
                  <img src={ Briefcase }  alt="Briefcase" /> <span> Equiaje 25kg</span><h4>$ 120.000 COP</h4>
                </StyledTdLastArrivals>
              </tr>
            </StyleTableArrivals>
        </StyledCardDateArrivals>
      </StyleArrivals>
    </div>
  );
};

export default ArrivalsFlight;
