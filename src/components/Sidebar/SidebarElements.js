import styled from "styled-components";
import { FaTimes } from 'react-icons/fa';
import { Link as LinkS } from 'react-scroll'
export const SidebarContainer = styled.aside`
    z-index: 999;
    position: fixed;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    cursor: pointer;

`;

export const SidebarWrapper = styled.div`
    color: #fff;

`

export const SidebarMenu = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: var(--screen-width);
    height: var(--screen-height);



`
export const SidebarLink = styled(LinkS)`
    cursor: pointer;
    display: flex;
    justify-content: space-around;
    position: relative;
    margin: 10px;
    padding: 10px;
    font

    &:hover{
        background-color: #26a0da;
        transition: 300ms ease-in-out;
    }

`