
import React from 'react';

export const Social = () => {
    return (
        <div className="popup popup-social">
            <div className="content-block">
                <h4>Social Share</h4>
                <p>Share icons solution that allows you share and increase your social popularity.</p>
                <ul className="social_share">
                    <li><a href="http://twitter.com/" className="external"><img src="images/icons/black/twitter.png" alt=""
                        title="" /><span>TWITTER</span></a></li>
                    <li><a href="http://www.facebook.com/" className="external"><img src="images/icons/black/facebook.png"
                        alt="" title="" /><span>FACEBOOK</span></a></li>
                    <li><a href="http://plus.google.com" className="external"><img src="images/icons/black/gplus.png" alt=""
                        title="" /><span>GOOGLE</span></a></li>
                    <li><a href="http://www.dribbble.com/" className="external"><img src="images/icons/black/dribbble.png"
                        alt="" title="" /><span>DRIBBBLE</span></a></li>
                    <li><a href="http://www.linkedin.com/" className="external"><img src="images/icons/black/linkedin.png"
                        alt="" title="" /><span>LINKEDIN</span></a></li>
                    <li><a href="http://www.pinterest.com/" className="external"><img src="images/icons/black/pinterest.png"
                        alt="" title="" /><span>PINTEREST</span></a></li>
                </ul>
                <div className="close_popup_button"><a href="#" className="close-popup"><img src="images/icons/black/menu_close.png"
                    alt="" title="" /></a></div>
            </div>
        </div>
    );
};

export default Social;