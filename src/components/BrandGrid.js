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

          


        </div>
    );
}
