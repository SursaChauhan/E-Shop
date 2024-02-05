import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
   

    <footer style={{ backgroundColor: '#1a1d1e', color: 'white', padding: '25px 0', marginTop: '60px' }}>
    <div style={{ width: '70%', margin: 'auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '80px' }} id="footer_box">
        <div>
            <h4>About Us</h4>
            <p>EShop ensures product durability, sets ecommerce standards, establishes trust with customers</p>
        </div>
        <div>
            <h4>Get in Touch</h4>
            <p>447 Broadway, F1 2,<br /> New York, NY, 10013</p>
            <p>info@convermax.com</p>
            <p>800-451- 0972</p>
        </div>
        <div>
            <h4>Quick Links</h4>
            <p>Customer Service</p>
            <p>Return Policy</p>
            <p>Shipping & Delivery</p>
            <p>Our Story</p>
            <p>About Us</p>
            <p>Blog</p>
        </div>
        <div>
            <h4>Get in Touch</h4>
            <input type="text" placeholder="Email Address" />
            <button>Subscribe</button>
            <div style={{ display: 'flex', gap: '15px', margin: '15px 0', color: '#949494' }}>
                {/* <span><FaFacebookF /></span>
                <span><FaTwitter /></span>
                <span><FaInstagram /></span>
                <span><FaLinkedinIn /></span> */}
            </div>
        </div>
    </div>
    {/* Copyright section */}
    {/* <div id="copyrights" style={{ backgroundColor: '#080808', padding: '3px 0' }}>
        <div style={{ width: '70%', margin: 'auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', justifyContent: 'space-between', alignItems: 'center' }} id="copyrights_box">
            <div>
                <div>
                    <img src="https://i.postimg.cc/VLNrKz2t/l12.png" alt="logoAuto" />
                </div>
            </div>
            <div>
                <p>copyrights 2023 <span id="yAUot"> AUTO PART</span></p>
                <p>All rights reserved.</p>
            </div>
            <div>
                <div>
                    <img src="https://i.postimg.cc/52x1785s/allcards.png" alt="AllCards" />
                </div>
            </div>
        </div>
    </div> */}
</footer>


  );
};

export default Footer;
