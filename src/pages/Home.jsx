import React from 'react'
import TitleAndDescription from '../components/TitleAndDescription'
import Header from '../components/Header'
import WhatsAppButton from '../components/WhatsAppButton'

const Home = () => {
    return (
        <>
            <Header />
            <div className='container pt-5'>
                <TitleAndDescription />
            </div>
            <WhatsAppButton />
        </>
    )
}

export default Home
