import React from 'react';
import {View,ScrollView} from 'react-native';

import PanelLeft from '../../components/panels/PanelLeft';
import PanelRight from '../../components/panels/PanelRight';
import { Login as LoginPopup } from '../../components/popups/Login';
import { Register as RegisterPopup } from '../../components/popups/Register';
import { ForgotPassword as ForgotPasswordPopup } from '../../components/popups/ForgotPassword';
import { Social as SocialPopup } from '../../components/popups/Social';

const MainDefault = ({ children }) => {
    return (
        <View id="mobile_wrap">
            <ScrollView className="statusbar-overlay"></ScrollView>
            <ScrollView className="panel-overlay"></ScrollView>
            <PanelLeft />
            <PanelRight />
            <ScrollView className="views">
                <ScrollView className="view view-main">
                    <ScrollView className="pages">
                        {children}
                    </ScrollView>
                </ScrollView>
            </ScrollView>
            <LoginPopup />
            <RegisterPopup />
            <ForgotPasswordPopup />
            <SocialPopup />
        </View>
    );
};


export default MainDefault;