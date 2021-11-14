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
                    Privind printr-un spectru pozitiv, pandemia a oferit oportunitatea de a introduce si rezona cu
                    mediul de educatie online. Noi iti oferim posibilitatea de a te dezvolta intr-o ambianta familiara,
                    prietenoasa, unde fiecare poate invata de la fiecare.
                </p>
                <br/>
                <p>
                    Cu o echipa formata din tineri studenti, scopul nostru este de a transmite mai departe informatia,
                    beneficiind de o atmosfera cat mai relaxata.
                </p>
                <br/>
                <p>
                    Ce inseamna pentru noi, ONLINE?
                </p>
                <ul style={{ padding: '3%' }}>
                    <li>Optimizarea si customizarea modului si metodelor de lucru.</li>
                    <li>Eficientizarea timpului.</li>
                    <li>Transformarea dorintelor/visurilor in actiuni.</li>
                    <li>Placere de a invata.</li>
                </ul>
            </div>
        </div>
    )
}

export default ContainerLeftSideImage;
