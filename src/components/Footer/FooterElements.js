import styled from "styled-components";

export const FooterContainer = styled.div`
    display: flex;
    background-color: grey;
    
`
export const About = styled.div`
    display: grid;
    grid-template-columns: 30% 70%;
    margin-left: 8%;
`
export const Picture = styled.div`
    padding-right: 5%;
`
export const Description = styled.div`
    margin-top: 5rem;

`
export const Contacts = styled.div`
    margin-left: 10%;
    margin-top: 3%;
    display: flex;
    flex-direction: column;

`
export const LinkedIn = styled.div`
    margin: 10%;
    align-self: center;

`
export const GitHub = styled.div`
    margin: 10%;
    align-self: center;

`
export const MyPic = styled.img`
    height: 250px;
    margin-top: 5%;
    margin-bottom: 5%;
    border-radius: 50%;

`

export const ContactMe = styled.button`
    margin: 10%;

    background-color: grey;
    color: #26a0da;
    border: none;
    font-weight: 900;
    font: bold;
`