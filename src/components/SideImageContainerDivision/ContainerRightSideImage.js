import React, {useEffect, useState} from 'react';
import './SideImageContainerDivision.css'
import { appClassesMapping } from "../../helpers/classesMapping";
import {useCustomFetchHomeContent} from "../../backendApi/apiCalls";

function ContainerLeftSideImage({ mac }) {

    const [homeContent, setHomeContent] = useState(null);
    const { serverErrorHomeContent, apiDataHomeContent } = useCustomFetchHomeContent();

    useEffect(() => {
        if (apiDataHomeContent)
            setHomeContent(apiDataHomeContent[0]);
    }, [apiDataHomeContent])

    useEffect(() => {
        if (serverErrorHomeContent) throw new Error("Fetch Error");
    }, [serverErrorHomeContent])

    return (
        <div className={ appClassesMapping.FlexContainerClass } style={{ overflowX: 'hidden', alignItems: 'center', justifyContent: 'center' }}>

            <div data-aos="fade-right" className="FlexChild Text">
                <h2><b>{ homeContent?.section_two_title_content.title }</b></h2>
                <div>&nbsp;</div>
                {
                    homeContent?.section_two_title_content?.content.split('\n').map(function(item, key) {
                        return (
                            <span key={key}>
                                <p style={{ marginBottom: '1rem', }}>{ item }</p>
                        </span>
                        )
                    })
                }
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