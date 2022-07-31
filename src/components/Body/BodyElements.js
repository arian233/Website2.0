import styled from "styled-components";

export const BodyContainer = styled.div`
display: flex;
padding-top: 3%;
justify-content: center;
padding-left: 2rem;
padding-right: 2rem;
margin-bottom: 3%;

`
export const ProjectContent = styled.div`
border-top: 3px solid #26a0da;
width: 100%;
`

export const ProjectText = styled.h1`
margin-top: 1%;
text-align: center;
color: #26a0da;
`
export const Projects = styled.div`
padding-top: 3%;
display: grid;
position: relative;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(5, 1fr);
flex-direction: column;
width: 100%;
align-self: center;
position: relative;

`
export const Proj1 = styled.div`
display: flex;
grid-column: 2;
grid-row: 1;
margin-left: 30%;

`
export const Proj2 = styled.div`
grid-column: 1;
grid-row: 2;
margin-left: 30%;
`
export const Proj3 = styled.div`
grid-column: 2;
grid-row: 3;
margin-left: 30%;

`
export const Proj4 = styled.div`
grid-column: 1;
grid-row: 4;
margin-left: 30%;

`
export const SudoImage = styled.img`
width: 10em;
height: 10em;
margin-right: 10;
`
export const OtherProj = styled.div`
position: relative;
text-align: center;
justify-content: center;
`