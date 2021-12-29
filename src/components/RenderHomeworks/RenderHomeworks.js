import React, { useRef } from "react";
import { getUserInfoParse } from "../../helpers/localStorage";
import ShowSpecificButton from "../ShowSpecificButton/ShowSpecificButton";
import './RenderHomeworks.css';
import { componentsClassesMapping } from "../../helpers/classesMapping";
import { apiBaseURL } from "../../backendApi/baseBackendUrl";

function GetTipsPrettier({ rawData }) {

    rawData.replace(/(?:\r\n|\r|\n)/g, '<br />');

    return (
        rawData.split('\n').map(function(item, key) {
            return (
                <span key={key}>
                            <p>{ item }</p>
                            <br/>
                    </span>
            )
        })
    )
}

function SetValidHomework({ homework, classObject }) {

    const NoneIndications = 'Nu sunt indicatii la aceasta tema';
    const OptionalHomework = 'Tema este optionala';
    const RequiredHomework = 'Tema este obligatorie';
    const HelperFile = 'Descarca Fisier ajutator';
    const NoneFile = '/MEDIA/None';
    const Informatics = 'Informatica';
    const Mathematics = 'Matematica';
    const Romanian = 'Romana';
    const Blue = '#008cff';
    const Yellow = '#edb200';
    const Red = '#f52516';
    const None = 'None';

    const fileDownloadUrl = `${apiBaseURL}${homework?.file}`;

    return (
        <div className={ componentsClassesMapping.HomeworkClass } >
            <div className={ componentsClassesMapping.HomeworkBorderClass } />
            <h2>{ homework?.title }</h2>
            <div>&nbsp;</div>
            <p>{ homework?.tips === None ? NoneIndications : <GetTipsPrettier rawData={ homework?.tips } /> }</p>
            <div>&nbsp;</div>
            <p>{ homework?.optional === true ? OptionalHomework : RequiredHomework }</p>
            <div>&nbsp;</div>
            <b><a href={ homework?.file !== NoneFile ? fileDownloadUrl : '' } download target='_blank'>
                { homework?.file !== NoneFile ? HelperFile : '' }
            </a></b>
            <div>&nbsp;</div>
            <p><b>Deadline</b>: { homework?.deadline_date } { homework?.deadline_hour }</p>
            <p><b>Postat la </b>: { homework?.posted_on }</p>
            <div>&nbsp;</div>
            <p>{ classObject === Informatics ?  <ShowSpecificButton classObject = { classObject } classObjectColor = { Blue } /> : '' }</p>
            <p>{ classObject === Mathematics ? <ShowSpecificButton classObject = { classObject } classObjectColor = { Yellow } /> : '' }</p>
            <p>{ classObject === Romanian ? <ShowSpecificButton classObject = { classObject } classObjectColor = { Red } /> : '' }</p>
        </div>
    )
}

function RenderHomeworks({ data, userGroup, classObject }) {

    const userInfo = getUserInfoParse();

    const hasUserHomework = useRef(false);
    const hasTeacherHomework = useRef(false);

    const isHomeworkValid = (homework) => {
        return (hasUserHomework.current || hasTeacherHomework.current) && (!homework?.dated);
    };

    return (
        data?.map((homework) => {
            homework?.groups.forEach((group) => {

                hasTeacherHomework.current = (homework?.teacher?.email === userInfo?.user?.email);
                hasUserHomework.current = (group?.name === userGroup?.current);
            })

            return isHomeworkValid(homework) ?
                <SetValidHomework homework = { homework } classObject = { classObject } /> : <></>
        })
    )
}

export default RenderHomeworks;