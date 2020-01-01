import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableHighlight } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';
import Country from '../SearchOutcome/Country';
import HomeBooking from './HomeBooking';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
const { height, width } = Dimensions.get('window')

class HomeDetail extends Component {
    onPress = () => {
        alert('d')
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView scrollEventThrottle={20} alignItems='center' showsVerticalScrollIndicator={false}>
                    <View style={{ width: width, height: 180 }}>
                        <Image
                            source={require('../../../assets/home1.jpg')}
                            style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }} />
                    </View>
                    <View style={{ padding: 15 }}>
                        <Text style={{ fontSize: 30 }}>Noma Hotel</Text>
                        <Text style={{ fontSize: 20, }}>Singapore</Text>
                        <Text style={{ fontSize: 15, paddingTop: 8, paddingLeft: 10 }}>Host by: Anna Swift</Text>
                        <Text style={{ fontSize: 15, paddingTop: 8, paddingLeft: 10 }}>Entire Home:8 guests-2 bedrooms-4 beds-3 baths</Text>
                        <Text style={{ fontSize: 15, paddingTop: 8, paddingLeft: 10 }}>Nights limit: 3</Text>
                    </View>
                    <View style={{ padding: 15, height: 250 }}>
                        <Text style={{ fontSize: 20, fontWeight: '700' }}>The location</Text>
                        <MapView
                            style={{ flex: 1 }}
                            region={{ latitude: 42.882004, longitude: 74.582748, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}
                            showsUserLocation={true} />
                    </View>
                    <View style={{ padding: 15, flexDirection: 'column' }}>
                        <Text style={{ fontSize: 20, fontWeight: '700', paddingBottom: 10 }}>Review</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 2, flexDirection: 'row' }}>
                                <TouchableHighlight underlayColor='#ff7479' style={styles.button} >
                                    <Icon name="user"
                                        color='#FF5A60'
                                        size={25}
                                        style={styles.icon}
                                    />
                                </TouchableHighlight>
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={{ fontSize: 15, fontWeight: '680', paddingBottom: 5 }}>Sam Smith</Text>
                                    <Text style={{ fontSize: 13, }}>This is great</Text>
                                </View>
                            </View>

                            <Icon name="star"
                                color='#FF5A60'
                                size={18}
                                style={styles.icon}
                            />
                            <Icon name="star"
                                color='#FF5A60'
                                size={18}
                                style={styles.icon}
                            />
                            <Icon name="star"
                                color='#FF5A60'
                                size={18}
                                style={styles.icon}
                            />
                            <Icon name="star"
                                color='#dddddd'
                                size={18}
                                style={styles.icon}
                            />
                            <Icon name="star"
                                color='#dddddd'
                                size={18}
                                style={styles.icon}
                            />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ fontSize: 20, fontWeight: '700', padding: 15 }}>Similar Home</Text>
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

                        </ScrollView>
                    </View>
                </ScrollView>
                <View alignItems='center'>
                    <TouchableHighlight underlayColor='grey'
                        onPress={() => this.props.navigation.navigate('HomeBooking')}
                        style={{ height: 30, width: width - 30, borderRadius: 5, alignItems: 'center', backgroundColor: '#FF5A60' }}>
                        <Text style={{ color: 'white', fontSize: 18 }}>Request to booking</Text>
                    </TouchableHighlight>
                </View>
            </View >
        );
    }
}

//export default HomeDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    icon: {
        marginRight: 0,
        marginTop: -2,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 45,
        width: 48,
        height: 48,
        backgroundColor: '#ffa7aa',
        marginRight: 20,
    },
});

const RootStack = createStackNavigator(
    {
        HomeDetail: {
            screen: HomeDetail,
            navigationOptions: {
                header: null,
                footer: null
            }
        },
        HomeBooking: {
            screen: HomeBooking,
            navigationOptions: {
                header: null,
                footer: null
            }
        },
    },
    {
        initialRouteName: 'HomeDetail',
    }
);

const AppContainer = createAppContainer(RootStack);
export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}