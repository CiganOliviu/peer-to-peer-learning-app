import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

import './ScrollTopButton.css'


function ScrollTopButton() {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {

        const scrolled = document.documentElement.scrollTop;

        if (scrolled > 300) setVisible(true);

        else if (scrolled <= 300) setVisible(false);
    };

    const scrollToTop = () =>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <div className="ScrollButton" style={{display: visible ? 'inline' : 'none'}}>
            <FontAwesomeIcon onClick={scrollToTop}
                             key='ChevronUp' icon={ faChevronUp } />
        </div>
    );
}

export default ScrollTopButton;