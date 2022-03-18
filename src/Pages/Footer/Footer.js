import React from 'react';
import './Footer.css'


const Footer = () => {
    return (
        <div className = "footer mt-5">
            <div className="container footer-container">
                <div className="row text-start">
                    <div className="col-md-4 ml-5">
                        <img className = "w-25" src={'https://i.ibb.co/X38phpn/l-removebg-preview.png'} alt="" />
                        <h4>Get the app</h4>
                        <p>NEfresh App is now available on Google <br /> Play and App store.Get it now.</p>
                        <img src={'https://i.ibb.co/YpM14gV/Google-Play.png'} alt="" /> 
                        <br /> <br />
                        <img src={'https://i.ibb.co/Dkt5sxf/App-Store.png'} alt="" />
                    </div>
                    <div className="col-md-2 ">
                        <h4 className="mb-3">Information</h4>
                        <p>Shipping Policy</p>
                         <p>Terms & condition</p>
                         <p>Privacy Policy</p> 
                         <p> Contact Us</p>
                    </div>
                    <div className="col-md-2">
                        <h4 className="mb-3">User Area</h4>
                        <p>My Account</p>                        
                        <p>My Cart</p>
                        <p>LogIn</p>
                        <p>CheckOut</p>
                    </div>
                    <div className="col-md-4">
                    <h4 className="mb-3">Contact Info</h4>
                        <p>+09564822354</p>
                        <p>Head Office, Bangladesh Sylhet-3100 <br />
                        Dokshmin Surma, road-23/45</p>
                        <p>Support@eshop.com</p>
                    </div>
                </div>
            </div>
            <p className = "gray-text">Copyright @2022 Mohammad Arif</p>
        </div>
    );
};

export default Footer;