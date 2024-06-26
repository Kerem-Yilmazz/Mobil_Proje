import React, { useState } from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { Route1, Route2, Route3, Route4, Route5, Route6, Route7, Route8 } from "./MenuTabs";
import { TabView, TabBar } from "react-native-tab-view";
import { colors } from "../global/styles";
import { Icon } from "react-native-elements";

const SCREEN_WIDTH = Dimensions.get("window").width;

const MenuProductScreen = ({ navigation, route }) => {
    const [routes] = useState([
        { key: '1', title: 'Route 1' },
        { key: '2', title: 'Route 2' },
        { key: '3', title: 'Route 3' },
        { key: '4', title: 'Route 4' },
        { key: '5', title: 'Route 5' },
        { key: '6', title: 'Route 6' },
        { key: '7', title: 'Route 7' },
        { key: '8', title: 'Route 8' }
    ]);
    const [index, setIndex] = useState(0);

    const renderTabBar = props => (
        <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: colors.cardbackground }}
            tabStyle={styles.tabStyle}
            scrollEnabled={true}
            style={styles.tab}
            labelStyle={styles.tabLabel}
            contentContainerStyle={styles.tabContainer}
        />
    );

    const renderScene = ({ route }) => {
        switch (route.key) {
            case '1':
                return <Route1 navigation={navigation} />;
            case '2':
                return <Route2 name={navigation} />;
            case '3':
                return <Route3 name={navigation} />;
            case '4':
                return <Route4 name={navigation} />;
            case '5':
                return <Route5 name={navigation} />;
            case '6':
                return <Route6 name={navigation} />;
            case '7':
                return <Route7 name={navigation} />;
            case '8':
                return <Route8 name={navigation} />;
            default:
                return null;
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.view1}>
                <Icon
                    name="arrow-left"
                    type="material-community"
                    color={colors.black}
                    size={25}
                    onPress={() => navigation.goBack()}
                />
                <Text style={styles.text1}>Menü</Text>
            </View>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: SCREEN_WIDTH }}
                renderTabBar={renderTabBar}
                tabBarPosition="top"
            />
        </View>
    );
};

export default MenuProductScreen

const styles=StyleSheet.create({
   scene:{
        flex:1,
   },
   container:{
        flex:1,
        top:0,
        left:0,
        right:0
   },
    view1:{
        flexDirection:"row",
        alignItems:"center",
        padding:10,
        backgroundColor:colors.buttons,
        top:0,
        left:0,
        right:0,
        paddingTop:25
    },
    text1:{
        fontWeight:"bold",
        marginLeft:40,
        color:colors.black,
        fontSize:18
    },  
    view2:{
        marginTop:5,
        paddingBottom:20
   },
    tab:{
        paddingTop:0,
        backgroundColor:colors.buttons,
        justifyContent:"space-between",
    },
    tabContainer:{
        alignItems:"center",
        alignContent:"center",
        justifyContent:"center"
   },
    tabLabel:{
    fontWeight:"bold",
    color:colors.cardbackground
   },
    tabStyle:{
        width:SCREEN_WIDTH/4,
        maxHeight:45,
    },
    scene2:{backgroundColor:"#673ab7"}
})