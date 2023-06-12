import React from 'react';
import { StyleSheet, SafeAreaView, View, Image, Text, ScrollView, TextInput, Pressable, FlatList, Dimensions, ImageBackground } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
const { width } = Dimensions.get('screen');

const DetailScreen = ({ navigation, route }) => {
    const house = route.params;
    const InteriorImage = ({ image }) => {
        return <Image source={image} style={style.InteriorImage} />;
    };
    return (
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
            <ScrollView>
                <View style={style.backGroundImageContainer}>
                    <ImageBackground style={style.backGroundImage} source={house.image}>
                        <View style={style.header}>
                            <View style={style.headerBtn}>
                                <Icon name='arrow-back-ios'
                                    size={20}
                                    onPress={navigation.goBack} />
                            </View >
                            <View style={style.headerBtn}>
                                <Icon name='favorite' size={20} color='red' />
                            </View>
                        </View>
                    </ImageBackground>
                    <View style={style.virtualTag}>
                        <Text style={{ color: 'white' }}>Virtual Tour</Text>
                    </View>
                </View>
                <View style={style.detailsContainer}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{house.title}</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={style.ratingTag}>
                                <Text style={{ color: 'white' }}>3.5</Text>
                            </View>
                            <Text style={{ fontSize: 13, marginLeft: 5 }}>155 ratings</Text>
                        </View>
                    </View>
                    <Text style={{ color: 'grey', fontSize: 14, marginTop: 5 }}>
                        {house.location}
                    </Text>
                    <View style={{ marginTop: 10, flexDirection: 'row' }}>
                        <View style={style.facility}>
                            <Icon name="hotel" size={20} />
                            <Text style={style.facilityText}>3</Text>
                        </View>
                        <View style={style.facility}>
                            <Icon name="bathtub" size={20} />
                            <Text style={style.facilityText}>3</Text>
                        </View>
                        <View style={style.facility}>
                            <Icon name="aspect-ratio" size={20} />
                            <Text style={style.facilityText}>100m area</Text>
                        </View>
                    </View>
                    <Text style={{ marginTop: 20, color: 'grey' }}>{house.details}</Text>
                    <FlatList horizontal
                        showsHorizontalScrollIndicator={false}
                        data={house.interiors}
                        renderItem={({ item }) => <InteriorImage image={item} />}
                    />
                    <View style={style.bookNowBtn}>
                        <Text style={{ color: 'white' }}>Book Now</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};


const style = StyleSheet.create({
    backGroundImageContainer: {
        elevation: 20,
        marginHorizontal: 20,
        marginTop: 20,
        alignItems: 'center',
        height: 350,
    },
    backGroundImage: {
        height: '100%',
        width: '100%',
        overflow: 'hidden',
        borderRadius: 20,
    },
    header: {
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    headerBtn: {
        height: 50,
        width: 50,
        backgroundColor: 'white',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    virtualTag: {
        top: -20,
        width: 120,
        backgroundColor: 'black',
        paddingHorizontal: 20,
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    detailsContainer: {
        flex: 1,
        paddingHorizontal: 20,
        marginTop: 40,
    },
    ratingTag: {
        height: 30,
        width: 35,
        backgroundColor: 'blue',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    facility: {
        flexDirection: 'row',
        marginRight: 15,
    },
    facilityText: {
        marginLeft: 5,
        color: 'grey',
    },
    InteriorImage: {
        width: width / 3 - 20,
    },
    bookNowBtn: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        borderRadius: 10,
        paddingHorizontal: 20,
    },
});


export default DetailScreen;