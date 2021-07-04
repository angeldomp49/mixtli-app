import {React} from 'react';

const NavPages = () =>{
    return(
        <div className="navbarpages">
            <div className="navbar_left">
                <div className="logo_text"><a href="index.html">BLIX</a></div>
            </div>
            <div className="navbar_right navbar_right_menu">
                <a href="#" data-panel="left" className="open-panel"><img src="images/icons/white/menu.png"
                        alt="" title="" /></a>
            </div>
            <div className="navbar_right">
                <a href="#" data-panel="right" className="open-panel"><img src="images/icons/white/user.png"
                        alt="" title="" /></a>
            </div>
            <div className="navbar_right">
                <a href="cart.html" data-view=".view-main"><img src="images/icons/white/cart.png" alt=""
                        title="" /><span>3</span></a>
            </div>
        </div>
    );
};

export default NavPages;