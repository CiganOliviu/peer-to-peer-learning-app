import React from 'react'
import './ThreeImagesContainer.css'

function ThreeImagesContainer({ imageLeft, imageCenter, imageRight,
                                titleLeft, titleCenter, titleRight,
                                contentLeft, contentCenter, contentRight,
                              }) {

    return (
        <div className="FlexContainer" style={{ overflowX: 'hidden', }}>
            <div className="FlexChild">
                <div data-aos="fade-right" className="GradientImage">
                    <img src={ imageLeft } alt="{ imageLeft }"/>
                </div>
                <div>&nbsp;</div>
                <div data-aos="fade-right" className="ImageTitle">
                    <h2>{ titleLeft }</h2>
                    <div>&nbsp;</div>
                    <p>{ contentLeft }</p>
                </div>
            </div>

            <div className="FlexChild">
                <div data-aos="fade-in" className="ImageTitle">
                    <div className="GradientImage">
                        <img src={ imageCenter } alt="{ imageCenter }"/>
                    </div>
                    <div>&nbsp;</div>
                    <div data-aos="fade-in" className="ImageTitle">
                        <h2>{ titleCenter }</h2>
                        <div>&nbsp;</div>
                        <p>{ contentCenter }</p>
                    </div>
                </div>
            </div>

            <div className="FlexChild">
                <div className="ImageTitle">
                    <div data-aos="fade-left" className="GradientImage">
                        <img src={ imageRight } alt="{ imageRight }"/>
                    </div>
                    <div>&nbsp;</div>
                    <div data-aos="fade-left" className="ImageTitle">
                        <h2>{ titleRight }</h2>
                        <div>&nbsp;</div>
                        <p>{ contentRight }</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThreeImagesContainer;