import styled from "styled-components";

export const HeaderContainer = styled.div`

display: flex;
margin: auto;
justify-content: center;
padding-left: 2rem;
padding-right: 2rem;
padding-bottom: 2rem;
z-index: 0;



`

// export const ContentBg = styled.div`
// width: 100%;
// height: 100%;
// `

// export const VideoBg = styled.video`
// z-index: 1;
// width: 100%;
// height: 100%;
// -o-object-fit: cover;
// object-fit: cover;

// @media screen and (max-width: 768px) {
//     width: 100%;
//     height: 100%;
//     -o-object-fit: cover;
//     object-fit: cover;

// }
// `

// export const IntroContent = styled.div`
// display: flex;
// z-index: 2;
// position: absolute;
// color: #26a0da;
// flex-direction: column;
// align-items: initial;
// align-self: initial;
// left: 10%;
// top: 5%;
// `



// export const ImageBg = styled.img`
// height: 450px;
// width: 450px;
// margin-top: 10%;
// border-radius: 50%;
// @media screen and (max-width: 768px) {
//     margin-top: 20%;
//     height: 100px;
//     width: 100px;
// }
// `

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