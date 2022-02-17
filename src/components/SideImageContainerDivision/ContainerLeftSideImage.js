import React, {useEffect, useState} from 'react';
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
import { appClassesMapping } from "../../helpers/classesMapping";
import { useCustomFetchHomeContent } from "../../backendApi/apiCalls";

function ContainerLeftSideImage({ iphone }) {

    const [homeContent, setHomeContent] = useState(null);
    const [errorHomeContent, setErrorHomeContent] = useState(null);

    const { serverErrorHomeContent, apiDataHomeContent } = useCustomFetchHomeContent();

    useEffect(() => {
        if (apiDataHomeContent)
            setHomeContent(apiDataHomeContent[0]);
    }, [apiDataHomeContent])

    useEffect(() => {
        if (errorHomeContent)
            setErrorHomeContent(serverErrorHomeContent);
    }, [errorHomeContent])

    return (
        <div className={ appClassesMapping.FlexContainerClass } style={{ overflowX: 'hidden', alignItems: 'center', justifyContent: 'center' }}>

            <div data-aos="fade-right" className="FlexChild Image">
                <div className="LeftSideImage">
                    <video muted autoPlay loop style={{ pointerEvents: 'none' }}>
                        <source src={ iphone } type="video/mp4" />
                    </video>
                </div>
            </div>

            <div data-aos="fade-left" className="FlexChild Text">
                <h2><b>{ homeContent?.section_one_title_content.title }</b></h2>
                <div>&nbsp;</div>
                {
                    homeContent?.section_one_title_content?.content.split('\n').map(function(item, key) {
                        return (
                            <span key={key}>
                                <p style={{ marginBottom: '1rem', }}>{ item }</p>
                        </span>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ContainerLeftSideImage;
