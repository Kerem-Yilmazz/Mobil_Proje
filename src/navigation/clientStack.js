import React from "react";
import { StyleSheet,Text,View } from "react-native";
import { createStackNavigator,TransitionPresets } from "@react-navigation/stack";

import AramaEkrani from "../screens/AramaEkrani";
import SearchResultScreen from "../screens/SearchResultScreen";


const ClientSearch = createStackNavigator()

export function ClientStack(){
    return(
        <ClientSearch.Navigator>
            <ClientSearch.Screen
                name="AramaEkrani"
                component={AramaEkrani}
                options = {
                    ()=>({
                        headerShown:false
                    })
                }
            />
            <ClientSearch.Screen
                name="SearchResultScreen"
                component={SearchResultScreen}
                options = {
                    ()=>({
                        headerShown:false
                    })
                }
            />


        </ClientSearch.Navigator>
    )
}

const styles = StyleSheet.create({})