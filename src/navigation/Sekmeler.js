import React from "react";

import {View,Text,StyleSheet, createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import{colors} from "../global/styles"
import {Icon} from "react-native-elements"
import HomeScreen from "../screens/HomeScreen";
import AramaEkrani from "../screens/AramaEkrani";
import SiparislerimEkrani from "../screens/SiparislerimEkrani";
import HesabimEkrani from "../screens/HesabimEkrani";
import { ClientStack } from "./clientStack";

const Sekmeler = createBottomTabNavigator();

export default function RootClientTabs(){
    return(
        <Sekmeler.Navigator
                tabBarOptions={{
                    activeTintColor: colors.buttons
                }}
              >
            <Sekmeler.Screen
                name ="HomeScreen"
                component={HomeScreen}
                options={
                    {
                        tabBarLabel :"Anasayfa",
                        tabBarIcon: ({color,size})=>(
                            <Icon
                                name="Home"
                                type ="material"
                                color={color}
                                size={size}
                            />
                        )       

                    }
                }
            />

                <Sekmeler.Screen
                name ="ClientStack"
                component={ClientStack}
                options={
                    {
                        tabBarLabel :"Arama",
                        tabBarIcon: ({color,size})=>(
                            <Icon
                                name="search"
                                type ="material"
                                color={color}
                                size={size}
                            />
                        )       

                    }
                }
            />
             <Sekmeler.Screen
                name ="SiparislerimEkrani"
                component={SiparislerimEkrani}
                options={
                    {
                        tabBarLabel :"Siparişlerim",
                        tabBarIcon: ({color,size})=>(
                            <Icon
                                name="view-list"
                                type ="material"
                                color={color}
                                size={size}
                            />
                        )       

                    }
                }
            />
             <Sekmeler.Screen
                name ="HesabimEkrani"
                component={HesabimEkrani}
                options={
                    {
                        tabBarLabel :"Hesabım",
                        tabBarIcon: ({color,size})=>(
                            <Icon
                                name="person"
                                type ="material"
                                color={color}
                                size={size}
                            />
                        )       

                    }
                }
            />
            
        </Sekmeler.Navigator>
    )
}

