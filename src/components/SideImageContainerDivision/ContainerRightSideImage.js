import React from 'react';
import './SideImageContainerDivision.css'
import {
    NewNormFirstContainer,
    NewNormSecondContainer,
    NewNormTitle,
    NewNormWhyReasonFive,
    NewNormWhyReasonFour,
    NewNormWhyReasonOne,
    NewNormWhyReasonThree,
    NewNormWhyReasonTwo
} from "../../helpers/setHomePageContent";

function ContainerLeftSideImage({ mac }) {

    return (
        <div className="FlexContainer" style={{ overflowX: 'hidden', alignItems: 'center', justifyContent: 'center' }}>

            <div data-aos="fade-right" className="FlexChild Text">
                <h2><b>{ NewNormTitle }</b></h2>
                <div>&nbsp;</div>
                <p>
                    { NewNormFirstContainer }
                </p>
                <br/>
                <p>
                    { NewNormSecondContainer }
                </p>
                <br/>
                <ul style={{ padding: '3%' }}>
                    <li>{ NewNormWhyReasonOne }</li>
                    <li>{ NewNormWhyReasonTwo }</li>
                    <li>{ NewNormWhyReasonThree }</li>
                    <li>{ NewNormWhyReasonFour }</li>
                    <li>{ NewNormWhyReasonFive }</li>
                </ul>
            </div>

            <div data-aos="fade-left" className="FlexChild Image">
                <div className="RightSideImage">
                    <img src={ mac } alt="{ mac }" />
                </div>
            </div>

        </div>
    )
}

export default ContainerLeftSideImage;