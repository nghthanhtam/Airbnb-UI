import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Dimensions, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './SearchOutcome/Home';
import HomeDetail from './BookingOutcome/HomeDetail';
import HomeBooking from './BookingOutcome/HomeBooking'
import HomeBooking1 from './BookingOutcome/HomeBooking1'
import ConfirmBooking from './BookingOutcome/ConfirmBooking'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const { width } = Dimensions.get('window')

class Saved extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHeart: true,
            isGone: false,
            isHeart1: true,
            isGone1: false,
        }
    }

    onPress = () => {
        this.setState({ isHeart: false });

        setTimeout(
            function () {
                this.setState({ isGone: true })
            }.bind(this),
            500
        );
    }

    onPress1 = () => {
        this.setState({ isHeart1: false });

        setTimeout(
            function () {
                this.setState({ isGone1: true })
            }.bind(this),
            500
        );
    }


    render() {
        const { isHeart, isGone,
            isHeart1, isGone1 } = this.state;

        return (
            <ScrollView scrollEventThrottle={20} showsVerticalScrollIndicator={false}>
                <View style={{ flexDirection: 'column', }}>
                    <View style={{ paddingTop: 50, marginLeft: 20, flexDirection: 'column' }}>
                        <Text style={{ fontSize: 30, fontWeight: '700' }}>Favorite listings</Text>
                        <Text style={{ fontSize: 18, color: 'grey' }}>Time to tryout your wish list!</Text>
                    </View>

                    {isGone === false ? (
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('HomeDetail')}
                            underlayColor='transparent'>
                            <View style={{ height: 230, width: 290, marginLeft: 20, marginBottom: 20, marginTop: 20, borderWidth: 0.5, borderColor: '#dddddd' }}>
                                <View style={{ flex: 2 }}>
                                    <Image
                                        source={require('../../assets/home2.jpg')}
                                        style={{ flex: 1, width: null, height: null, resizeMode: 'contain' }} />

                                    <View >
                                        <Text style={{ fontSize: 18, marginLeft: 10 }}>Noma Hotel</Text>
                                        <Text style={{ fontSize: 14, marginBottom: 10, marginLeft: 10, color: '#018F84' }}>$120/night</Text>
                                    </View>
                                </View>

                                {isHeart ? (
                                    <Icon
                                        onPress={this.onPress}
                                        name="heart"
                                        color='#FF5A60'
                                        size={25}
                                        style={styles.icon}
                                    />
                                ) :
                                    <Icon
                                        onPress={this.onPress}
                                        name="heart"
                                        color='#dddddd'
                                        size={25}
                                        style={styles.icon}
                                    />}
                            </View>
                        </TouchableHighlight>
                    ) : null}

                    {isGone1 === false ? (
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('HomeDetail')}
                            underlayColor='transparent'>
                            <View style={{ height: 230, width: 290, marginLeft: 20, marginBottom: 30, borderWidth: 0.5, borderColor: '#dddddd' }}>
                                <View style={{ flex: 2 }}>
                                    <Image
                                        source={require('../../assets/home2.jpg')}
                                        style={{ flex: 1, width: null, height: null, resizeMode: 'contain' }} />

                                    <View >
                                        <Text style={{ fontSize: 18, marginLeft: 10 }}>Noma Hotel</Text>
                                        <Text style={{ fontSize: 14, marginBottom: 10, marginLeft: 10, color: '#018F84' }}>$120/night</Text>
                                    </View>
                                </View>

                                {isHeart1 ? (
                                    <Icon
                                        onPress={this.onPress1}
                                        name="heart"
                                        color='#FF5A60'
                                        size={25}
                                        style={styles.icon}
                                    />
                                ) :
                                    <Icon
                                        onPress={this.onPress1}
                                        name="heart"
                                        color='#dddddd'
                                        size={25}
                                        style={styles.icon}
                                    />}
                            </View>
                        </TouchableHighlight>
                    ) : null}

                </View>
            </ScrollView >
        );
    }
}

//export default Saved;

const styles = StyleSheet.create({
    icon: {
        marginRight: 0,
        marginTop: -2,
        position: 'absolute',
        marginLeft: 250,
        marginTop: 180,
    },

});

const RootStack = createStackNavigator(
    {
        Saved: {
            screen: Saved,
            navigationOptions: {
                header: null,
            }
        },
        Home: {
            screen: Home,
            navigationOptions: {
                header: null,
            }
        },
        HomeDetail: {
            screen: HomeDetail,
            navigationOptions: {

            }
        },

        HomeBooking: {
            screen: HomeBooking,
            navigationOptions: {

            }
        },
        HomeBooking1: {
            screen: HomeBooking1,
            navigationOptions: {

            }
        },
        ConfirmBooking: {
            screen: ConfirmBooking,
            navigationOptions: {

            }
        },
    },
    {
        initialRouteName: 'Saved',
    }
);

const AppContainer = createAppContainer(RootStack);
export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}
