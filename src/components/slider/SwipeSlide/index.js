import React from 'react';

const SwipeSlide = () =>{
    return(
        <div class="swiper-slide" style="background-image:url(images/slide1.jpg);">
            <div class="slider_trans">
                <div class="slider-caption">
                    <span class="subtitle" data-swiper-parallax="-60%">CREATIVE SOLUTION</span>
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