import React from "react";
import Me from "../images/me.jpg";
import { FooterContainer, About, Picture, Description, Contacts, LinkedIn, GitHub, MyPic } from './FooterElements';

export const Footer = () => {
    return (
        <FooterContainer>
            <About>
                <Picture>
                    <MyPic src={Me} ></MyPic>
                </Picture>
                <Description>

                </Description>
            </About>
            <Contacts>
                <LinkedIn>

                </LinkedIn>
                <GitHub>

                </GitHub>
            </Contacts>
        </FooterContainer>
    )
}