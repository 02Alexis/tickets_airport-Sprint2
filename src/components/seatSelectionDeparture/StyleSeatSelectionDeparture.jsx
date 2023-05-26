import styled from "styled-components";


export const SeatDeparture = styled.div`
margin-bottom: 40px;
`

export const SeatSelect = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
  margin-bottom: 7px;
`;

export const ReferenSeat = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
  margin-bottom: 7px;
`;

export const Subtittle = styled.div`
  margin-bottom: 10px;

`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
`;

export const Column2 = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Aisle = styled.div`
  height: 50px;
  width: 50px;
  color: black;
  background-color: white;
  border-radius: 5px;
  margin-bottom: 10px;
  margin-right: 10px;
  padding: 20px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  height: 50px;
  width: 50px;
  background-color: #b9b9b9;
  border: none;
  border-radius: 5px;
  margin-bottom: 10px;
  margin-right: 10px;
  cursor: pointer;
  &:hover {
    background-color: var(--purple);
    }
`;
