import React from 'react';
import { StyleSheet, SafeAreaView, View, Image, Text, ScrollView, TextInput, Pressable, FlatList, Dimensions } from "react-native";
// import houses from '../consts/houses';
import Icon from 'react-native-vector-icons/MaterialIcons';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
import houses from '../consts/houses';
const { width } = Dimensions.get('screen');

const HomeScreen = ({ navigation, route }) => {
    const ListCategories = () => {
        const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(
            0,
        );
        const categoryList = ['Popular', 'Recommended', 'Nearest'];
        return (
            <View style={style.categoryListContainer}>
                {categoryList.map((category, index) => (
                    <Pressable
                        key={index}
                        onPress={() => setSelectedCategoryIndex(index)}>
                        <Text style={[style.categoryListText, index == selectedCategoryIndex && style.activeCategoryListText,]}>
                            {category}
                        </Text>
                    </Pressable>
                ))}
            </View>
        );
    };
    const ListOption = () => {
        const optionList = [
            { title: 'Buy a home', img: require('../assets/img3.jpg') },
            { title: 'Rent a Home', img: require('../assets/img4.jpg') },
        ];
        return (
            <View style={style.optionListContainer}>
                {optionList.map((option, index) => (
                    <View style={style.optionCard} key={index}>
                        <Image source={option.img} style={style.optionCardImage} />
                        <Text style={{ marginTop: 10, fontSize: 18, fontWeight: 'bold' }}>
                            {option.title}
                        </Text>
                    </View>
                ))}
            </View>
        );
    };

    const Card = ({ house }) => {
        return (
            <Pressable onPress={() => navigation.navigate('DetailScreen', house)}>
                <View style={style.card}>
                    <Image source={house.image} style={style.cardImage} />
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 10,
                        }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{house.title}</Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'blue' }}>$1500</Text>
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
                </View>
            </Pressable>
        );
    };

    return (
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
            <View style={style.header}>
                <View>
                    <Text style={{}}>Location</Text>
                    <Text style={{ color: 'balck', fontSize: 20, fontWeight: 'bold' }}>Canada</Text>
                </View>
                <Image source={require('../assets/img2.jpg')} style={style.profileImage} />
            </View>
            <ScrollView>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 20,
                }}>
                    <View style={style.searchInputContainer}>
                        <Icon name="search" size={25} color='grey' />
                        <TextInput placeholder="Search address,city,location" />
                    </View>
                    <View style={style.sortBtn}>
                        <Icon name="tune" color='white' size={25} />
                    </View>
                </View>
                <ListOption />
                <FlatList
                    snapToInterval={width - 20}
                    contentContainerStyle={{ paddingLeft: 20, paddingVertical: 20 }}
                    showsHorizontalScrollIndicator={false}
                    horizontal data={houses}
                    renderItem={({ item }) => <Card house={item} />}
                />
            </ScrollView>
        </SafeAreaView>
    );
};
const style = StyleSheet.create({
    header: {
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },

    profileImage: {
        height: 50,
        width: 50,
        borderRadius: 25,
    },

    searchInputContainer: {
        height: 50,
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    sortBtn: {
        backgroundColor: 'black',
        height: 50,
        width: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
    optionListContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
        paddingHorizontal: 20,
    },
    optionCard: {
        height: 210,
        width: width / 2 - 30,
        elevation: 15,
        backgroundColor: 'white'
    },
    optionCardImage: {
        height: 140,
        borderRadius: 10,
        width: '100%',
    },
    categoryListContainer: {
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 40,
    },
    categoryListText: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingBottom: 5,
        color: 'grey',
    },
    activeCategoryListText: {
        color: 'black',
        borderBottomWidth: 1,
        paddingBottom: 5,
    },
    card: {
        height: 250,
        backgroundColor: 'white',
        elevation: 10,
        width: width - 40,
        marginRight: 20,
        padding: 15,
        borderRadius: 20,
    },
    cardImage: {
        width: '100%',
        height: 120,
        borderRadius: 15,

    },
    facility: {
        flexDirection: 'row',
        marginRight: 15,
    },
    facilityText: {
        marginLeft: 5,
        color: 'grey',
    },
});
export default HomeScreen;