import React from 'react';

import './SideImageContainerDivision.css'


function ContainerLeftSideImage({ iphone }) {

    return (
        <div className="FlexContainer" style={{ overflowX: 'hidden', alignItems: 'center', justifyContent: 'center' }}>

            <div data-aos="fade-right" className="FlexChild Image">
                <div className="LeftSideImage">
                    <img src={ iphone } alt="{ iphone }" />
                </div>
            </div>

            <div data-aos="fade-left" className="FlexChild Text">
                <h2><b>Ce inseamna ONLINE?</b></h2>
                <div>&nbsp;</div>
                <p>
                    Privind printr-un spectru pozitiv, pandemia a oferit oportunitatea de a introduce și rezona cu
                    mediul de educație online. Noi îți oferim posibilitatea de a te dezvolta într-o ambianță familiară,
                    prietenoasă, unde fiecare poate învăța de la fiecare.
                </p>
                <br/>
                <p>
                    Cu o echipă formată
                    din tineri studenți, scopul nostru este de a transmite mai departe informația, beneficiind
                    de o atmosferă cât mai relaxată.
                </p>
                <br/>
                <p>
                    Ce înseamnă pentru noi, ONLINE?
                </p>
                <ul style={{ padding: '3%' }}>
                    <li>Optimizarea și customizarea modului și metodelor de lucru.</li>
                    <li>Eficientizarea timpului.</li>
                    <li>Transformarea dorințelor/visurilor în acțiuni.</li>
                    <li>Plăcere de a învăța.</li>
                </ul>
            </div>
        </div>
    )
}

export default ContainerLeftSideImage;