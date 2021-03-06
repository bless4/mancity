import React from 'react';

//app modules
import PromotionAnimation from "./Animation";
import Enroll from "./Enroll";

const Promotion = () => {
    return (
        <div
            className="promotion_wrapper"
            style={{
                background: "#ffffff"
            }}
        >
            <div className="container">
                <PromotionAnimation />
                <Enroll />
            </div>
        </div>
    );
};

export default Promotion;