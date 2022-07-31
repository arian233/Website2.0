import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Button, Link as LinkS } from 'react-scroll'


export const NavbarContainer = styled.div`
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    padding-top: 1em;
    padding-bottom: 1em;
    font-size: 1.2em;
    z-index: 10;
    margin-bottom: 2rem;
    display: flex;
    justify-content: space-between;
    height: 80px;
    padding: 0 2em;
    justify-self: center;
    margin-left: 20%;
    margin-right: 20%;


    @media screen and (max-width: 960px) {
        transition: 0.8 all ease;
    }
`


export const NavLogo = styled(LinkR)`
    color: #fff;
    padding: 10px;
    width: 10px;
    justify-self: flex-start;
    display: flex;

`
export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        margin-top: 20px;
        margin-bottom: 20px;
        color: black;
        right: 0;
        position: absolute;
        transform: translate(-100%, 60%);
        cursor: pointer;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    justify-self: flex-end;
    list-style: none;
    text-align: center;
    cursor: pointer;
    caret-color: red;


    @media screen and (max-width: 768px) {
        display: none;
        
    }
`



export const NavLinks = styled(LinkS)`
    color: #26a0da;
    display: flex;
    margin: 30px;
    font-size: large;
    font-weight: 700;

    
    &:hover {
        transition: 500ms;
        color: black;
        text-decoration: underline;

    }
`