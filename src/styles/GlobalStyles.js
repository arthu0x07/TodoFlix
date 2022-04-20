import { createGlobalStyle } from "styled-components/macro";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;

        font-family: Arial, sans-serif;

        a{
            text-decoration: none;
            color: whitesmoke;
        }

        ul{
            list-style: none;
        }

        li{
            list-style: none;
        }
    }

    html{
        font-size: 100%;
    }

    body{
        background-color: #000000;
        height: 100vh;
        max-height: 100vh;

        padding: 0 3.5rem;
    }
`;

export default GlobalStyles;
