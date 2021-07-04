import {React} from 'react';

const MainDefault = ({ children }) => {
    return (
            <body id="mobile_wrap">
                <div class="statusbar-overlay"></div>
                <div class="panel-overlay"></div>
                <PanelLeft />
                <PanelRight />
                <div class="views">
                    <div class="view view-main">
                        <div class="pages">
                            {children}
                        </div>
                    </div>
                </div>
                <LoginPopup />
                <RegisterPopup />
                <ForgotPasswordPopup />
                <SocialPopup />
            </body>
    );
};

export default MainDefault;