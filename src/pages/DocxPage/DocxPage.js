import React from 'react'
import { getUserInfoParse } from "../../utils/localStorage";
import GetPremiumContent from "../../components/GetPremiumContent/GetPremiumContent";
import GetFreeContent from "../../components/GetFreeContent/GetFreeContent";
import './DocxPage.css'

function SetPremiumContent() {
    return (
        <div>
            <div className="BreathingSpaceSmall" />
            <GetPremiumContent />
            <div className="SpaceForPhone"/>
        </div>
    )
}

function SetFreeContent() {
    return (
        <div>
            <div className="BreathingSpaceSmall" />
            <GetFreeContent />
            <div className="SpaceForPhone"/>
        </div>
    )
}

function DocxPage() {

    const userInfo = getUserInfoParse();

    return userInfo ? <SetPremiumContent /> : <SetFreeContent />;
}

export default DocxPage;
