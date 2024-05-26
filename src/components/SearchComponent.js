import React,{useState,useRef} from "react"
import { StyleSheet,Text,View,TouchableWithoutFeedback, Modal, TextInput,FlatList, Keyboard} from "react-native"
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import {Icon} from "react-native-elements";
import { colors } from "../global/styles"

export default function  SearchComponent(){
    const [modalVisible,setModalVisible] =useState(false)
    const [textInputFossued,setTextInputFoussed] =useState(true)
    const TextInput = useState(0)
    return(
        <View style={{alignItems:"center"}}> 
            <TouchableWithoutFeedback
                onPress={()=>{
                    setModalVisible(true)
                }}
            >
                <View style={styles.SearchArea}>
                    <Icon name = "search"
                        style={styles.searchIcon}
                        type="material"
                        iconStyle={{marginLeft:5}}
                        size={32}
                    />
                    <Text style={{fontSize:15}}>Neye bakmıştınız ?</Text>
                </View>
            </TouchableWithoutFeedback>
            <Modal
                animationType="fade"
                transparent={false}
                visible = {modalVisible}
            >
                <View style = {styles.modal}>
                    <View style = {styles.view1}>
                        <View style ={styles.TextInput}>
                            <Animatable.View>
                                <Icon name = {textInputFossued ? "arrow-back": "search"}
                                    onPress={()=>{
                                        if(textInputFossued)
                                        setModalVisible(false)
                                        setTextInputFoussed(false)
                                    }}
                                        style={styles.Icon}
                                        type="material"
                                        iconStyle={{marginRight:5}}
                                />
                            </Animatable.View>
                            <TextInput
                                style={{width:"90%"}}
                                placeholder=""
                                autoFocus={false}
                                ref={TextInput}

                            />

                            <Animatable.View>
                            <Icon name = {textInputFossued ? "cansel": null}
                                    iconStyle ={{color:colors.grey3}}
                                    type="material"
                                    style={{marginRight:-10}}
                                    onPress={()=>{
                                        textInput.current.clear()
                                        //handleSearch()
                                    }}
                                       
                                />
                            </Animatable.View>
                        </View>
                    </View>

                        <FlatList
                        data={data}
                            renderItem{({ item })=> (
                                 
                                  <TouchableOpacity
                                    onPress={() => {
                                        Keyboard.dismiss
                                      navigation.navigate('AramaEkrani', {item: item.name})
                                      setModalVisible(false);
                                      setTextInputFoussed(true)
                                    }}  >
                                    <View style={styles.view2}>
                                        <Text style={{color:colors.grey2,fontSize:15}}>{item.name}</Text>
                                    </View>
                                  </TouchableOpacity>
                                )}
                              
                              keyExtractor={item => item.id}
                               />            
                        



                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    text1:{
       color:colors.grey3,
        fontSize:16
    },
    TextInput:{
        borderWidth:1,
        borderRadius:12,
        marginHorizontal:0,
        borderColor:"#86939e",
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignContent:"center",
        alignItems:"center",
        paddingLeft:10,
        paddingRight:10,
    },
    SearchArea:{marginTop:10,
        width:"94%",
        height:50,
        backgroundColor:colors.grey4,
        flexDirection:"row",
        alignItems:"center"
    },
    searchIcon:{
        fontSize:24,
        padding:5,
        color:colors.grey3,
    },
    view1:{
        height:70,
        justifyContent:"center",
        paddingHorizontal:10,
    },
    view2:{
        fontSize:24,
        color:colors.grey2,
        padding:5,
    },
    modal:{
        flex:1
    }
})