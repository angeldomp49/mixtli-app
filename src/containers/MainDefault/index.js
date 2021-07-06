import React from 'react';

import PanelLeft from '../../components/panels/PanelLeft';
import PanelRight from '../../components/panels/PanelRight';
import { Login as LoginPopup } from '../../components/popups/Login';
import { Register as RegisterPopup } from '../../components/popups/Register';
import { ForgotPassword as ForgotPasswordPopup } from '../../components/popups/ForgotPassword';
import { Social as SocialPopup } from '../../components/popups/Social';

const MainDefault = ({ children }) => {
    return (
        <div id="mobile_wrap">
            <div className="statusbar-overlay"></div>
            <div className="panel-overlay"></div>
            <PanelLeft />
            <PanelRight />
            <div className="views">
                <div className="view view-main">
                    <div className="pages">
                        {children}
                    </div>
                </div>
            </div>
            <LoginPopup />
            <RegisterPopup />
            <ForgotPasswordPopup />
            <SocialPopup />
        </div>
    );
};

export default MainDefault;