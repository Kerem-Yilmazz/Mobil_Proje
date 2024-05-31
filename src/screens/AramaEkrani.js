import React from "react";


import {
    View, Text, StyleSheet, FlatList,
    TouchableWithoutFeedback, ImageBackground,Dimensions} from "react-native"
import SearchComponent from "../components/SearchComponent"

import { TextInput } from "react-native-gesture-handler";
import { filterData2 } from "../global/Data";
import { colors } from "../global/styles";

const SCREEN_WIDTH = Dimensions.get("window").width

export default function AramaEkrani() {
    return (
        <View style={{marginBottom:10}}>
            <SearchComponent />

            <View style={{marginTop:10}}>
                <View>
                <FlatList
                    style={{ marginBottom: 1 }}
                    data={filterData2}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <TouchableWithoutFeedback>
                            <View style={styles.imageView}>
                                <ImageBackground
                                style = {styles.image}
                                source = {{uri:item.image}}
                                >
                                    
                                    <View style={styles.textView}>
                                         <Text style={{ color: colors.cardbackground }}>{item.name}</Text>
                                     </View>
                                </ImageBackground>
                            </View>
                        </TouchableWithoutFeedback>
                    )}
                    horizontal ={false}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    ListHeaderComponent={<Text style={styles.listHeaders}>Top Categories</Text>}
                    ListFooterComponent={<Footer/>}
                />
                </View>
            </View>
        </View>

    )
}

const Footer =() =>{
    return(
        <View style={{marginTop:10,marginBottom:100}}>
            <View style={{}}>
                <FlatList
                    style={{ marginBottom: 1 }}
                    data={filterData2}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <TouchableWithoutFeedback>
                            <View style={styles.imageView}>
                                <ImageBackground
                                style = {styles.image}
                                source = {{uri:item.image}}
                                >
                                    
                                    <View style={styles.textView}>
                                         <Text style={{ color: colors.cardbackground }}>{item.name}</Text>
                                     </View>
                                </ImageBackground>
                            </View>
                        </TouchableWithoutFeedback>
                    )}
                    horizontal ={false}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    ListHeaderComponent={<Text style={styles.listHeaders}>More categories</Text>}
                   
                />
                </View>
            </View>
    )
}




const styles = StyleSheet.create({
    imageView: {
        justifyContent: 'center',
        borderRadius: 10,
        height: SCREEN_WIDTH * 0.4475,
        width: SCREEN_WIDTH * 0.4475,
        alignItems: 'center',
        marginTop: 2.5,
        marginBottom: SCREEN_WIDTH * 0.035,
        marginLeft:13,
    },

    image: {
        height: SCREEN_WIDTH * 0.4475,
        width: SCREEN_WIDTH * 0.4475,
        borderRadius: 10,
    },

    listHeaders: {
        color: 'grey',
        fontSize: 16,
        paddingBottom: 12,
        marginLeft:10,
        
    },
    textView: {
        height: SCREEN_WIDTH * 0.4475,
        width: SCREEN_WIDTH * 0.4475,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(52,52,52,0.3)"
    }
});
