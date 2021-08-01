import {StyleSheet} from 'react-native';
import {constants, classes} from './../../../../assets/css/global';

export const styles = StyleSheet.create({
    title1:{
        fontSize: '2em',
        margin: '1em auto',
        fontWeight: 600,
        fontFamily: 'sans-serif'
    },
    forgotPassword:{
        color: constants.black
    },
    submit:{
        backgroundColor: constants.transparent
    }
});

export default styles;