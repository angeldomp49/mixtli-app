import React from 'react';

import MainDefault from '../../containers/MainDefault';
import NavPages from '../../components/navs/NavPages';
import SwipeSlider from '../../components/slider/SwipeSlider';
import SwipeToolbar from '../../components/SwipeToolbar';

export const Home = () => {
    return (
        <MainDefault>
            <div data-page="index" class="page homepage">
                <div class="page-content">
                    <NavPages />
                    <SwipeSlider />
                    <SwipeToolbar />
                </div>
            </div>
        </MainDefault>
    );
};

export default Home;