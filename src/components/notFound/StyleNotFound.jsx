import styled from "styled-components"

export const Page404 = styled.section`
  background: #FCFEFC;
  width: 100%;
  min-height: 80vh;
  display: flex;
  gap: .5rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const StyleText404 = styled.h1`
font-size: 80px;
`
export const StyleError = styled.img`
  width: 40%; 
  background-position: center;
  background-size: cover;
margin-bottom: 50px;

  @media screen and (max-width:678px) {
    width: 60%;
  }
  @media screen and (max-width:400px){
    width: 75%;
  }
`

export const ContantBox404 = styled.h1`
margin-top: -50px;
`
export const StyleText = styled.h3`
font-size: 1.7rem;
  color: rgb(97, 97, 97);
  text-align: center;
  font-weight: 200;

  @media screen and (max-width:678px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width:400px){
    font-size: 1rem;
  }
`
export const StyleText2 = styled.h1`
font-size: 1.6rem;
  color: rgb(97, 97, 97);
  text-align: center;
  font-weight: 200;
`


