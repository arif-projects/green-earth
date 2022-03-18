import React from 'react';
import { Row } from 'react-bootstrap';
import './Offer.css'

const Offer = () => {
    return (
        <div className = "offer">
             <Row xs={1} sm={1} md={2} lg = {2} style={{ rowGap: "40px", marginTop: "3rem" }}>
                
                <div className="fruit-offer">
                <Row>
                 <Row xs={1} sm={1} md={2} lg = {2} style={{  marginTop: "3rem" }}>
                     <Row className = "text-start">
                         <h4 className = "text text-danger">Fresh Fruits</h4>
                        <h3 className = "mb-3">Healthy <br /> Fruits</h3>
                        <p>Get 20% OFF Selected <br /> Product</p>
                        <button className = "btn btn-success">Order now</button>
                     </Row>

                     <Row>
                         <div className="offer-image">
                             <img src={'https://i.ibb.co/ncCf7mk/f3-1.png'} alt="" />
                         </div>
                     </Row>
                 </Row>
                 </Row>
                </div>

                 <div className="fruit-offer">
                 <Row>
                 <Row xs={1} sm={1} md={2} lg = {2} style={{marginTop: "3rem" }}>
                     <Row className = "text-start">
                         <h4 className = "text text-danger">Fresh Vagetables</h4>
                        <h3 className = "mb-3">Healthy <br /> vagetables</h3>
                        <p>Get 20% OFF Selected <br /> Product</p>
                        <button className = "btn btn-success">Order now</button>
                     </Row>

                     <Row>
                         <div className="offer-image">
                             <img src={'https://i.ibb.co/TtQLDHL/product27-1.png'} alt="" />
                         </div>
                     </Row>
                 </Row>
                 </Row>
                 </div>
             </Row>
        </div>
    );
};

export default Offer;