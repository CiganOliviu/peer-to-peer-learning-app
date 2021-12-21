import React, {useRef} from 'react'
import ContainerLeftSideImage from "../../components/SideImageContainerDivision/ContainerLeftSideImage";
import ContainerRightSideImage from "../../components/SideImageContainerDivision/ContainerRightSideImage";
import ThreeImagesContainer from "../../components/ThreeImagesContainer/ThreeImagesContainer";
import ParallaxContainer from "../../components/ParallaxContainer/ParallaxContainer";
import HeroCard from "../../components/HeroCard/HeroCard";
import iphoneAnimationScroller from './Images/IphoneAnimationScroller.mp4';
import macPresentation from './Images/macPresentation.png';
import focusOnStudent from './Images/focusOnStudent.jpeg';
import guidance from './Images/guidance.jpeg';
import teamWork from './Images/teamWork.jpeg';
import SocialMediaSection from "../../components/SocialMediaSection/SocialMediaSection";
import {
    DocumentationContent,
    DocumentationTitle,
    FeedbackContent,
    FeedbackTitle, TeamWorkContent,
    TeamWorkTitle
} from "../../helpers/setHomePageContent";
import { appClassesMapping, pagesClassesMapping } from "../../helpers/classesMapping";
import './HomePage.css';

function HomePage() {

    const introRef = useRef(null);

    return (
        <div className={ pagesClassesMapping.HomePageClass }>
            <HeroCard introRef = { introRef } />

            <div className={ appClassesMapping.ClipUpWallpaperClass } ref = { introRef }>
                <ContainerLeftSideImage iphone = { iphoneAnimationScroller } />
            </div>

            <div className={ appClassesMapping.GrayWallpaperClipDownClass }>
                <div className={ appClassesMapping.BreathingSpaceSmallClass } />
                <ContainerRightSideImage mac = { macPresentation } />
                <div className={ appClassesMapping.BreathingSpaceSmallClass } />
            </div>
            <div className={ appClassesMapping.BreathingSpaceSmallClass } />
            <ThreeImagesContainer imageLeft = { guidance }
                                  imageCenter = { focusOnStudent }
                                  imageRight = { teamWork }
                                  titleLeft = { DocumentationTitle }
                                  titleCenter = { FeedbackTitle }
                                  titleRight = { TeamWorkTitle }
                                  contentLeft = { DocumentationContent }
                                  contentCenter = { FeedbackContent }
                                  contentRight = { TeamWorkContent }
            />
            <div className={ appClassesMapping.BreathingSpaceSmallClass } />
            <ParallaxContainer />
            <div className={ appClassesMapping.BreathingSpaceSmallClass } />
            <SocialMediaSection isDataAos={ true }/>
            <div className={ appClassesMapping.BreathingSpaceSmallClass } />
            <div className={ appClassesMapping.SpaceForPhoneClass }/>
        </div>
    )
}

export default HomePage;