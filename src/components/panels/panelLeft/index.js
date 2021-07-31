import React from 'react';
import { ScrollView, Button,Image, FlatList,View, Text} from 'react-native';
import styles from './style';

import iconHome from '../../../../assets/images/icons/white/home.png';

const PanelLeft = ({ navigation }) => {
    
    return (
        <ScrollView  data-page="panel-leftmenu" className="page pagepanel">
            <FlatList className="main_nav_underline" 
                data={listData}
                renderItem={ListItem}
            />
        </ScrollView>
    );
};

const ListItem = ({item}) => {
    return(
        <Text onPress={() => { navigation.navigate(item.key); }} className="close-panel">
            <Image source={iconHome} alt="" title="" />{item.key}
        </Text>
    );
};

const listData = [
    {key:'home'},
    {key:'account'},
    {key:'categories'},
    {key:'contact'}
];

export default PanelLeft;