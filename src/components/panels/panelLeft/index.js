

const panelLeft = () => {
    return(
        <div className="panel panel-left panel-reveal">
            <div className="view view-subnav">
                <div className="pages">
                    <div data-page="panel-leftmenu" className="page pagepanel">
                        <div className="page-content">
                            <nav className="main_nav_underline">
                                <ul>
                                    <li><a href="index.html" className="close-panel" data-view=".view-main"><img
                                                src="images/icons/white/home.png" alt="" title="" /><span>Home</span></a>
                                    </li>
                                    <li><a href="about.html" className="close-panel" data-view=".view-main"><img
                                                src="images/icons/white/mobile.png" alt="" title="" /><span>About</span></a>
                                    </li>
                                    <li><a href="features.html" className="close-panel" data-view=".view-main"><img
                                                src="images/icons/white/features.png" alt=""
                                                title="" /><span>Features</span></a></li>

                                    <li><a href="#" data-popup=".popup-login" className="open-popup close-panel"><img
                                                src="images/icons/white/lock.png" alt="" title="" /><span>Login</span></a>
                                    </li>
                                    <li><a href="team.html" className="close-panel" data-view=".view-main"><img
                                                src="images/icons/white/users.png" alt="" title="" /><span>Team</span></a>
                                    </li>
                                    <li><a href="blog.html" className="close-panel" data-view=".view-main"><img
                                                src="images/icons/white/blog.png" alt="" title="" /><span>Blog</span></a>
                                    </li>

                                    <li><a href="photos.html" className="close-panel" data-view=".view-main"><img
                                                src="images/icons/white/photos.png" alt=""
                                                title="" /><span>Photos</span></a></li>
                                    <li><a href="videos.html" className="close-panel" data-view=".view-main"><img
                                                src="images/icons/white/video.png" alt="" title="" /><span>Videos</span></a>
                                    </li>
                                    <li><a href="music.html" className="close-panel" data-view=".view-main"><img
                                                src="images/icons/white/music.png" alt="" title="" /><span>Music</span></a>
                                    </li>

                                    <li><a href="shop.html" className="close-panel" data-view=".view-main"><img
                                                src="images/icons/white/shop.png" alt="" title="" /><span>Shop</span></a>
                                    </li>
                                    <li className="subnav"><a href="categories.html"><img
                                                src="images/icons/white/categories.png" alt="" title="" /><span>Sub level
                                                menu</span></a></li>
                                    <li><a href="cart.html" className="close-panel" data-view=".view-main"><img
                                                src="images/icons/white/cart.png" alt="" title="" /><span>Cart</span></a>
                                    </li>

                                    <li><a href="tables.html" className="close-panel" data-view=".view-main"><img
                                                src="images/icons/white/tables.png" alt=""
                                                title="" /><span>Tables</span></a></li>
                                    <li><a href="chat.html" className="close-panel" data-view=".view-main"><img
                                                src="images/icons/white/message.png" alt="" title="" /><span>Chat
                                                messages</span></a></li>
                                    <li><a href="form.html" className="close-panel" data-view=".view-main"><img
                                                src="images/icons/white/form.png" alt="" title="" /><span>Custom
                                                Form</span></a></li>


                                    <li><a href="tel:012345678" className="close-panel external" data-view=".view-main"><img
                                                src="images/icons/white/phone.png" alt="" title="" /><span>Call
                                                now!</span></a></li>
                                    <li><a href="contact.html" className="close-panel" data-view=".view-main"><img
                                                src="images/icons/white/contact.png" alt=""
                                                title="" /><span>Contact</span></a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};