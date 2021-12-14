import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const setItemOneTitle = 'Facebook';
export const setItemOneLink = 'https://www.facebook.com/Peer2PeerLearning';
export const setItemOneIcon = <FontAwesomeIcon id="facebook" key='faFacebook' icon={ faFacebook } />;
export const setItemTwoTitle = 'Instagram';
export const setItemTwoLink = 'https://www.instagram.com/peertopeer_learning/';
export const setItemTwoIcon = <FontAwesomeIcon id="instagram" key='faInstagram' icon={ faInstagram } />;
export const setItemThreeTitle = 'Email';
export const setItemThreeLink = 'mailto:learningptp@gmail.com';
export const setItemThreeIcon = <FontAwesomeIcon id="email" key='faEnvelope' icon={ faEnvelope } />;