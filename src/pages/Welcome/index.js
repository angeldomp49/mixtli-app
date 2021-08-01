import React from 'react';
import {Button, View} from 'react-native';
import styles from './style.js';

import Login from './../../components/popups/Login';

export const Welcome = () => {
    return(
        <View style={styles.container}>
            <Login/>
        </View>
    );
};

export default Welcome;