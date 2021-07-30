import React from 'react';
import {ScrollView,Button} from 'react-native';
import menuWhite from './../../../../assets/images/icons/white/menu.png';

const NavPages = () =>{
    return(
        <ScrollView className="navbarpages">
            <ScrollView className="navbar_left">
                <ScrollView className="logo_text">
                    <Button href="index.html">BLIX</Button>
                </ScrollView>
            </ScrollView>
            <ScrollView className="navbar_right navbar_right_menu">
                <Button href="#" data-panel="left" className="open-panel">
                    <Image source={menuWhite}
                        alt="" title="" />
                </Button>
            </ScrollView>
            <ScrollView className="navbar_right">
                <Button href="#" data-panel="right" className="open-panel">
                    <Image source="images/icons/white/user.png"
                        alt="" title="" />
                </Button>
            </ScrollView>
            <ScrollView className="navbar_right">
                <Button href="cart.html" data-view=".view-main">
                    <Image source="images/icons/white/cart.png" alt=""
                        title="" />
                    <span>3</span>
                </Button>
            </ScrollView>
        </ScrollView>
    );
};

export default NavPages;