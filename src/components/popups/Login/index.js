import React from 'react';
import {classes} from './../../../../assets/css/global';
import {mixtli} from './../../../../assets/css/mixtli';
import {View,Text, TextInput, Button} from 'react-native';

export const Login = ({navigation}) => {
    return(
        <View   style={[classes.dFlex, 
                        classes.justifyContentCenter, 
                        classes.alignCenter, 
                        classes.h100]} 
                className="popup popup-login">
            <View style={[classes.m2]} className="content-block">
                <Text style={[classes.textCenter, classes.mb1 ,mixtli.title1]}>LOGIN</Text>
                <View className="loginform">
                    <View style={[classes.w100]} id="LoginForm">
                        <TextInput style={[classes.w100, classes.borderSimple, classes.p1, classes.mx1]} type="text" name="email" className="form_input required" placeholder="email" />
                        <TextInput style={[classes.w100, classes.borderSimple, classes.p1, classes.mx1]} secureTextEntry={true}  type="password" name="Password" className="form_input required"
                            placeholder="password" />
                        <View style={[classes.mx2]} className="forgot_pass">
                            <Text style={[classes.textBlack, classes.textCenter]} >Forgot Password?</Text>
                        </View>
                        <Button type="submit" name="submit" className="form_submit" id="submitlogin" title='SIGN IN' />
                    </View>
                    <View style={[classes.mt1]} className="signup_bottom">
                        <Text style={[classes.mx1, classes.textCenter]}>Don't have an account?</Text>
                        <Text style={[mixtli.link, classes.textCenter]} onPress={()=>{ goToRegister(navigation) }} data-popup=".popup-signup" className="open-popup">SIGN UP</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const goToRegister = ({navigate}) => {
    navigate('Register');
};

export default Login;