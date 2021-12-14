import React, { useEffect, useState } from 'react';
import { asyncHandleContact, useCustomFetchStaff } from "../../backendApi/apiCalls";
import RenderStaff from "../../components/StaffContainer/RenderStaff/RenderStaff";
import { createBrowserHistory } from "history";
import SocialMediaSection from "../../components/SocialMediaSection/SocialMediaSection";
import { appClassesMapping, pagesClassesMapping } from "../../helpers/classesMapping";
import './ContactPage.css';

function ContactPage() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [clientType, setClientType] = useState("");
    const [subject, setSubject] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const [staff, setStaff] = useState([]);
    const { serverErrorStaff, apiDataStaff } = useCustomFetchStaff();
    const url = 'staff-detail/';

    let history = createBrowserHistory({ forceRefresh:true })

    useEffect(() => {

        if (apiDataStaff) setStaff(apiDataStaff);
    }, [apiDataStaff])

    useEffect(() => {

        if (serverErrorStaff) throw new Error("Fetch Error")

    }, [serverErrorStaff])

    const isPersonToContact = (data) => {

        return data?.position?.name === 'CEO' || data?.position?.name === 'Chief Business Development Officer'
    };

    const isDataInvalid = () => {

        return firstName === '' || lastName === '' || email === '' ||
            clientType === '' || subject === '' || phoneNumber === '' || message === '';
    };

    const isDataValid = () => {

        return firstName !== '' && lastName !== '' && email !== '' &&
            clientType !== '' && subject !== '' && phoneNumber !== ''
            && message !== ''
    };

    const handleContact = () => {

        if (isDataInvalid()) setErrorMessage("Unable to process empty fields!");

        if (isDataValid()) {

            asyncHandleContact(firstName, lastName, email, clientType,
                                subject, phoneNumber, message).then(() => {

                setErrorMessage("");
                history.push('/');
                history.go('/')
            });
        }
    };

    return (
        <div className={ pagesClassesMapping.ContactPageClass }>
            <div className={ appClassesMapping.SpaceForPhoneClass} />
            <div className={ appClassesMapping.BreathingSpaceMediumClass } />
            <h1>We are One Click Away</h1>
            <div className={ appClassesMapping.BreathingSpaceSmallClass } />
            <div className={ appClassesMapping.FlexContainerClass }>
            {
                staff.map((data) => {
                    return isPersonToContact(data) ? <RenderStaff data={ data } url={ url } /> : <></>;
                })
            }
            </div>
            <div className={ appClassesMapping.FormClass }>
                <div className={ appClassesMapping.SpaceForPhoneClass } />
                <h1>Contact us via this form!</h1>
                <div className={ appClassesMapping.BreathingSpaceMediumClass } />
                <input type="text" placeholder="Nume" onChange = { event => setFirstName(event?.target?.value) } />
                <div className={ appClassesMapping.PaddingClass } />
                <input type="text" placeholder="Prenume" onChange = { event => setLastName(event?.target?.value) } />
                <div className={ appClassesMapping.PaddingClass } />
                <input type="text" placeholder="Email" onChange = { event => setEmail(event?.target?.value) } />
                <div className={ appClassesMapping.PaddingClass } />
                <input type="text" placeholder="Subiect" onChange = { event => setSubject(event?.target?.value) } />
                <div className={ appClassesMapping.PaddingClass } />
                <input type="text" placeholder="Numar de telefon" onChange = { event => setPhoneNumber(event?.target?.value) } />
                <div className={ appClassesMapping.PaddingClass } />
                <select onChange = {event => setClientType(event?.target?.value)} >
                    <option value="">Esti profesor sau elev?</option>
                    <option value="Profesor">Profesor</option>
                    <option value="Elev">Elev</option>
                </select>
                <div className={ appClassesMapping.PaddingClass } />
                <textarea rows="5" placeholder="Mesaj" onChange = { event => setMessage(event?.target?.value) }/>

                <div className={ appClassesMapping.PaddingClass }/>
                { errorMessage && <div className="Error"><b>{ errorMessage }</b></div> }

                <div className={ appClassesMapping.PaddingClass } />
                <button className={ appClassesMapping.ActiveClass } onClick={ handleContact } >Send your message</button>
            </div>
            <div className={ appClassesMapping.PaddingClass } />
            <div className={ appClassesMapping.GrayWallpaperClipDownClass }>
                <SocialMediaSection isDataAos={ false }/>
            </div>
            <div className={ appClassesMapping.BreathingSpaceSmallClass } />
            <div className={ appClassesMapping.SpaceForPhoneClass } />
        </div>
    )
}

export default ContactPage;