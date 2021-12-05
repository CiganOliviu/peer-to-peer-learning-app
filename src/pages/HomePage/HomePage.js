import React, {useRef} from 'react'
import ContainerLeftSideImage from "../../components/SideImageContainerDivision/ContainerLeftSideImage";
import ContainerRightSideImage from "../../components/SideImageContainerDivision/ContainerRightSideImage";
import ThreeImagesContainer from "../../components/ThreeImagesContainer/ThreeImagesContainer";
import ParallaxContainer from "../../components/ParallaxContainer/ParallaxContainer";
import HeroCard from "../../components/HeroCard/HeroCard";
import iphoneAnimationScroller from './Images/IphoneAnimationScroller.mp4'
import macPresentation from './Images/macPresentation.png'
import focusOnStudent from './Images/focusOnStudent.jpeg'
import guidance from './Images/guidance.jpeg'
import teamWork from './Images/teamWork.jpeg'
import SocialMediaSection from "../../components/SocialMediaSection/SocialMediaSection";
import './HomePage.css'

function HomePage() {

    const introRef = useRef(null);

    return (
        <div className="Home">
            <HeroCard introRef = { introRef } />

            <div className="ClipUpWallpaper" ref = { introRef }>
                <ContainerLeftSideImage iphone = { iphoneAnimationScroller } />
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
            <SocialMediaSection isDataAos={ true }/>
            <div className="BreathingSpaceSmall" />
            <div className="SpaceForPhone"/>
        </div>
    )
}

export default HomePage;