import React, {useEffect, useState} from 'react'
import './ThreeImagesContainer.css'
import { appClassesMapping } from "../../helpers/classesMapping";
import { useCustomFetchHomeContent } from "../../backendApi/apiCalls";
import {apiBaseURL} from "../../backendApi/baseBackendUrl";

function ThreeImagesContainer({ imageLeft, imageCenter, imageRight,
                                titleLeft, titleCenter, titleRight,
                                contentLeft, contentCenter, contentRight,
                              }) {

    const [homeContentImages, setHomeContentImages] = useState(null);
    const [errorHomeContentImages, setErrorHomeContentImages] = useState(null);

    const { serverErrorHomeContent, apiDataHomeContent } = useCustomFetchHomeContent();

    useEffect(() => {
        if (apiDataHomeContent)
            setHomeContentImages(apiDataHomeContent[0]);
    }, [apiDataHomeContent])

    useEffect(() => {
        if (errorHomeContentImages)
            setErrorHomeContentImages(serverErrorHomeContent);
    }, [errorHomeContentImages])

    return (
        <div className={ appClassesMapping.FlexContainerClass } style={{ overflowX: 'hidden', }}>
            <div className="FlexChild">
                <div data-aos="fade-right" className="GradientImage">
                    <img src={`${apiBaseURL}${homeContentImages?.section_one_with_images_content?.image}`}
                         alt={ homeContentImages?.section_one_with_images_content?.title }/>
                </div>
                <div>&nbsp;</div>
                <div data-aos="fade-right" className="ImageTitle">
                    <h2>{ homeContentImages?.section_one_with_images_content?.title }</h2>
                    <div>&nbsp;</div>
                    <p>{ homeContentImages?.section_one_with_images_content?.content }</p>
                </div>
            </div>

            <div className="FlexChild">
                <div data-aos="fade-in" className="ImageTitle">
                    <div className="GradientImage">
                        <img src={`${apiBaseURL}${homeContentImages?.section_two_with_images_content?.image}`}
                             alt={ homeContentImages?.section_two_with_images_content?.title }/>
                    </div>
                    <div>&nbsp;</div>
                    <div data-aos="fade-in" className="ImageTitle">
                        <h2>{ homeContentImages?.section_two_with_images_content?.title }</h2>
                        <div>&nbsp;</div>
                        <p>{ homeContentImages?.section_two_with_images_content?.content }</p>
                    </div>
                </div>
            </div>

            <div className="FlexChild">
                <div className="ImageTitle">
                    <div data-aos="fade-left" className="GradientImage">
                        <img src={`${apiBaseURL}${homeContentImages?.section_three_with_images_content?.image}`}
                             alt={ homeContentImages?.section_three_with_images_content?.title } />
                    </div>
                    <div>&nbsp;</div>
                    <div data-aos="fade-left" className="ImageTitle">
                        <h2>{ homeContentImages?.section_three_with_images_content?.title }</h2>
                        <div>&nbsp;</div>
                        <p>{ homeContentImages?.section_three_with_images_content?.content }</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThreeImagesContainer;