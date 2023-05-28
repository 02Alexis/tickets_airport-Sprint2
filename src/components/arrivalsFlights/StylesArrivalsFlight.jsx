import styled from "styled-components";

export const StyledDateArrival = styled.div`
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
  @media (max-width: 1200px) {
    h2 {
      position: relative;
      top: 300px;
    }

    h4 {
      position: relative;
      top: 300px;
    }
    p {
      position: relative;
      top: 300px;
    }
  }

  @media (max-width: 375px) {
    h2 {
      position: relative;
      top: 378px;
    }

    h4 {
      position: relative;
      top: 378px;
    }
    p {
      position: relative;
      top: 378px;
    }
  }
`;

export const StyledContainerArrival = styled.div`
  display: flex;
  align-items: center;
  width: 950px;

  @media (max-width: 1200px) {
    width: 100%;
    max-width: 800px;
    position: relative;
    top: 300px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    top: 357px;
  }
  @media (max-width: 375px) {
    top: 390px;
  }
`;

export const StyleBottonArrivals = styled.button`
  border-radius: 15px;
  border: 1px solid #9e1071;
  background-color: transparent;
  padding: 10px 16px;
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
  @media (max-width: 375px) {
    margin-left: -94px;
    position: relative;
    top: -27px;
  }
`;

export const StyleArrivals = styled.div`
  margin-bottom: 3rem;
  background-color: transparent;
  justify-content: space-between;
`;
