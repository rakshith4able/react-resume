import { createGlobalStyle } from "styled-components";

const GlobalStyle=createGlobalStyle`
    *{
        padding:0;
        margin:0;
    }

    html{
        font-size:62.5%;
    }

    body{
        box-sizing:border-box;
        font-family: 'Montserrat', sans-serif;
    }
`

export default GlobalStyle;