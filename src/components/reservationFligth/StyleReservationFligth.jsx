import styled from "styled-components";

export const Contenedor = styled.div`
  position: fixed;
  top: 50px;
  right: 80px;
  width: 25%;
  h1 {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
  @media (max-width: 1200px) {
    position: relative;
    top: -1171px;
    left: -1px;
    width: 29%;
  }

  @media (max-width: 828px) {
    position: relative;
    top: -1246px;
    left: -1px;
    width: 44%;
  }


 @media (max-width: 758px) {
    position: relative;
    top: -1364px;
    left: -1px;
    width: 100%;
  }
@media (max-width: 659px) {
  
    position: relative;
    top: -3139px;
    left: -1px;
    width: 100%;
  }


  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  @media (max-width: 375px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    top: -3176px;


    h3{
      font-size: 0.8rem;
    }
    
  }
`;

export const StyleContainer = styled.div`
  border-radius: 5px;
  background-color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  padding: 5px;
  p {
    color: var(--Gray);
    margin: 10px;
  }
  @media (max-width: 375px) {
    padding: 1px;
  }
  @media (max-width: 659px) {
    padding: 1px;
  }
`;

export const Styletext = styled.div`
  position: relative;
  top: -30px;
  left: 8px;

  @media (max-width: 375px) {
    font-size: 0.9rem;
  }
  @media (max-width: 659px) {
    font-size: 0.9rem;
  }
`;

export const StyleFlex = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
`;
export const StyleExit = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0.2fr);
  grid-column-gap: 1px;
  /* grid-row-gap: 1em; */
  margin: 10px;
  h1 {
    font-size: 2rem;
  }
  img {
    height: 1px;
    width: 30px;
    position: relative;
    bottom: -30px;
    left: 12px;
  }


`;
export const StyleExit2 = styled.div`
  displa  @media (max-width: 375px) {
    h1 {
    font-size: 1rem;
  }
  }y: grid;
  grid-template-columns: repeat(3, 0.2fr);
  grid-column-gap: 1px;
  /* grid-row-gap: 1em; */
  margin: 10px;
  p {
    font-size: 13px;
    position: relative;
    top: -20px;
    left: -5px;
  }
  @media (max-width: 375px) {
    p {
    font-size: 9px;
    position: relative;
    top: -20px;
    left: -5px;
  }
  }
`;
