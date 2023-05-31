import styled from "styled-components";

export const ContainerCity = styled.div`
  border: 1px solid;
  width: 100%;
  border-color: var(--Gray);
  border-radius: 5px;
  text-align: center;
  cursor: pointer;

  h1 {
    width: 100%;
    font-size: 2rem;
    line-height: 3.7rem;
  }
  p {
    color: var(--Gray);
    font-size: 1.3rem;
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  width: 400px;
  padding: 20px;
  border-radius: 15px;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const CloseIcon = styled.span`
  background: none;
  border: none;
  cursor: pointer;
`;

export const ModalTitle = styled.h2`
  margin: 0;
  font-size: 20px;
`;

export const SearchContainer = styled.div`
  position: relative;
  margin-bottom: 10px;
`;

export const SearchInput = styled.input`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 100%;
  padding-left: 30px;
  margin-bottom: 10px;
`;

export const SearchIcon = styled.span`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
`;

export const CityList = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  justify-self: start;
  flex-direction: column;
`;

export const CityItem = styled.li`
  cursor: pointer;
  margin-bottom: 20px;
`;
export const Error = styled.div`
  color: red;
    font-size: 1.3rem;
    @media screen and (max-width: 375px) {
      font-size: 1rem;
    }
`;