import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import ProductV from '../ProductV/ProductV';
import './ProductsV.css'

const ProdactsV = () => {
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/arif-projects/fakedata2/main/vagetables%20.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div className = "product mb-5">
            <div className="product-header mb-5">
                <h1 className = "text text-success">Made For You</h1>
                <h4>( vagetables )</h4>
                <p>This is a latest product for the e-commers so, buy now-</p>
            </div>

            <div className="product-container">
            <Row xs={1} sm={2} md={3} lg = {4} style={{ rowGap: "50px", marginTop: "3rem" }}>
                {
                  products.map(product=><ProductV
                  key = {product.id}
                  product = {product}
                  ></ProductV>) 
                }
            </Row>

            </div>
        </div>
    );
};

export default ProdactsV;