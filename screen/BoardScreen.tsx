import React from "react";
import { StyleSheet, SafeAreaView, StatusBar, View, Image, Text } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/";
const BoardScreen = ({ navigation, route }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <Image source={require('../assets/img1.jpg')}
                style={style.image}
            />
            
            <View style={style.indicatorContainer}>
                <View style={style.indicator} />
                <View style={style.indicator} />
                <View style={[style.indicator, style.indicatorActive]} />
            </View>
            <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
                <View>
                    <Text style={style.title}>Find Your</Text>
                    <Text style={style.title}>sweet home</Text>
                </View >

                <View style={{ marginTop: 10 }}>
                    <Text style={style.textStyle}>
                        Schedule visits in just a few clicks
                    </Text>
                    <Text style={style.textStyle}>
                        visit in just a few clicks
                    </Text>
                </View>
            </View>
            <View style={{ flex: 1, justifyContent: 'flex-end', paddingBottom: 40 }}>
                <Pressable onPress={() => navigation.navigate("HomeScreen")}>
                    <View style={style.btn}>
                        <Text style={{ color: 'white ' }}>Get Started</Text>
                    </View>
                </Pressable>

            </View>
        </SafeAreaView>
    );
};



const style = StyleSheet.create({
    image: {
        height: 420,
        width: '100%',
        borderBottomLeftRadius: 100,
    },
    indicatorContainer: {
        height: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    indicator: {
        height: 3,
        width: 30,
        backgroundColor: 'grey',
        marginHorizontal: 5,
        borderRadius: 5,
    },
    indicatorActive: {
        backgroundColor: 'black'
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
    },
    textStyle: {
        fontSize: 16,
        colors: 'black',

    },
    btn: {
        height: 60,
        marginHorizontal: 20,
        backgroundColor: 'black',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default BoardScreen;
