import React,{useState,useEffect} from "react"

import { StyleSheet,Text,View,Image, ImageBackground } from "react-native";
import { restaurantsData } from "../global/Data";
import { colors } from "../global/styles";

import {Icon} from "react-native-elements"

export default function RestaurantHeader({navigation,id}){
        
    return(
        <View style={styles.container}>
            <ImageBackground
                style = {styles.container}
                source ={{uri:restaurantsData[id].images}}
                
            >

            <View style={styles.view1}>
                <View style={styles.view2}>
                    <Icon
                        name="arrow-left"
                        type="material-communtiy"
                        color={colors.black}
                        size={25}
                        onPress={()=>{navigation.goBack()}}
                    />
                </View>
                
            </View>    

            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 150
         },
        
        view1: {
          alignItems: "baseline",
          flexDirection:"row",
          justifyContent:"space-between"
        },
        view2: {
          margin: 10,
          width:40,
          height:40,
          backgroundColor:colors.cardbackground,
          alignItems:"center",
          justifyContent:"center",
          borderRadius:20
        },
        view3:{
            marginTop:0,
            margin:10,
            width:40,
            height:40,
            backgroundColor:colors.cardbackground,
            alignItems:"center",
            justifyContent:"center",
            borderRadius:20,
        },
        view4:{
            marginTop:0,
            alignItems:"center",
            justifyContent:"center"
        }
})