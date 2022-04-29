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
        min-height: 100vh;
        overflow-y: visible;
        padding: 0 3.5rem;
    }

    .ReactModalPortal{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .content-modal{
        width: 422px;
        height: 527px;
        background-color: #000000;

        padding: 43px;

        position: fixed;
        left: 50%;
        transform: translate(-50%, 0);
        top: 10%;

        border: 1px solid #ffffff1f;
        border-radius: 10px;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        color: #ffffff;
    }

    .overlay-modal{
        background: #0000003f;
        width: 100%;
        height: 100%;

        position: fixed;
        left: 50%;
        transform: translate(-50%, 0);
        top: 0%;
    }
`;

export default GlobalStyles;
