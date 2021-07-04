import React from 'react';

const PanelRight = () => {
    return(
        <div className="panel panel-right panel-reveal">
            <div className="user_login_info">

                <div className="user_thumb">
                    <img src="images/page_photo.jpg" alt="" title="" />
                    <div className="user_details">
                        <p>Welcome, <span>Nathalie</span></p>
                    </div>
                    <div className="user_avatar"><img src="images/avatar.jpg" alt="" title="" /></div>
                </div>

                <nav className="user-nav">
                    <ul>
                        <li><a href="features.html" className="close-panel"><img src="images/icons/white/settings.png" alt=""
                                    title="" /><span>Account Settings</span></a></li>
                        <li><a href="features.html" className="close-panel"><img src="images/icons/white/briefcase.png" alt=""
                                    title="" /><span>My Account</span></a></li>
                        <li><a href="features.html" className="close-panel"><img src="images/icons/white/message.png" alt=""
                                    title="" /><span>Messages</span><strong>12</strong></a></li>
                        <li><a href="features.html" className="close-panel"><img src="images/icons/white/love.png" alt=""
                                    title="" /><span>Favorites</span><strong>5</strong></a></li>
                        <li><a href="index.html" className="close-panel"><img src="images/icons/white/lock.png" alt=""
                                    title="" /><span>Logout</span></a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default PanelRight