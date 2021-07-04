
const SwipeContainer = () => {

    return(
        <div class="swiper-container slidertoolbar swiper-init" data-effect="slide" data-parallax="true"
            data-pagination=".swiper-pagination" data-next-button=".swiper-button-next"
            data-prev-button=".swiper-button-prev">
            <div class="swiper-wrapper">

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
                <div class="swiper-slide" style="background-image:url(images/slide2.jpg);">
                    <div class="slider_trans">
                        <div class="slider-caption">
                            <span class="subtitle" data-swiper-parallax="-60%">MULTIPURPOSE
                                DESIGNS</span>
                            <h2 data-swiper-parallax="-100%">WITH BEAUTIFUL</h2>

                            <p data-swiper-parallax="-30%">You can design and create, and build the most
                                wonderful place in
                                the world. But it takes people to make the dream a reality.</p>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide" style="background-image:url(images/slide3.jpg);">
                    <div class="slider_trans">
                        <div class="slider-caption">
                            <span class="subtitle" data-swiper-parallax="-60%">WEB AND NATIVE</span>
                            <h2 data-swiper-parallax="-100%">READY FOR APPS</h2>

                            <p data-swiper-parallax="-30%">You can design and create, and build the most
                                wonderful place in
                                the world. But it takes people to make the dream a reality.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
    );
};