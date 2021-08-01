import React from 'react';
import {ScrollView,Button} from 'react-native';
import menuWhite from './../../../../assets/images/icons/white/menu.png';
import userWhite from './../../../../assets/images/icons/white/user.png';
import cartWhite from './../../../../assets/images/icons/white/cart.png';

const NavPages = ({navigation}) =>{
    return(
        <ScrollView className="navbarpages">
            <ScrollView className="navbar_left">
                <ScrollView className="logo_text">
                    <Button onPress={()=>{navigation.navigate('home')}} title='BLIX'/>
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
                    <Image source={userWhite}
                        alt="" title="" />
                </Button>
            </ScrollView>
            <ScrollView className="navbar_right">
                <Button onPress={()=>{navigation.navigate('home')}} data-view=".view-main">
                    <Image source={cartWhite} alt=""
                        title="" />
                    <span>3</span>
                </Button>
            </ScrollView>
        </ScrollView>
    );
};

export default NavPages;