import React from 'react'

function Footer() {
    return (
        <div>
            <div className="footer-wrapper">
                <footer className="footer">
                    <div className="footer-brand">
                        <img
                            src="logo.png"
                            alt="NuVoro logo"
                            className="footer-logo"
                        />
                        <p className="footer-tagline">
                            Revolutionizing Softwares
                            <br />
                            Redefining Standard
                        </p>
                        <div className="footer-socials">
                            <a href="#" aria-label="Facebook" className="facebook">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" aria-label="Instagram" className="instagram">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" aria-label="Twitter" className="twitter">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" aria-label="LinkedIn" className="linkedin">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <div className="footer-column">
                            <h3>Navigation</h3>
                            <ul>
                                <li><a href="./">Home</a></li>
                                <li><a href="/about">About us</a></li>
                                <li><a href="/services">Services</a></li>
                                <li><a href="/academy">Academy</a></li>
                                <li><a href="">Career</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h3>Information</h3>
                            <ul>
                                <li>Privacy</li>
                                <li>Terms and condition</li>
                                <li>Support</li>
                                <li>FAQs</li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h3>Contact</h3>
                            <ul>
                                <li>Nuvoro@info.com</li>
                                <li>+234-123456789</li>
                                <li>
                                    4 Adeola Street <br />
                                    Victoria Island <br />
                                    Lagos
                                </li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </div>

        </div>
    )
}

export default Footer
