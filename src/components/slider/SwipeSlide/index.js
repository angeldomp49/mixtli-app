import {React} from 'react';

const SwipeSlide = () =>{
    return(
        <div className="swiper-slide" style={{backgroundImage:'url(images/slide1.jpg)'}}>
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
    );
};

export default SwipeSlide;