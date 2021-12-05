import React, {useEffect, useState} from 'react'
import { asyncHandleContact, useCustomFetchStaff } from "../../utils/apiCalls";
import RenderStaff from "../../components/StaffContainer/RenderStaff/RenderStaff";
import { createBrowserHistory } from "history";
import SocialMediaSection from "../../components/SocialMediaSection/SocialMediaSection";
import './ContactPage.css'

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
        <div className="ContactPage">
            <div className="SpaceForPhone" />
            <div className="BreathingSpaceMedium" />
            <h1>We are One Click Away</h1>
            <div className="BreathingSpaceSmall" />
            <div className="FlexContainer">
            {
                staff.map((data) => {
                    return isPersonToContact(data) ? <RenderStaff data={ data } url={ url } /> : <></>;
                })
            }
            </div>
            <div className="Form">
                <div className="SpaceForPhone" />
                <h1>Contact us via this form!</h1>
                <div className="BreathingSpaceMedium" />
                <input type="text" placeholder="Nume" onChange = { event => setFirstName(event?.target?.value) } />
                <div className="Padding" />
                <input type="text" placeholder="Prenume" onChange = { event => setLastName(event?.target?.value) } />
                <div className="Padding" />
                <input type="text" placeholder="Email" onChange = { event => setEmail(event?.target?.value) } />
                <div className="Padding" />
                <input type="text" placeholder="Subiect" onChange = { event => setSubject(event?.target?.value) } />
                <div className="Padding" />
                <input type="text" placeholder="Numar de telefon" onChange = { event => setPhoneNumber(event?.target?.value) } />
                <div className="Padding" />
                <select onChange = {event => setClientType(event?.target?.value)} >
                    <option value="">Esti profesor sau elev?</option>
                    <option value="Profesor">Profesor</option>
                    <option value="Elev">Elev</option>
                </select>
                <div className="Padding" />
                <textarea rows="5" placeholder="Mesaj" onChange = { event => setMessage(event?.target?.value) }/>

                <div className="Padding"/>
                { errorMessage && <div className="Error"><b>{ errorMessage }</b></div> }

                <div className="Padding"/>
                <button className="Active" onClick={handleContact} >Send your message</button>
            </div>
            <div className="Padding"/>
            <div className="GrayWallpaperClipDown">
                <SocialMediaSection isDataAos={ false }/>
            </div>
            <div className="BreathingSpaceSmall" />
            <div className="SpaceForPhone" />
        </div>
    )
}

export default ContactPage;