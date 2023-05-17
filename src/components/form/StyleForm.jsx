import styled from "styled-components"

export const StyleForm = styled.div`
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   grid-column-gap: 20px;
   grid-row-gap: 1em;
`

export const Container = styled.div`
  border: 1px solid;
  width: 100%;
  border-color: var(--Gray);
  border-radius: 5px;
  text-align: center;
  cursor: pointer;

  h1 {
    width: 100%;
    font-size: 2.3rem;
    line-height: 3.7rem;
  }
  p {
    color: var(--Gray);
    font-size: 1.3rem;
  }
 
`
export const ContainerTwo = styled.div`
  border: 2px solid;
  border-color: var(--Gray);
  border-radius: 5px;
  padding: 0;
  span{
    bottom: 20px;
  margin-left: 40px;
}
  p{
    font-size: 1.3rem;    
  color: #000;
  margin-left: 40px;
  }
 
`
export const StyledContainer = styled.div`
/* position: relative;
top: 10px; */
`

export const StyleButton = styled.button`
width: 100%;
padding: 10px 20px;
background: var(--purple);
border: none;
cursor: pointer;
border-radius: 50px;
color: var(--White);
margin: 10px 0 0 0;
font-size: 1.4rem;
line-height: 1rem;
vertical-align: text-top;  
img{
    vertical-align: middle; 
    width: 38px;
    height: 38px;
    object-fit: cover;
}
`