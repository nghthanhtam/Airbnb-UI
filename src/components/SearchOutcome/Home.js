import React, { Component } from 'react';
import {
    StyleSheet, Text, View, SafeAreaView, TextInput, Animated,
    ScrollView, Image, TouchableHighlight, Dimensions
} from 'react-native';
import FilterBox from './FilterBox'
import DropdownBox from './DropdowBox';
import Country from './Country'
import Hotel from './Hotel'
import HomeDetail from './../BookingOutcome/HomeDetail'
import Icon from 'react-native-vector-icons/FontAwesome';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import { YellowBox } from 'react-native';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdowBox: false,
            name: '',
            marginLeft: 0,
            visibleModal: true,
            height: 128,
        }
    }

    onPress = (name) => {
        if (this.state.dropdowBox === false) {
            this.setState({ dropdowBox: true })
            this.setState({ name: name })
            this.setState({ height: 240 })
        } else {
            this.setState({ dropdowBox: false })
            this.setState({ height: 125 })
        }
        if (name === 'Dates') this.setState({ marginLeft: 0 })
        else if (name === 'Types') this.setState({ marginLeft: 100 })
        else if (name === 'Guests') this.setState({ marginLeft: 5 })
        else if (name === 'Prices') this.setState({ marginLeft: 150 })
        else this.setState({ marginLeft: 150 })
    }
    visibleModal = (visible) => {
        this.setState({ visibleModal: visible })
    }

    render() {
        const { dropdowBox, height } = this.state;
        return (
            <View >
                <SafeAreaView style={{ zIndex: 0 }}>
                    <View style={{ height: height, paddingTop: 30 }}>
                        {/* <View style={styles.safeAreaView}>
                        </View> */}
                        <View style={styles.searchField}>
                            <Icon name="search" size={20} color="grey" />
                            <TextInput
                                style={styles.searchInput}
                                placeholder="Try new with Hogo"
                                placeholderTextColor="grey"
                            />
                        </View>
                        <Animated.View style={{ flexDirection: "row", padding: 10, position: 'relative', justifyContent: 'space-between' }}>
                            <FilterBox name="Dates" onPress={() => this.onPress('Dates')} />
                            <FilterBox name="Guests" onPress={() => this.onPress('Guests')} />
                            <FilterBox name="Types" onPress={() => this.onPress('Types')} />
                            <FilterBox name="Prices" onPress={() => this.onPress('Prices')} />
                            <FilterBox name="Filters" onPress={() => this.onPress('Filters')} />
                        </Animated.View>
                        {dropdowBox ? (
                            <Animated.View style={{ flexDirection: "row", position: 'relative', justifyContent: 'space-between' }}>
                                <DropdownBox name={this.state.name} marginLeft={this.state.marginLeft} />
                            </Animated.View>) : null}
                    </View>
                </SafeAreaView>

                <ScrollView scrollEventThrottle={20} showsVerticalScrollIndicator={false}>
                    <View style={{ flex: 1, paddingTop: 60 }}>
                        <Text style={{ fontSize: 22, fontWeight: '600', paddingHorizontal: 14 }}>Travel around the world</Text>
                    </View>
                    <View style={{ flex: 1, paddingTop: 20 }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <Country
                                imageUri={require('../../../assets/home1.jpg')}
                                name="Noma Hotel" />
                            <Country
                                imageUri={require('../../../assets/home2.jpg')}
                                name="Noma Hotel" />
                            <Country
                                imageUri={require('../../../assets/home3.jpg')}
                                name="Noma Hotel" />
                            <Country
                                imageUri={require('../../../assets/home4.jpeg')}
                                name="Noma Hotel" />
                        </ScrollView>
                    </View>
                    <View style={{ flex: 1, paddingTop: 30 }}>
                        <Text style={{ fontSize: 22, fontWeight: '600', paddingHorizontal: 14 }}>Travel around the world</Text>
                    </View>
                    <View style={{ flex: 1, paddingTop: 20 }}>
                        <Hotel
                            onPress={() => this.props.navigation.navigate('HomeDetail')}
                            imageUri={require('../../../assets/home1.jpg')}
                            name="Noma Hotel"
                            price="$90/night" />
                        <Hotel
                            onPress={() => this.props.navigation.navigate('HomeDetail')}
                            imageUri={require('../../../assets/home2.jpg')}
                            name="Noma Hotel"
                            price="$120/night" />
                        <Hotel
                            onPress={() => this.props.navigation.navigate('HomeDetail')}
                            imageUri={require('../../../assets/home3.jpg')}
                            name="Noma Hotel"
                            price="$200/night" />
                        <Hotel
                            imageUri={require('../../../assets/white.jpg')}
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }
}

//export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    safeAreaView: {
        height: 80,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#dddddd'
    },
    searchInput: {
        flex: 1,
        paddingLeft: 20,
        fontWeight: '300',
        backgroundColor: 'white',
    },
    searchField: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: 'white',
        marginHorizontal: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
        justifyContent: 'center',
    },
    text: {
        fontWeight: '700',
        fontSize: 12
    }

});

const RootStack = createStackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                header: null,
            }
        },
        HomeDetail: {
            screen: HomeDetail,
            navigationOptions: {
                header: null,
            }
        },
    },
    {
        initialRouteName: 'Home',
    }
);

const AppContainer = createAppContainer(RootStack);
export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}
