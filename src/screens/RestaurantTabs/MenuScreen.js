import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "react-native-elements";
import { Icon } from "react-native-elements"; 
import { specialData, menuData ,} from "../../global/Data";

const MenuScreen = ({ navigation, restaurant,onPress }) => {
  

  // Kontrol edilmesi gereken nokta: specialData ve menuData'nın tanımlı olduğundan emin olun
  if (!specialData || !menuData) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Veriler yüklenemedi</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View>
        {specialData.map((items) => (
          <View key={items.key} style={styles.view1}>
            <TouchableOpacity onPress={onPress}>
              <View style={styles.view2}>
                <Icon name="star" type="material-community" color="gold" />
                <Text style={styles.text1}>{items.title}</Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <View>
        {menuData.map((items) => (
          <View key={items.key} style={styles.view1}>
            <TouchableOpacity onPress={onPress}>
              <View style={styles.view2}>
                <Text style={styles.text1}>{items.title}</Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};


export default MenuScreen


const styles = StyleSheet.create({
   
   container:{
        flex:1,
        marginTop:20
        
   },
    view1:{paddingHorizontal:10},

    view2:{flexDirection:"row",
        alignItems:"center",
        borderBottomWidth:1,
        padding:10,
        borderBottomColor:colors.grey5
    },
        text1:{color:colors.grey3,
            fontSize:18,
            fontWeight:"bold"
        }
})