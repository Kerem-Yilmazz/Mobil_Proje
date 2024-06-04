import React from "react";

import {NavigationContainer} from "@react-navigation/native"
import AuthStack from "./authNavigators";
import app from "../../firebaseConfig"

export default function RootNavigator(){
    return(
        <NavigationContainer>
            <AuthStack
            />
        </NavigationContainer>
    )
}