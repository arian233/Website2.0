import React from "react";
import Me from "../images/me.jpg";
import Git from "../../icons/git.png"
import Linked from "../../icons/linkedIn.png"
import { FooterContainer, About, Picture, Description, Contacts, LinkedIn, GitHub, MyPic, ContactMe } from './FooterElements';

export const Footer = () => {
    return (
        <FooterContainer>
            <About>
                <Picture>
                    <MyPic src={Me} />
                </Picture>
                <Description>
                    <p>Thank you for visiting my portfolio website.</p>
                    <p>I am constantly working on new projects so be sure to check back my website in future.</p>
                    <p>Feel free to connect with me though LinkedIn using the link on the right</p>
                </Description>
            </About>
            <Contacts>
                <LinkedIn>
                    <a href="https://www.linkedin.com/in/4arians/">
                        <img src={Linked} width="64px"></img>
                    </a>
                </LinkedIn>
                <GitHub>
                    <a href="https://github.com/arian233">
                        <img src={Git}></img> </a>
                </GitHub>
                <ContactMe>GET IN TOUCH</ContactMe>
            </Contacts>
        </FooterContainer>
    )
}