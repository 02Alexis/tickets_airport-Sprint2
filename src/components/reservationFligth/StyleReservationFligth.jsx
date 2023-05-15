import styled from "styled-components"

export const Contenedor = styled.div`
 position: fixed;
 top: 50px;
 right: 80px;
  width: 25%;
 h1{
    font-size: 1.2rem;
  margin-bottom: 10px;    
 }
`

export const StyleContainer = styled.div`
border-radius: 5px;
p{
color: var(--Gray);
margin: 10px;
}
`
export const Styletext = styled.div`
position: relative;
  top: -30px;
  left: 8px;
`

export const StyleFlex = styled.div`
display: flex;
justify-content: space-between;
margin: 10px;
`
export const StyleExit = styled.div`
display: grid;
grid-template-columns: repeat(3, 0.2fr);
grid-column-gap: 1px;
/* grid-row-gap: 1em; */
margin: 10px;
h1{
  font-size: 2rem;
}
img{
  height: 1px;
  width: 30px;
  position: relative;
  bottom: -30px;
  left: 12px;
}
`
export const StyleExit2 = styled.div`
display: grid;
grid-template-columns: repeat(3, 0.2fr);
grid-column-gap: 1px;
/* grid-row-gap: 1em; */
margin: 10px;
p{
  font-size: 13px;
  position: relative;
  top: -20px;
  left: -5px;
}
`