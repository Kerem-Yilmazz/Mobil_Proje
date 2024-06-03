import React from "react";
import { StyleSheet, Text, View, Dimensions, FlatList } from "react-native";
import SearchResultCard from "../components/SearchResultCard";
import { restaurantsData } from "../global/Data";
import { colors } from "react-native-elements";

const SCREEN_WIDTH = Dimensions.get("window").width;

const SearchResultScreen = ({ navigation, route }) => {
    return (
        <View style={styles.container}>
            <View>
                <FlatList
                    style={{ backgroundColor: colors.cardbackground }}
                    data={restaurantsData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <SearchResultCard
                            screenWidth={SCREEN_WIDTH}
                            images={item.images}
                            avarageReview={item.averageReview}
                            numberOfReview={item.numberOfReview}
                            restaurantsName={item.restaurantName}
                            farAway={item.farAway}
                            businessAddress={item.businessAddress}
                            productData={item.productData}
                            onPressRestaurantCard={() => { navigation.navigate("RestaurantHomeScreen" ,{id:index,restaurant:item.restaurantName}) }}
                        />
                    )}
                    ListHeaderComponent={
                        <View>
                            <Text style={styles.listHeader}>{route.params.item} araması için çıkan {restaurantsData.length} sonuç</Text>
                        </View>
                    }
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
    );
}

export default SearchResultScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:20
    },
    listHeader: {
        color: colors.grey1,
        paddingHorizontal: 10,
        fontSize: 20,
        paddingVertical: 10,
        fontWeight: "bold",
    },
});
