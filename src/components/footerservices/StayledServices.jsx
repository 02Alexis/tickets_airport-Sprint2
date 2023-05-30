import styled from "styled-components";

export const StyledServices = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  opacity: 0;
  animation-name: fadeIn;
  animation-duration: 0.9s;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  h3 {
    margin-bottom: 1rem;
  }
  @media (max-width: 375px) {
    top: 35px;
    position: relative;
    flex-wrap: wrap;
    justify-content: center;
    width: 175%;
  }
`;
