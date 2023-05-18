import styled from "styled-components";


export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  width: 950px;
`;

export const StyleBottonDeparture = styled.div`
  border-radius: 15px;
  border: 1px solid #9e1071;
  background-color: transparent;
  padding: 10px 16px;
  margintop: 1rem;
  margin-top: 1rem;
  margin-left: auto;
  font-size: 16px;
  font-weight: bold;
  width: 180px;
  color: #9e1071;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #9e1071;
    cursor: pointer;
    color: white;
    }
`;

export const StyledDate = styled.div`
  margin-bottom: 1rem;

  h1 {
    margin-bottom: 1rem;
    font-weight: bold;
  }
  h2 {
    margin-bottom: 0.5rem;
  }
  h4 {
    color: rgb(150, 150, 150);
    margin-bottom: 2rem;
  }
  p {
    font-weight: bold;
    margin-bottom: 1rem;
  }
`;
export const StyleDeparture = styled.div`
margin-bottom: 3rem;
background-color: transparent
justify-content: space-between;
`;
