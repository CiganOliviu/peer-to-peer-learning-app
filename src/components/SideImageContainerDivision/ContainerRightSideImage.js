import React from 'react';
import './SideImageContainerDivision.css'

function ContainerLeftSideImage({ mac }) {

    return (
        <div className="FlexContainer" style={{ overflowX: 'hidden', alignItems: 'center', justifyContent: 'center' }}>

            <div data-aos="fade-right" className="FlexChild Text">
                <h2><b>Online learning is the new norm</b></h2>
                <div>&nbsp;</div>
                <p>
                    Toti elevii din Romania au avut nevoie sa se obisnuiasca cu mediul online din cauza pandemiei.
                    Datorita acestui lucru, putem crea un mediu cat mai familiar si prietenos, astfel fiecare poate sa invete de
                    la fiecare.
                </p>
                <br/>
                <p>
                    Fiind la curent cu materia si cu subiectele din anii trecuti, fiecare membru al echipei ofera:
                </p>
                <br/>
                <ul style={{ padding: '3%' }}>
                    <li>Documentatie cu materia necesara.</li>
                    <li>Materiale de lucru.</li>
                    <li>Testari periodice.</li>
                    <li>Feedback in functie de implicare.</li>
                    <li>Suport in afara orelor.</li>
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