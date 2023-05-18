import styled from "styled-components";

export const StyledCardDateArrivals = styled.div`
display: flex;
border-radius: 10px;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
padding: 20px;
margin-bottom: 1rem;
width: 950px;
background: white;
`;

export const StyleTableArrivals = styled.div`
width: 100%;
  
tr {
  display: flex;
  gap: 15px;
  align-items: center;

  hr {
    height: 120px;
    width: 1px;
    color: rgb(238, 238, 238);
  }
}
`
export const StyledTdArrivals = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 50%;
padding: 2px;

span {
  margin-bottom: 1rem;
  text-align: center; 
}

img {
  margin-bottom: 1rem;
}
`
export const StyledTdLastArrivals = styled.div`
display: flex;
flex-direction: column;
width: 70%;
height: 100%;
padding: 15px 10px;
text-align: center;
border: 1px solid #ccc;
align-items: center;
border-radius: 8px;

img {
  margin-bottom: 1rem;
  transition: filter 0.3s;
    }

span {
  margin-bottom: 1rem;
}

&:hover {
  background-color: #9e1071;
  cursor: pointer;
  color: white;
  img {
    filter: invert(1);

  }
`
