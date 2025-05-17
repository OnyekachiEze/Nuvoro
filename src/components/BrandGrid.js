import React from "react";

const images = [
    "band1.png",
    "band2.png",
    "band3.png",
    "band4.png",
    "band5.png",
    "band6.png",
];

export default function BrandGrid() {
    return (
        <div>
            <div className="image-marquee-wrapper">
                <div className="image-marquee">
                    <div className="image-track">
                        {[...images, ...images].map((src, index) => (
                            <div className="image-item" key={index}>
                                <img src={src} alt={`Logo ${index}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

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
                                <li>Home</li>
                                <li>About us</li>
                                <li>Service</li>
                                <li>Academy</li>
                                <li>Career</li>
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
    );
}
