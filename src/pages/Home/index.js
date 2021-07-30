import React from 'react';
import {ScrollView} from 'react-native';
import MainDefault from '../../containers/MainDefault';
import NavPages from '../../components/navs/NavPages';
import SwipeSlider from '../../components/slider/SwipeSlider';
import SwipeToolbar from '../../components/SwipeToolbar';

export const Home = () => {
    return (
        <MainDefault>
            <ScrollView data-page="index" className="page homepage">
                <ScrollView className="page-content">
                    <NavPages />
                    <SwipeSlider />
                    <SwipeToolbar />
                </ScrollView>
            </ScrollView>
        </MainDefault>
    );
};

export default Home;