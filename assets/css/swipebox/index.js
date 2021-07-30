import {StyleSheet} from 'reactNative';

export const swipebox = StyleSheet.create({
    swipebox :{
        overflow: 'hidden!important',
    },
    swipeboxOverlayImg :{
        border: 'none!important',
    },
    swipeboxOverlay :{
        width: '100%',
        height: '100%',
        position: fixed,
        top: 0,
        left: 0,
        zIndex: '999999999!important',
        overflow: 'hidden',
        userSelect: 'none'
    },
    
    swipeboxSlider :{
        height: '100%',
        left: 0,
        top: 0,
        width: '100%',
        whiteSpace: nowrap,
        position: absolute,
        display: 'none',
    },
    
    swipeboxSliderSlide :{
        background: 'url("img/loader.gif") noRepeat center center',
        height: '100%',
        width: '100%',
        lineHeight: '1px',
        textAlign: 'center',
        display: 'inlineBlock'
    },
    
    swipeboxSliderSlideBefore :{
        content: "",
        display: 'inlineBlock',
        height: '50%',
        width: '1px',
        marginRight: '-1px'
    },
    
    swipeboxSliderSlideImg,
    swipeboxSliderSlideSwipeboxVideoContainer :{
        display: 'inlineBlock',
        maxHeight: '100%',
        maxWidth: '100%',
        margin: 0,
        padding: 0,
        width: auto,
        height: auto,
        verticalAlign: middle,
    },
    swipeboxSliderSlideSwipeboxVideoContainer :{
        background:'none',
        maxWidth: '1140px',
        maxHeight: '100%',
        width: '100%',
        padding: '5%',
        boxSizing: 'borderBox',
    },
    swipeboxSliderSlideSwipeboxVideoContainerSwipeboxVideo:{
        width: '100%',
        height: 0,
        paddingBottom: '56.25%',
        overflow: 'hidden',
        position: 'relative',
    },
    
    swipeboxSliderSlideSwipeboxVideoContainerSwipeboxVideoIframe:{
        width: '100%!important', 
        height: '100%!important',
        position: 'absolute',
        top: 0, 
        left: 0,
    },
    
    swipeboxAction, swipeboxCaption :{
        position: 'absolute',
        left: 0,
        zIndex: 999,
        height: '50px',
        width: '100%',
    },
    
    swipeboxAction :{
        bottom: '-50px,'
    },
    swipeboxActionVisibleBars :{
        bottom: 0,
    },
    
    swipeboxActionForceVisibleBars :{
        bottom: '0!important',
    },
    
    swipeboxCaption :{
        top: '-50px',
    textAlign: 'center',
    },
    swipeboxCaptionVisibleBars :{
        top: 0,
    },
    
    swipeboxCaptionForceVisibleBars :{
        top: '0!important',
    },
    
    swipeboxActionSwipeboxPrev, swipeboxActionSwipeboxNext,
    swipeboxActionSwipeboxClose :{
        backgroundImage: 'url("img/icons.png")',
        backgroundRepeat: 'noRepeat',
        border: 'none!important',
        textDecoration: 'none!important',
        cursor: 'pointer',
        position: 'absolute',
        width: '50px',
        height: '50px',
        top: 0,
    },
    
    swipeboxActionSwipeboxClose :{
        backgroundPosition: '15px 12px',
        left: '40px',
    },
    
    swipeboxActionSwipeboxPrev :{
        backgroundPosition: '-32px 13px',
        right: '100px',
    },
    
    swipeboxActionSwipeboxNext :{
        backgroundPosition: '-78px 13px',
        right: '40px',
    },
    
    swipeboxActionSwipeboxPrevDisabled,
    swipeboxActionSwipeboxNextDisabled :{
        opacity: 0.3,
    },
    
    swipeboxOverlay :{
        background: '#0d0d0d',
    },
    
    swipeboxAction, swipeboxCaption :{
        textShadow: '1px 1px 1px black',
        backgroundColor: '#0d0d0d',
        backgroundImage: 'gradient(linear, 50% 0%, 50% 100%, colorStop(0%, #0d0d0d), colorStop(100%, #000000))',
        opacity: 0.95,
    },
    
    swipeboxAction :{
        borderTop: '1px solid rgba(255, 255, 255, 0.2)',
    },
    
    swipeboxCaption :{
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
        color: 'white!important',
        fontSize: '15px',
        lineHeight: '43px',
        fontFamily: 'Helvetica, Arial, sansSerif',
    }
},);