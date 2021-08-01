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
                        <View style={classes.mt2}>
                            <Button type="submit" name="submit" className="form_submit" id="submitlogin" title='SIGN IN' />
                        </View>
                    </View>
                    <Text style={[classes.mt4, classes.textCenter]}>- OR REGISTER WITH A SOCIAL ACCOUNT -</Text>
                    <View className="signup_social">
                        <View style={[classes.mb1]} >
                            <Button color='#38579a' type="submit" name="submit" className="form_submit" id="submitlogin" title='FACEBOOK' />
                        </View>
                        <View style={[classes.mx1]} >
                            <Button color='#0cacea' type="submit" name="submit" className="form_submit" id="submitlogin" title='TWITTER' />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default Register;