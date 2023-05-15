import styled from "styled-components"

export const Contenedor = styled.div`
position: fixed;
top: 38%;
right: 80px;
width: 25%;
 h1{
  font-size: 1.2rem;
  margin-bottom: 10px;    
 }
`
export const StyleContainer = styled.div`
border-radius: 5px;
`
export const Container = styled.div`
display: grid;
grid-template-columns: 3fr 1fr; /* Crea dos columnas de igual ancho */
padding: 10px;
p{
    margin-bottom: 10px;
}
`
export const Column = styled.div`
justify-self: end;
grid-row-gap: 1em;
`