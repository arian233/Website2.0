import React from "react";
import Me from "../images/me.jpg";
import Git from "../../icons/git.png"
import { FooterContainer, About, Picture, Description, Contacts, LinkedIn, GitHub, MyPic } from './FooterElements';

export const Footer = () => {
    return (
        <FooterContainer>
            <About>
                <Picture>
                    <MyPic src={Me} />
                </Picture>
                <Description>
                    <p>Thank you for visiting my portfolio website</p>
                    <p>I keep picking up new projects so be sure to check back my website in future</p>
                    <p>feel free to connect with me though LinkedIn using the link on the right</p>
                </Description>
            </About>
            <Contacts>
                <LinkedIn>

                </LinkedIn>
                <GitHub>
                    <a href="https://github.com/arian233">
                        <img src={Git}></img> Github
                    </a>
                </GitHub>
            </Contacts>
        </FooterContainer>
    )
}