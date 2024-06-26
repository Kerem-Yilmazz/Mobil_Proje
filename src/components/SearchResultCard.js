import React from "react";
import { StyleSheet,Text,View,ImageBackground,TouchableOpacity,FlatList } from "react-native";
import {Icon} from "react-native-elements"
import { colors } from "../global/styles";
import { Image } from "react-native-animatable";
import ProductCard from "./ProductCard";
import { productData } from "../global/Data";


const SearchResultCard = ({
    onPressRestaurantCard,
    restaurantsName,
    deliveryAvaliable,
    discountAvaliable,
    discountPercent,
    numberOfReview,
    businessAddress,
    farAway,
    avarageReview,
    images,
    productData
    
} ) =>{


    return(
      
        <View style={{marginBottom: 20}}>
          <TouchableOpacity onPress={onPressRestaurantCard}>
            <View style={styles.view1}>
                <View style={{height:150}}>
                    <ImageBackground
                        style={{height:160}}
                        source={{uri:images}}
                        imageStyle = {styles.imageStyle}
                    />

                    <View style={styles.image}>
                        <Text style = {styles.text1}>{avarageReview}</Text>
                        <Text style = {styles.text1}>{numberOfReview} reviews</Text>
                        <Text></Text>
                    </View>

                </View>

                <View style ={styles.view3}>
                    <View style={{paddingTop:5}}>
                        <Text styles={styles.text5}>{restaurantsName}</Text>
                    </View>
                    <View style = {{flexDirection:"row"}}>
                        <View style ={styles.view4}>
                            <Icon
                                name="place"
                                type="material"
                                color={colors.CardComment}
                                size={18}
                                iconStyle={{marginTop:3,marginLeft:5}}
                            />
                            <Text style={styles.view5}>{farAway} Dk</Text>
                        </View>
                        <View style={{flex:9}}>
                            <Text style={styles.text6}>{businessAddress}</Text>
                        </View>
                    </View>
                </View>
            </View>
            
            </TouchableOpacity>
            <View style = {{marginTop:5,paddingBottom:20}}>
                
            <FlatList
                style ={{backgroundColor:colors.cardbackground}}
                data = {productData}
                keyExtractor={(item,index)=>index.toString()}
                renderItem={({item,index})=>(
                    <ProductCard 
                    image ={item.image}
                    productName={item.name}
                    price = {item.price}
                     />

                )}            
                horizontal={true}
            />
                

               
            </View>
        </View>
    )
}

export default SearchResultCard

const styles = StyleSheet.create({
    view1: {
        marginHorizontal: 9,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
    },
        image: {
          position: "absolute",
          top: 0,
          right: 0,
          backgroundColor: "rgba(52, 52, 52, 0.4)",
          padding: 2,
          alignItems: "center",
          justifyContent: "center",
          borderTopRightRadius: 5,
          borderBottomLeftRadius: 12,
        },
          imageStyle: {
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
          },
          
        
        text1: {
          color: "white",
          fontSize: 20,
          fontWeight: "bold",
          marginTop: -3,
        },
        text2: {
            color: "white",
            fontSize: 13,
            marginRight: 0,
            marginLeft: 0,
          },
          view2: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: -5,
          },
          text3: {
            fontSize: 10,
            fontWeight: "bold",
            color: colors.grey2,
          },
          text4: {
            fontSize: 10,
            fontWeight: 'bold',
            color: colors.grey2,
          },
          view3: {
              flexDirection: "column",
              marginHorizontal: 5,
              marginBottom: 10,
              marginLeft: 0,
              marginTop:5,
          },
              text5: {
                fontSize: 17,
                fontWeight: 'bold',
                color: colors.grey1,
              },
              view4: {
                flexDirection: "row",
                borderWidth: 1,
                borderColor: "grey",
                paddingHorizontal: 5,

              },
              
              view5: {
                fontSize: 12,
                fontWeight: "bold",
                paddingTop: 5,
                color:"colors.grey"
              },
              
              text6:{
                fontSize:15,
                fontWeight:"bold",
                paddingSize :2,
                color:"colors.grey10",
              },
           
})
