import React from "react";

const QuoteConsultationBanner = () => {
    return (
        <div className="quote-banner-container">
            <p className="quote-banner-text">
                We blend innovative design with powerful programming and high tech skills to build
                custom digital solutions that drive results
            </p>
            <div className="quote-button-group">
                <button className="quote-quote-button">
                    Request a Quote
                </button>
                <button className="quote-consultation-button">
                    Schedule a Free Consultation
                </button>
            </div>
        </div>
    );
};

export default QuoteConsultationBanner;
