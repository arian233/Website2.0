import styled from "styled-components";

export const HeaderContainer = styled.div`

display: flex;
margin: auto;
justify-content: center;
padding-left: 2rem;
padding-right: 2rem;
z-index: 0;
`

export const BackgroundInfo = styled.div`
display: flex;
flex-direction: column;
z-index: 2;
align-items: center;
position: relative;
margin-left: 20%;
margin-right: 20%;
top: 20%;
border: 4mm solid black;

@media screen and (max-width: 768px) {
    top: 2%;;
    margin-left: 10%;
    margin-right: 10%;
}

`
export const WelcomeNote = styled.h1`
    
    color: #26a0da;
    margin-bottom: 20px;
    text-align: center;
    @media screen and (max-width: 768px) {
        font-size: medium;
    }
`


export const Abouth1 = styled.h3`
text-align: center;
margin: 10px;
color: black;
@media screen and (max-width: 768px) {
    font-size: small;
}

`