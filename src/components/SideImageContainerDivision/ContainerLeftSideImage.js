import React from 'react';
import './SideImageContainerDivision.css'
import {
    OnlineFirstContainer,
    OnlineSecondContainer,
    OnlineThirdContainer,
    OnlineTitle,
    OnlineWhyReasonFour,
    OnlineWhyReasonOne,
    OnlineWhyReasonThree,
    OnlineWhyReasonTwo
} from "../../helpers/setHomePageContent";

function ContainerLeftSideImage({ iphone }) {

    return (
        <div className="FlexContainer" style={{ overflowX: 'hidden', alignItems: 'center', justifyContent: 'center' }}>

            <div data-aos="fade-right" className="FlexChild Image">
                <div className="LeftSideImage">
                    <video muted autoPlay loop>
                        <source src={ iphone } type="video/mp4" />
                    </video>
                </div>
            </div>

            <div data-aos="fade-left" className="FlexChild Text">
                <h2><b>{ OnlineTitle }</b></h2>
                <div>&nbsp;</div>
                <p>
                    { OnlineFirstContainer }
                </p>
                <br/>
                <p>
                    { OnlineSecondContainer }
                </p>
                <br/>
                <p>
                    { OnlineThirdContainer }
                </p>
                <ul style={{ padding: '3%' }}>
                    <li>{ OnlineWhyReasonOne }</li>
                    <li>{ OnlineWhyReasonTwo }</li>
                    <li>{ OnlineWhyReasonThree }</li>
                    <li>{ OnlineWhyReasonFour }</li>
                </ul>
            </div>
        </div>
    )
}

export default ContainerLeftSideImage;
