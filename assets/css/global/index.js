import {StyleSheet} from 'react-native';

export const constants = {
    center: 'center',
    auto: 'auto',
    pc100: '100%',
    flex: 'flex',
    none: 'none',
    transparent: 'transparent',
    white: 'white',
    black: 'black',
};

export const classes = StyleSheet.create({
    w100: {
        width: constants.pc100
    },
    h100:{
        height: constants.pc100
    },
    textCenter:{
        textAlign: constants.center
    },
    textBlack:{
        color: constants.black
    },
    textWhite:{
        color: constants.white
    },
    dFlex:{
        display: constants.flex
    },
    justifyContentCenter:{
        justifyContent: constants.center
    },
    alignCenter: {
        alignItems: constants.center
    },
    borderSimple:{
        border: '1px solid black'
    },
    borderNone:{
        border: constants.none
    },
    bgTransparent:{
        background: constants.transparent
    },
    p1:{
        padding: '0.6rem'
    },
    p2:{
        padding: '1.2rem'
    },
    p3:{
        padding: '1.8rem'
    },
    p4:{
        padding: '2.4rem'
    },
    p5:{
        padding: '3rem'
    },
    pb1:{
        paddingBottom: '0.6rem'
    },
    pb2:{
        paddingBottom: '1.2rem'
    },
    pb3:{
        paddingBottom: '1.8rem'
    },
    pb4:{
        paddingBottom: '2.4rem'
    },
    pb5:{
        paddingBottom: '3rem'
    },
    pt1:{
        paddingTop: '0.6rem'
    },
    pt2:{
        paddingTop: '1.2rem'
    },
    pt3:{
        paddingTop: '1.8rem'
    },
    pt4:{
        paddingTop: '2.4rem'
    },
    pt5:{
        paddingTop: '3rem'
    },
    pl1:{
        paddingLeft: '0.6rem'
    },
    pl2:{
        paddingLeft: '1.2rem'
    },
    pl3:{
        paddingLeft: '1.8rem'
    },
    pl4:{
        paddingLeft: '2.4rem'
    },
    pl5:{
        paddingLeft: '3rem'
    },
    pr1:{
        paddingRight: '0.6rem'
    },
    pr2:{
        paddingRight: '1.2rem'
    },
    pr3:{
        paddingRight: '1.8rem'
    },
    pr4:{
        paddingRight: '2.4rem'
    },
    pr5:{
        paddingRight: '3rem'
    },
    m1:{
        margin: '0.6rem'
    },
    m2:{
        margin: '1.2rem'
    },
    m3:{
        margin: '1.8rem'
    },
    m4:{
        margin: '2.4rem'
    },
    m5:{
        margin: '3rem'
    },
    mb1:{
        marginBottom: '0.6rem'
    },
    mb2:{
        marginBottom: '1.2rem'
    },
    mb3:{
        marginBottom: '1.8rem'
    },
    mb4:{
        marginBottom: '2.4rem'
    },
    mb5:{
        marginBottom: '3rem'
    },
    mt1:{
        marginTop: '0.6rem'
    },
    mt2:{
        marginTop: '1.2rem'
    },
    mt3:{
        marginTop: '1.8rem'
    },
    mt4:{
        marginTop: '2.4rem'
    },
    mt5:{
        marginTop: '3rem'
    },
    ml1:{
        marginLeft: '0.6rem'
    },
    ml2:{
        marginLeft: '1.2rem'
    },
    ml3:{
        marginLeft: '1.8rem'
    },
    ml4:{
        marginLeft: '2.4rem'
    },
    ml5:{
        marginLeft: '3rem'
    },
    mr1:{
        marginRight: '0.6rem'
    },
    mr2:{
        marginRight: '1.2rem'
    },
    mr3:{
        marginRight: '1.8rem'
    },
    mr4:{
        marginRight: '2.4rem'
    },
    mr5:{
        marginRight: '3rem'
    },
    mx1:{
        marginTop: '0.6rem',
        marginBottom: '0.6rem',
    },
    mx2:{
        marginTop: '1.2rem',
        marginBottom: '1.2rem',
    },
    mx3:{
        marginTop: '1.8rem',
        marginBottom: '1.8rem',
    },
    mx4:{
        marginTop: '2.4rem',
        marginBottom: '2.4rem',
    },
    mx5:{
        marginTop: '3rem',
        marginBottom: '3rem',
    }
});

export default classes;