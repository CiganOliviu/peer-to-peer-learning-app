import React, {useRef} from 'react'
import ContainerLeftSideImage from "../../components/SideImageContainerDivision/ContainerLeftSideImage";
import ContainerRightSideImage from "../../components/SideImageContainerDivision/ContainerRightSideImage";
import ThreeImagesContainer from "../../components/ThreeImagesContainer/ThreeImagesContainer";
import ParallaxContainer from "../../components/ParallaxContainer/ParallaxContainer";
import StaffContainer from "../../components/StaffContainer/StaffContainer";

import iphonePresentation from './Images/iphonePresentation.png'
import macPresentation from './Images/macPresentation.png'
import focusOnStudent from './Images/focusOnStudent.jpeg'
import guidance from './Images/guidance.jpeg'
import teamWork from './Images/teamWork.jpeg'
import HeroCard from "../../components/HeroCard/HeroCard";

import './HomePage.css'


function HomePage() {

    const introRef = useRef(null);
    const contactRef = useRef(null);

    return (
        <div className="Home">
            <HeroCard introRef = { introRef } contactRef = { contactRef } />

            <div className="ClipUpWallpaper" ref = { introRef }>
                <div className="BreathingSpaceSmall" />
                <ContainerLeftSideImage iphone = { iphonePresentation } />
                <div className="BreathingSpaceSmall" />
            </div>

            <div className="GrayWallpaperClipDown">
                <div className="BreathingSpaceSmall" />
                <ContainerRightSideImage mac = { macPresentation } />
                <div className="BreathingSpaceSmall" />
            </div>
            <div className="BreathingSpaceSmall" />
            <ThreeImagesContainer imageLeft = { guidance }
                                  imageCenter = { focusOnStudent }
                                  imageRight = { teamWork }
                                  titleLeft = { "Documentatie cu materia necesara" }
                                  titleCenter = { "Feedback in functie de implicare si evolutie" }
                                  titleRight = { "Team-Work" }
                                  contentLeft = { "Punem la dispozitie o documentatie vasta, cu toata materia necesara" }
                                  contentCenter = { "Elevul este evaluat constant in functie de activitate" }
                                  contentRight = { "In echipa, fiecare invata de la fiecare" }
            />
            <div className="BreathingSpaceSmall" />
            <ParallaxContainer />
            <div className="BreathingSpaceSmall" />
            <div className="GrayWallpaper" ref = { contactRef }>
                <StaffContainer />
            </div>

            <div className="SpaceForPhone"/>
        </div>
    )
}

export default HomePage;