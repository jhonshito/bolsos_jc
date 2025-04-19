import React from 'react'
import TitleAndDescription from '../components/TitleAndDescription'
import Header from '../components/Header'
import WhatsAppButton from '../components/WhatsAppButton'
import ProductCard from '../components/ProductCard'
import Bolso_01 from "../assets/images/bolso_01.jpg"
import Bolso_02 from "../assets/images/bolso_02.jpg";
import Bolso_03 from "../assets/images/bolso_03.jpg";
import Bolso_04 from "../assets/images/bolso_04.jpg";
import Bolso_05 from "../assets/images/bolso_05.jpg";

const Home = () => {
    return (
        <>
            <Header />
            <div className='container pt-5'>
                <TitleAndDescription />
                <div className='my-5 constainerCard'>
                    <ProductCard bolso={Bolso_01} />
                    <ProductCard bolso={Bolso_02} />
                    <ProductCard bolso={Bolso_03} />
                    <ProductCard bolso={Bolso_04} />
                    <ProductCard bolso={Bolso_05} />
                </div>
            </div>
            <WhatsAppButton />
        </>
    )
}

export default Home
