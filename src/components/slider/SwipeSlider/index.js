import React from 'react';

import slide1 from '../../../../assets/images/slide1.jpg';
import slide2 from '../../../../assets/images/slide2.jpg';
import slide3 from '../../../../assets/images/slide3.jpg';

const SwipeSlider = () => {

    return(
        <div className="swiper-container slidertoolbar swiper-init" data-effect="slide" data-parallax="true"
            data-pagination=".swiper-pagination" data-next-button=".swiper-button-next"
            data-prev-button=".swiper-button-prev">
            <div className="swiper-wrapper">

                <div className="swiper-slide" style={{backgroundImage:'url('+slide1+')'}}>
                    <div className="slider_trans">
                        <div className="slider-caption">
                            <span className="subtitle" data-swiper-parallax="-60%">CREATIVE SOLUTION</span>
                            <h2 data-swiper-parallax="-100%">FOR MOBILE PROJECTS</h2>

                            <p data-swiper-parallax="-30%">Design and create, and build the most
                                wonderful place in the world.
                                But it takes people to make the dream a reality.</p>
                        </div>
                    </div>
                </div>
                <div className="swiper-slide" style={{backgroundImage:'url('+slide2+')'}}>
                    <div className="slider_trans">
                        <div className="slider-caption">
                            <span className="subtitle" data-swiper-parallax="-60%">MULTIPURPOSE
                                DESIGNS</span>
                            <h2 data-swiper-parallax="-100%">WITH BEAUTIFUL</h2>

                            <p data-swiper-parallax="-30%">You can design and create, and build the most
                                wonderful place in
                                the world. But it takes people to make the dream a reality.</p>
                        </div>
                    </div>
                </div>
                <div className="swiper-slide" style={{backgroundImage:'url('+slide3+')'}}>
                    <div className="slider_trans">
                        <div className="slider-caption">
                            <span className="subtitle" data-swiper-parallax="-60%">WEB AND NATIVE</span>
                            <h2 data-swiper-parallax="-100%">READY FOR APPS</h2>

                            <p data-swiper-parallax="-30%">You can design and create, and build the most
                                wonderful place in
                                the world. But it takes people to make the dream a reality.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
        </div>
    );
};

export default SwipeSlider;