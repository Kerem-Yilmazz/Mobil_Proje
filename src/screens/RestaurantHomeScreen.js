import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions, ScrollView ,TouchableOpacity, Modal} from "react-native";
import RestaurantHeader from "../components/RestaurantHeader";
import { colors, fonts, title } from "../global/styles";
import { restaurantsData} from "../global/Data";
import { Icon } from "react-native-elements";
import { TabView, SceneMap, TabBar } from "react-native-tab-view"; // Corrected import
import MenuScreen from "./RestaurantTabs/MenuScreen";


const SCREEN_WIDTH = Dimensions.get("window").width;

const RestaurantHomeScreen = ({ navigation, route }) => {
    const { id, restaurant } = route.params;
    
    const [routes] = useState([
        { key: "first", title: "Menü" },
        { key: "second", title: "Bilgi" },
        { key: "third", title: "Yorum" },
        { key: "fourth", title: "Galeri" },
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

   

    const UpdateRoute1 = () => {
        return (
            <View>
                {/* Add your content for the first route here */}
            </View>
        );
    };

    const UpdateRoute2 = () => {
        return (
            <View>
                {/* Add your content for the second route here */}
            </View>
        );
    };

    const UpdateRoute3 = () => {
        return (
            <View>
                {/* Add your content for the third route here */}
            </View>
        );
    };

    const UpdateRoute4 = () => {
        return (
            <View>
                {/* Add your content for the fourth route here */}
            </View>
        );
    };
    const menuPressed=()=>{
        navigation.navigate("MenuProductScreen")
    }

   
   
  

    
    
    const renderScene = SceneMap({
        first: UpdateRoute1,
        second: UpdateRoute2,
        third: UpdateRoute3,
        fourth: UpdateRoute4,
    });

    const initialLayout = { width: Dimensions.get('window').width };

    return (
        <View style={styles.container}>
            <ScrollView>
                <View>
                    <RestaurantHeader id={id} navigation={navigation} />
                    {restaurantsData[id].discount &&
                        <View style={styles.view1}>
                            <Text style={styles.text1}>Toplam {restaurantsData[id].discount}% İndirim</Text>
                        </View>
                    }
                    <View style={styles.view2}>
                        <View style={styles.view3}>
                            <Text style={styles.text2}>{restaurantsData[id].restaurantName}</Text>
                            <Text style={styles.text3}>{restaurantsData[id].foodType}</Text>
                            <View style={styles.view4}>
                                <Icon name="star" type="material-community" color={colors.grey3} size={15} />
                                <Text style={styles.text4}>{restaurantsData[id].averageReview}</Text>
                                <Text style={styles.text5}>{restaurantsData[id].numberOfReview}</Text>
                                <Icon name="map-marker" type="material-community" color={colors.grey3} size={15} />
                                <Text style={styles.text6}>{restaurantsData[id].farAway}km uzaklıkta</Text>
                            </View>
                        </View>
                        <View style={styles.view5}>
                            <Text style={styles.text6}>Tahmini Teslim</Text>
                            <View style={styles.view7}>
                                <Text style={styles.text7}>{restaurantsData[id].deliveryTime}</Text>
                                <Text style={styles.text8}>dk</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.view10}>
                    <TabView
                        navigationState={{ index, routes }}
                        renderScene={UpdateRoute1}
                        onIndexChange={setIndex}
                        initialLayout={initialLayout}
                        renderTabBar={renderTabBar}
                        tabBarPosition="top"
                    />
                </View>
                { index === 0 &&
                <MenuScreen onPress = {menuPressed}/>
                  
                }
            </ScrollView>
            <TouchableOpacity>
                <View style={styles.view11}>
                    <View style={styles.view12}>
                        <Text style={styles.text13}>View Cart</Text>
                        <View style={styles.view13}>
                            <Text style={styles.text13}>0</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            
        </View>
    );
}


export default RestaurantHomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:20
      },
      
      view1: {
        width: "100%",
        padding: 3,
        alignItems: "center",
        justifyContent: "center",
      },
      
      text1: {
        color: "green",
        fontSize: 14,
        fontWeight: "bold",
      },
      
      view2: {
        flexDirection: "row",
        flex: 1,
        marginBottom: 5,
        marginHorizontal: 10,
        justifyContent: "space-between",
      },
        
        tab:{paddingTop:0,
            backgroundColor:colors.buttons,
            justifyContent:"space-between",
            alignItems:"center"
        },
        tabContainer:{
            alignItems:"center",
            alignContent:"center",
            justifyContent:"center",
        },
        tabLabel:{
            fontWeight:"bold",
            color:colors.cardbackground
        },
        tabStyle:{width:SCREEN_WIDTH/4,
            maxHeight:45
        },
        text10:{
            fontSize:16,
            fontWeight:"bold",
            backgroundColor:colors.buttons,
            marginTop:5
        },
        text11:{
            fontSize:13,
            backgroundColor:colors.buttons,
            marginBottom:5
        },
        view10:{
            elevation:10,
            backgroundColor:colors.buttons
        },
        view11:{
            backgroundColor:colors.buttons,
            height:50,
            alignContent:"center",
            marginBottom:0,
            justifyContent:"center"
        },
        view12:{
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center"
        },
        text12:{padding:10,
            fontWeight:"bold",
            fontSize:18,
            color:colors.cardbackground
        },
        view13:{
            borderWidth:1,
            marginRight:10,
            borderColor:colors.cardbackground,
            borderRadius:6,
            paddingBottom:2
        },
        text13:{
            paddingHorizontal:3,
            fontWeight:"bold",
            fontSize:18,
            color:colors.cardbackground
        },
        view3: {
            flex: 8,
          },
          
          text2: {
            fontSize: 20,
            fontWeight: "bold",
            color: colors.grey1,
          },
          
          text3: {
            fontSize: 15,
            color: colors.grey3,
        
          },
          
          view4: {
            flexDirection: 'row',
            alignItems: "center",
            marginTop: 5,
        
          },
          
          text4: {
            fontFamily: "Arial",
            fontSize: 13,
            color: colors.grey3,
            marginLeft: 2,
          },
          text5: {
            fontFamily: "Arial",
            fontSize: 13,
            color: colors.grey3,
            marginLeft:2,
            marginRight:5
          },
          text6:{
            fontFamily:"Arial",
            fontSize:13,
            color: colors.grey3,
            marginTop:0,
          },
          view5:{flex:3,
            alignItems:"center",
          },
          text6:{fontSize:15,
            fontWeight:"bold",
            color:colors.grey1
        
           
          },
          text7:{
            fontSize:16,
            fontWeight:"bold",
            color:colors.black,
            marginTop:5,
          },
          view7:{
            width:40,
            height:40,
            alignItems:"center",
            borderRadius:20,
            justifyContent:"space-around"
          },
          text8: {
            fontSize: 13,
            color: colors.black,
            marginBottom: 5
          },
          view8: {
            flex: 3,
            alignItems: "center",
          },
          text9: {
            fontSize: "bold",
            color: colors.cardbackground
          },
          view9: {
            width: 40,
            height: 40,
            backgroundColor: colors.buttons,
            borderRadius: "space_around",
            justifyContent: "center",
          },
          view14:{
            flexDirection:"row",
            alignItems:"center",
            padding:10,
            backgroundColor:colors.buttons,
            top:0,
            left:0,
            right:0,
            paddingTop:20

          },
          text14:{
            fontWeight:"bold",
            marginLeft:40,
            color:colors.black,
            fontSize:18
            
          },
          view15:{
            marginTop:5,
            paddingBottom:20
          }

          

})