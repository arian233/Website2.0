import React from "react";
import Sudoku from "../images/sudoku.jpg";
import Img2 from "../images/img2.jpg";
import Img3 from "../images/img3.jpg";
import Img4 from "../images/img4.jpg";
import GitLogo from "../../icons/git.png"
import { BodyContainer, ProjectContent, ProjectText, Projects, Proj1, Proj2, Proj3, Proj4, SudoImage, OtherProj } from './BodyElements'

export const Body = () => {
    return (
        <BodyContainer>
            <ProjectContent>
                <ProjectText>Here are some of the projects I have implemented:</ProjectText>
                <Projects>
                    <Proj1>
                        <a href="https://github.com/arian233/SudokuGame" target="_blank">
                            <SudoImage src={Sudoku}></SudoImage> </a>
                    </Proj1>
                    <Proj2>
                        <SudoImage src={Img2}></SudoImage>
                    </Proj2>
                    <Proj3>
                        <SudoImage src={Img3}></SudoImage>
                    </Proj3>
                    <Proj4>
                        <SudoImage src={Img4}></SudoImage>
                    </Proj4>
                    <OtherProj>
                        Find out about my other projects on my github:
                        <a href="https://github.com/arian233" target="_blank">
                            <img width="2%" src={GitLogo}></img>
                        </a>
                    </OtherProj>
                </Projects>
            </ProjectContent>
        </BodyContainer >
    )
}