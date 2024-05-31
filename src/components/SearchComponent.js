import React, { useState, useRef } from "react"
import { StyleSheet, Text, View, TouchableWithoutFeedback,TouchableOpacity, Modal, TextInput, FlatList,Keyboard } from "react-native"
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-elements";
import { colors } from "../global/styles"

import {filterData} from "../global/Data"
import filter from "lodash/filter"

export default function SearchComponent() {

    const navigation = useNavigation();

    const [data,setData] = useState([...filterData])
    const [modalVisible, setModalVisible] = useState(false)
    const [textInputFossued, setTextInputFoussed] = useState(true)
    const textInput = useRef(0)


const contains =({name},query)=>{
    if(name.includes(query))
        {return true}
        return false
}

const handleSearch = text => {
    const dataS = filter(filterData, userSearch => {
      return contains(userSearch,text);
    });
    setData([...dataS])
  };
    return (
        <View style={{ alignItems: "center",}}>
            <TouchableWithoutFeedback
                onPress={() => {
                    setModalVisible(true)
                }}
            >
                <View style={styles.SearchArea}>
                    <Icon name="search"
                        style={styles.searchIcon}
                        type="material"
                        iconStyle={{ marginLeft: 5 }}
                        size={32}
                    />
                    <Text style={{ fontSize: 15, borderRadius: 5, color: colors.grey3 }}>Neye bakmıştınız ?</Text>
                </View>
            </TouchableWithoutFeedback>
            <Modal
                animationType="fade"
                transparent={false}
                visible={modalVisible}
            >
                <View style={styles.modal}>
                    <View style={styles.view1}>
                        <View style={styles.textInput}>
                            <Animatable.View
                                animation={textInputFossued? "fadeInRight" : "fadeInLeft"}
                                duration={400}

                                >
                                <Icon name={textInputFossued ? "arrow-back" : "search"}
                                    onPress={() => {
                                        if (textInputFossued)
                                            setModalVisible(false)
                                            setTextInputFoussed(true)
                                    }}
                                    style={styles.Icon}
                                    type="material"
                                    iconStyle={{ marginRight: 5 }}
                                />
                            </Animatable.View>
                            <TextInput
                                style={{ width: "90%" }}
                                placeholder=""
                                autoFocus={false}
                                ref={textInput}

                                onFocus={()=>{
                                    setTextInputFoussed(true)
                                }}
                                onBlur={()=>{
                                    setTextInputFoussed(false)
                                }}

                                onChangeText={handleSearch}

                            />

                            <Animatable.View
                                 animation={textInputFossued? "fadeInLeft" : ""}
                                  duration={400}

                                
                                >
                                <Icon name={textInputFossued ? "cansel" : null}
                                    iconStyle={{ color: colors.grey3 }}
                                    type="material"
                                    style={{ marginRight: -10 }}
                                    onPress={() => {
                                        textInput.current.clear()
                                        //handleSearch()
                                    }}

                                />
                            </Animatable.View>
                        </View>
                    </View>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate('SearchResultScreen', { item: item.name });
                                    Keyboard.dismiss();
                                    setTextInputFoussed(false);
                                }}
                            >
                                <View style={styles.view2}>
                                    <Text style={{ color: colors.grey2, fontSize: 15 }}>{item.name}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item) => item.id}
                    />


                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text1: {
        color: colors.grey3,
        fontSize: 16
    },
    textInput: {
        borderWidth: 1,
        borderRadius: 12,
        marginHorizontal: 0,
        borderColor: "#86939e",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignContent: "center",
        alignItems: "center",
        paddingLeft: 10,
        paddingRight: 10,
    },
    SearchArea: {
        marginTop: 10,
        width: "94%",
        height: 50,
        backgroundColor: "#c6c6c6",
        flexDirection: "row",
        alignItems: "center",
        borderRadius:17,
    },
    searchIcon: {
        fontSize: 24,
        padding: 5,
        color: colors.grey3,
    },
    view1: {
        height: 70,
        justifyContent: "center",
        paddingHorizontal: 10,
    },
    view2: {
        fontSize: 24,
        color: colors.grey2,
        padding: 5,
    },
    modal: {
        flex: 1
    }
})