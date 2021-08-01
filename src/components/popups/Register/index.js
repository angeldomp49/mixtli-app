import React from 'react';
import {classes} from './../../../../assets/css/global';
import {mixtli} from './../../../../assets/css/mixtli';
import {View,Text, TextInput, Button} from 'react-native';

export const Register = () => {
    return (
        <View   style={[classes.dFlex, 
                        classes.justifyContentCenter, 
                        classes.alignCenter, 
                        classes.h100]} 
                className="popup popup-login">
            <View style={[classes.m2]} className="content-block">
                <Text style={[classes.textCenter, classes.mb1 ,mixtli.title1]}>REGISTER</Text>
                <View className="loginform">
                    <View style={[classes.w100]}  id="RegisterForm">
                        <TextInput style={[classes.w100, classes.borderSimple, classes.p1, classes.mx1]} type="text" name="Username" className="form_input required" placeholder="username" />
                        <TextInput style={[classes.w100, classes.borderSimple, classes.p1, classes.mx1]} type="text" name="email" className="form_input required" placeholder="email" />
                        <TextInput style={[classes.w100, classes.borderSimple, classes.p1, classes.mx1]} secureTextEntry={true}  type="password" name="Password" className="form_input required"
                            placeholder="password" />
                        <Button type="submit" name="submit" className="form_submit" id="submitlogin" title='SIGN IN' />
                    </View>
                    <Text style={[classes.mx1, classes.textCenter]}>- OR REGISTER WITH A SOCIAL ACCOUNT -</Text>
                    <View className="signup_social">
                        <Button type="submit" name="submit" className="form_submit" id="submitlogin" title='FACEBOOK' />
                        <Button type="submit" name="submit" className="form_submit" id="submitlogin" title='TWITTER' />
                    </View>
                </View>
            </View>
        </View>
    );
};

export default Register;