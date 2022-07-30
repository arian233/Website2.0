import React from 'react'
import { HeaderContainer, ContentBg, VideoBg, Abouth1, IntroContent, ImageBg, BackgroundInfo, WelcomeNote } from './ContentElements'
import Video from '../../videos/background.mp4'
import Img from '../images/me.jpg'


export const Content = () => {
    return (
        <HeaderContainer>
            {/* <ContentBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </ContentBg> */}
            {/* <IntroContent>
                <ImageBg src={Img} />
            </IntroContent> */}

            <BackgroundInfo>
                <WelcomeNote>Welcome to my portfolio website</WelcomeNote>
                <Abouth1>Hi, My name is Arian Ansari</Abouth1>
                <Abouth1>I am a recent graduate from Simon Frase university currently looking for new opportunities</Abouth1>
            </BackgroundInfo>
        </HeaderContainer>


    )
}
