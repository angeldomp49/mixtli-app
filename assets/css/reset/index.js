import {Stylesheet} from 'react-native';

export const reset = Stylesheet.create({
    box:{
        margin: 0,
        padding: 0,
        border: 0,
        outline: 0,
        fontSize: '100%',
        verticalAlign: 'baseline',
        background: 'transparent'
    },
    body: {
        lineHeight: 1
    },
    unstyled: {
        listStyle: 'none'
    },
    blockquoteNone: {
        quotes: 'none'
    },
    contentNone: {
        content: '',
        content: 'none'
    },
    outlineNone: {
        outline: 0
    },
    textDecorationNone: {
        textDecoration: 'none'
    },
    lineThrought:{
        textDecoration: 'line-through'
    },
    table: {
        borderCollapse: 'collapse',
        borderSpacing: 0
    },
    clearfixAfter: {
        content: ".",
        display: 'block',
        height: 0,
        clear: 'both',
        visibility: 'hidden'
    },
    clearfix: {
        display: 'inline-block'
    },
    /* Hide from IE Mac \*/ 
    clearfixMac:{
        display: 'block'
    },
    /* End hide from IE Mac */ 
    displayNone: {
        display: 'none'
    }
    /* End Clearfix */
    
});

export default reset;