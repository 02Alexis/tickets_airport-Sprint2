import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
:root{
    --purple: #9e1071;
    --DarkGray: rgb(238, 238, 238);
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
}
`
export default GlobalStyled