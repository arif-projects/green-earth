import React from 'react';
import { Row } from 'react-bootstrap';
import { HiStar } from "react-icons/hi";
import { FaDollarSign ,FaCartArrowDown} from "react-icons/fa";

const ProductF = (props) => {
    const {name,price,image} = props.product;
    return (
        <div className = "shadow-sm p-3 mb-5 bg-body rounded">
<Row className = "product border">
            <div className="category-image">
               <img src={image} alt="" />
            </div>
            <div className="product-description">
               <h4>{name}</h4>
               <p className = "rating"><HiStar/><HiStar/><HiStar/><HiStar/></p>
               <h4><FaDollarSign/>{price}</h4>
               <button className = "cart-button"><FaCartArrowDown/>Add To Cart</button>
            </div>
        </Row>
        </div>
        
    );
};

export default ProductF;