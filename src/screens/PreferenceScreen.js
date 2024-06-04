import React, { Component } from 'react';
import { Text, StyleSheet, View, ScrollView, Image, Platform, TouchableOpacity } from 'react-native';
import { colors } from '../global/styles';
import { Icon, CheckBox } from 'react-native-elements';
import { menuDetailedData } from '../global/Data';

export default class PreferenceScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      preference: menuDetailedData[this.props.route.params.index].preferenceData,
      required: menuDetailedData[this.props.route.params.index].required,
      minimum_quantity: menuDetailedData[this.props.route.params.index].minimum_quatity,
      paymentSuccess: false,
    };
  }

  handleAddToCart = () => {
    this.setState({ paymentSuccess: true }, () => {
      setTimeout(() => {
        this.setState({ paymentSuccess: false });
      }, 2000); // Message will disappear after 2 seconds
    });
  };

  render() {
    const index = this.props.route.params.index;
    const { meal, details, price } = menuDetailedData[index];

    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.header}>
            <Image
              style={styles.backgroundImage}
              source={{ uri: "https://iasbh.tmgrup.com.tr/01382c/650/344/0/35/1365/751?u=https://isbh.tmgrup.com.tr/sbh/2020/02/20/lezzetli-bir-aksam-yemegi-icin-pratik-yemek-tarifleri-1582185048536.jpg" }}
            />
          </View>
          <View style={styles.bar}>
            <Text style={styles.title}>Choose a preference</Text>
          </View>
          <View style={styles.view12}>
            <Icon
              name="arrow-left"
              type="material-community"
              color={colors.cardbackground}
              size={25}
              onPress={() => { this.props.navigation.goBack() }}
            />
          </View>
          <View style={styles.view1}>
            <Text style={styles.text1}>{meal}</Text>
            <Text style={styles.text2}>{details}</Text>
          </View>
          <View style={styles.view2}>
            <Text style={styles.text3}>Choose a meal type</Text>
            <View style={styles.view3}>
              <Text style={styles.text4}>REQUIRED</Text>
            </View>
          </View>
          <View style={styles.view4}>
            <View style={styles.view5}>
              <View style={styles.view6}>
                <CheckBox
                  center
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  checked={true}
                  checkedColor={colors.buttons}
                />
                <Text style={styles.text5}>- - - - -</Text>
              </View>
              <Text style={styles.text6}>R{price.toFixed(2)}</Text>
            </View>
          </View>
          <View>
            {this.state.preference.map(item => (
              <View key={item.id}>
                <View style={styles.view7}>
                  <Text style={styles.text8}>{menuDetailedData[index].preferenceTitle[this.state.preference.indexOf(item)]}</Text>
                  {this.state.required[this.state.preference.indexOf(item)] &&
                    <View style={styles.view9}>
                      <Text style={styles.text7}>{this.state.minimum_quantity[this.state.preference.indexOf(item)]} REQUIRED</Text>
                    </View>
                  }
                </View>
                <View style={styles.view10}>
                  {item.map(items =>
                    <View style={styles.view4} key={items.id}>
                      <View style={styles.view19}>
                        <View style={styles.view6}>
                          <CheckBox
                            center
                            checkedIcon="check-square-o"
                            uncheckedIcon="square-o"
                            checked={false}
                            checkedColor={colors.buttons}
                          />
                          <Text style={{ color: colors.grey2, marginLeft: -10 }}>{items.name}</Text>
                        </View>
                        <Text style={styles.text6}>{items.price.toFixed(2)} TL</Text>
                      </View>
                    </View>
                  )}
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
        <View style={styles.view13}>
          <Text style={styles.text11}>Quantity</Text>
        </View>
        <View style={styles.view14}>
          <View style={styles.view15}>
            <Icon
              name="remove"
              type="material"
              color={colors.black}
              size={25}
              onPress={() => { }}
            />
          </View>
          <Text style={styles.text9}>1</Text>
          <View style={styles.view16}>
            <Icon
              name="add"
              type="material"
              color={colors.black}
              size={25}
              onPress={() => { }}
            />
          </View>
        </View>
        <View style={styles.view17}>
          <TouchableOpacity style={styles.view18} onPress={this.handleAddToCart}>
            <Text style={styles.text10}>Add 1 to Cart 78.21 TL</Text>
          </TouchableOpacity>
        </View>
        {this.state.paymentSuccess && (
          <View style={styles.paymentSuccessContainer}>
            <Text style={styles.paymentSuccessText}>Payment Successful</Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  fill: { flex: 1 },
  content: { flex: 1 },
  header: {
    width: "100%",
    backgroundColor: colors.buttons,
    overflow: 'hidden',
    height: 180,
  },
  backgroundImage: {
    width: "100%",
    height: 180,
    resizeMode: 'cover',
  },
  bar: {
    backgroundColor: 'transparent',
    marginTop: Platform.OS === 'ios' ? 28 : 38,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  title: {
    color: 'white',
    fontSize: 28,
    fontWeight: "bold",
    marginLeft: 40,
  },
  view1: {
    backgroundColor: "white",
    padding: 10,
    marginBottom: 10,
  },
  text1: {
    fontSize: 15,
    color: colors.grey1,
    fontWeight: "bold",
  },
  text2: {
    fontSize: 14,
    color: colors.grey2,
    marginTop: 5,
  },
  view2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text3: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.grey1,
    marginLeft: 10,
  },
  view3: {
    borderWidth: 3,
    borderColor: colors.grey5,
    borderRadius: 5,
    marginRight: 10,
  },
  text4: {
    fontWeight: "bold",
    color: colors.grey3,
    padding: 5,
  },
  view4: {
    backgroundColor: "white",
    marginBottom: 10,
  },
  view5: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 10,
  },
  view6: {
    flexDirection: "row",
    alignItems: "center",
  },
  text5: {
    fontWeight: "bold", marginLeft: -10,
  },
  text6: {
    fontSize: 16, fontWeight: "bold",
  },
  view7: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text8: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.grey1,
    marginLeft: 10,
  },
  view9: {
    borderWidth: 3,
    borderColor: colors.grey5,
    borderRadius: 5,
    marginRight: 10,
  },
  text7: {
    fontWeight: "bold",
    color: colors.grey3,
    padding: 5,
  },
  view10: {
    backgroundColor: "white",
    marginBottom: 10,
  },
  view11: {
    flexDirection: "row",
    alignItems: "center",
  },
  view12: {
    position: "absolute",
    top: 35,
    left: 15,
  },
  view13: {
    paddingBottom: 0,
    marginTop: 5,
  },
  text11: {
    paddingLeft: 10,
    fontWeight: "bold",
    fontSize: 18,
    color: colors.grey3,
  },
  view14: {
    flexDirection: "row",
    backgroundColor: colors.cardbackground,
    paddingVertical: 5, marginBottom: 0,
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 5,
  },
  view15: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.lightgreen,
    alignItems: "center",
    justifyContent: "center",
  },
  text9: {
    fontWeight: "bold",
    fontSize: 18,
  },
  view16: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.lightgreen,
    alignItems: "center",
    justifyContent: "center",
  },
  view17: {
    alignItems: "center",
    padding: 10,
    backgroundColor: colors.cardbackground,
    marginTop: -5,
  },
  view18: {
    backgroundColor: colors.buttons,
    alignItems: "center",
    paddingVertical: 5,
    marginBottom: 0,
    width: 320,
    borderRadius: 12,
  },
  text10: {
    padding: 10,
    fontWeight: "bold",
    fontSize: 18,
  },
  view19: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 10,
  },
  paymentSuccessContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -100 }, { translateY: -50 }],
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 20,
    borderRadius: 10,
  },
  paymentSuccessText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
