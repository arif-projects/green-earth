import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import './Category.css'
import { BsArrowRight } from "react-icons/bs";

const Category = () => {
    const [categorys,setCategorys] = useState([]);

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/arif-projects/fakedata2/main/ecommerce.json')
        .then(res=>res.json())
        .then(data=>setCategorys(data))
    },[])
   
  console.log(categorys);
    return (
        <div className = "category my-5">
           <div className="category-header">
              <h1 className = "text text-success">Category Product</h1>  
              <p className = "gray-text">This product is very nice and well product, so buy it now</p>  
          
           </div> 

           <div className="single-category">
           <Row xs={1} sm={2} md={3} lg = {4} style={{ rowGap: "20px", marginTop: "3rem" }}>
               {
                   categorys.map(category=><Row>
                    
                          <div className="category-image">
                          <img src={category.image} alt="" />
                          </div>
                          <div className="category-name">
                          <h3>{category.name}</h3>
                          <button className = "category-button">View all <BsArrowRight/></button>
                          </div>
                     
                      
                    
                   </Row>)
               }
           </Row>
           </div>
        </div>
    );
};

export default Category;