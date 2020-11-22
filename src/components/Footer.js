import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footerContainer">
            <div className="footerRow">
                <div className="footerColDouble">
                    <h4 style={{marginBottom:'4px'}}>Download our app</h4>
                    <img src="iosStore.png" alt=""/>
                    <img src="playStore.png" alt=""/>
                    <h4 style={{marginBottom:'4px'}}>Connect with us</h4>
                    <img src="facebook.svg" alt="" style={{height: 'auto', width: '20px'}} />
                    <span>Like us on Facebook</span>
                </div>
                <div className="footerCol">
                    <h4 style={{marginBottom:'12px'}}>Learn more</h4>
                    <div className="footerLink">
                        <a href="#">How to sell fast</a>
                        <a href="#">Doorstep Delivery on</a>
                        <a href="#">Bikryo.com</a>
                        <a href="#">Membership</a>
                        <a href="#">Banner advertising</a>
                        <a href="#">Promote your ad</a>
                    </div>
                </div>
                <div className="footerCol">
                    <h4 style={{marginBottom:'12px'}}>Help & Support</h4>
                    <div className="footerLink">
                        <a href="#">Faq</a>
                        <a href="#">Stay safe on</a>
                        <a href="#">Bikryo.com</a>
                        <a href="#">Contact us</a>
                    </div>
                </div>
                <div className="footerCol">
                    <h4 style={{marginBottom:'12px'}}>Social</h4>
                    <div className="footerLink">
                        <a href="#">Blog</a>
                        <a href="#">Facebook</a>
                        <a href="#">Twitter</a>
                        <a href="#">Youtube</a>
                    </div>
                </div>
                <div className="footerCol">
                    <h4 style={{marginBottom:'12px'}}>About us</h4>
                    <div className="footerLink">
                        <a href="#">About us</a>
                        <a href="#">Careers</a>
                        <a href="#">Terms & Conditions</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Sitemap</a>
                    </div>
                </div>
            </div>

            <div className="footerRowBottom">
                <small>Copyright © https://github.com/raihanulhaque643</small>
                <span>Bikryo.com</span>
            </div>
        </div>
    )
}

export default Footer;