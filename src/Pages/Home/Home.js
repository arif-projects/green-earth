import React from 'react';
import Banner from '../Banner/Banner';
import Banner2 from '../Banner2/Banner2';
import Category from '../Category/Category';
import Footer from '../Footer/Footer';
import Offer from '../Offer/Offer';
import ProductsF from '../ProductsF/ProductsF';
import ProdactsV from '../ProductsV/ProdactsV';
import './Home.css'

const Home = () => {
    return (
        <div className = "home">
            <Banner></Banner>
            <Category></Category>
            <Offer></Offer>
            <ProdactsV></ProdactsV>
            <ProductsF></ProductsF>
            <Banner2></Banner2>
            <Footer></Footer>
        </div>
    );
};

export default Home;