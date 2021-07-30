import {React} from 'react';
import {ScrollView,Text} from 'react-native';

const SwipeSlide = () =>{
    return(
        <ScrollView className="swiper-slide" style={{backgroundImage:'url(images/slide1.jpg)'}}>
            <ScrollView className="slider_trans">
                <ScrollView className="slider-caption">
                    <Text className="subtitle" data-swiper-parallax="-60%">CREATIVE SOLUTION</Text>
                    <Text data-swiper-parallax="-100%">FOR MOBILE PROJECTS</Text>

                    <Text data-swiper-parallax="-30%">Design and create, and build the most
                        wonderful place in the world.
                        But it takes people to make the dream a reality.</Text>
                </ScrollView>
            </ScrollView>
        </ScrollView>
    );
};

export default SwipeSlide;