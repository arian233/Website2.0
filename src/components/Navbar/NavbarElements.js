import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Button, Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
    background: #000;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    z-index: 10;
    top: 0;

    @media screen and (max-width: 960px) {
        transition: 0.8 all ease;
    }
`
export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`


export const NavLogo = styled(LinkR)`
    color: $fff;
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
        color: #fff;
        right: 0;
        position: absolute;
        transform: translate(-100%, 60%);
        cursor: pointer;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    cursor: pointer;
    caret-color: red;


    @media screen and (max-width: 768px) {
        display: none;
        
    }
`

export const NavItem = styled.li`
    height: 80px;


`

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    margin: 30px;

    
    &:hover ${NavItem}{
        color: #26a0da;
    }
`