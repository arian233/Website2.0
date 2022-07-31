import styled from "styled-components";

export const FooterContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 10px;
    background-color: grey;
    
`
export const About = styled.div`
    display: flex;
    grid-column: 2/12;
    margin-top: 1rem;
    width: 50%;
`
export const Picture = styled.div`
    padding-right: 5%;
`
export const Description = styled.div`
    margin-top: 5rem;

`
export const Contacts = styled.div`
    grid-column: 9;

`
export const LinkedIn = styled.div`

`
export const GitHub = styled.div`

`
export const MyPic = styled.img`
    height: 250px;
    margin-top: 5%;
    margin-bottom: 5%;

`