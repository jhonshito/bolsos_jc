import React from 'react';
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
    const phoneNumber = '573145295036';

    const handleClick = () => {
        const message = 'Hola, quiero más información sobre sus bolsos';
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`, '_blank');
    };
    

    return (
        <button onClick={handleClick} className='whatsappButton'>
            <FaWhatsapp className='fs-2' />
        </button>
    );
};

export default WhatsAppButton;
