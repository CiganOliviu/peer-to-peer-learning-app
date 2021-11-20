import React from 'react'
import { getUserInfoParse } from "../../utils/localStorage";
import GetPremiumContent from "../../components/GetPremiumContent/GetPremiumContent";
import GetFreeContent from "../../components/GetFreeContent/GetFreeContent";

import './DocxPage.css'


function DocxPage() {

    const userInfo = getUserInfoParse();

    if (userInfo)
        return (
            <div>
                <div className="BreathingSpaceSmall" />
                <GetPremiumContent />
                <div className="SpaceForPhone"/>
            </div>
        )

    return (
        <div>
            <div className="BreathingSpaceSmall" />
            <GetFreeContent />
            <div className="SpaceForPhone"/>
        </div>
    )

}

export default DocxPage;
