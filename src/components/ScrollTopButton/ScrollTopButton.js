import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import './ScrollTopButton.css'
import { componentsClassesMapping } from "../../helpers/classesMapping";

function ScrollTopButton() {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {

        const scrolled = document.documentElement.scrollTop;

        setVisible(scrolled > 300);
    };

    const scrollToTop = () =>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <div className={ componentsClassesMapping.ScrollButtonClass } style={{display: visible ? 'inline' : 'none'}}>
            <FontAwesomeIcon onClick={scrollToTop}
                             key='ChevronUp' icon={ faChevronUp } />
        </div>
    );
}

export default ScrollTopButton;