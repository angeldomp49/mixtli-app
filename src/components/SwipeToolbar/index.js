
const SwipeToolbar = () => {
    return(
        <div class="swiper-container-toolbar swiper-toolbar swiper-init" data-effect="slide"
            data-slides-per-view="1" data-slides-per-group="1" data-space-between="0"
            data-pagination=".swiper-pagination-toolbar">
            <div class="swiper-pagination-toolbar"></div>
            <div class="swiper-wrapper">
                <div class="swiper-slide toolbar-icon">
                    <a href="about.html" data-view=".view-main"><img src="images/icons/blue/users.png"
                            alt="" title="" /><span>ABOUT</span></a>
                    <a href="features.html" data-view=".view-main"><img
                            src="images/icons/blue/features.png" alt=""
                            title="" /><span>FEATURES</span></a>
                    <a href="#" data-popup=".popup-login" class="open-popup"><img
                            src="images/icons/blue/lock.png" alt="" title="" /><span>LOGIN</span></a>
                    <a href="blog.html" data-view=".view-main"><img src="images/icons/blue/blog.png"
                            alt="" title="" /><span>JOURNAL</span></a>
                    <a href="photos.html" data-view=".view-main"><img src="images/icons/blue/photos.png"
                            alt="" title="" /><span>PHOTOS</span></a>
                    <a href="contact.html" data-view=".view-main"><img
                            src="images/icons/blue/contact.png" alt=""
                            title="" /><span>CONTACT</span></a>
                </div>
                <div class="swiper-slide toolbar-icon">
                    <a href="shop.html" data-view=".view-main"><img src="images/icons/blue/shop.png"
                            alt="" title="" /><span>SHOP</span></a>
                    <a href="music.html" data-view=".view-main"><img src="images/icons/blue/music.png"
                            alt="" title="" /><span>MUSIC</span></a>
                    <a href="form.html" data-view=".view-main"><img src="images/icons/blue/form.png"
                            alt="" title="" /><span>CUSTOM FORM</span></a>
                    <a href="#" data-popup=".popup-social" class="open-popup"><img
                            src="images/icons/blue/twitter.png" alt=""
                            title="" /><span>SOCIAL</span></a>
                    <a href="videos.html" data-view=".view-main"><img src="images/icons/blue/video.png"
                            alt="" title="" /><span>VIDEOS</span></a>
                    <a href="tel:12345678" class="external"><img src="images/icons/blue/phone.png"
                            alt="" title="" /><span>CALL NOW!</span></a>
                </div>

            </div>
        </div>
    );
};