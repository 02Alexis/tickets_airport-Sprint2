import { createGlobalStyle } from "styled-components";


const GlobalStyled = createGlobalStyle`
:root{
    --purple: #9e1071;
    --Gray: rgb(128, 128, 128);
    --White: #f6f6f6;
    --DarkGry: #f4f4f4;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Epilogue', sans-serif;
}

body{
    padding: 50px 50px 0;

}
`
export default GlobalStyled