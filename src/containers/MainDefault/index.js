import React from 'react';

import PanelLeft from '../../components/panels/PanelLeft';
import PanelRight from '../../components/panels/PanelRight';
import {Login as LoginPopup} from '../../components/popups/Login';
import {Register as RegisterPopup} from '../../components/popups/Register';
import {ForgotPassword as ForgotPasswordPopup} from '../../components/popups/ForgotPassword';
import {Social as SocialPopup} from '../../components/popups/Social';

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