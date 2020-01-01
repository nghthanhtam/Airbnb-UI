// import React, { Component } from 'react';
// import { StyleSheet, Text, View, Button } from 'react-native';

// class Profile extends Component {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Text>Profile</Text>
//             </View>
//         );
//     }
// }

// export default Profile;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });


import * as React from 'react';
import { Button, View, Text, Dimensions, Image, TouchableHighlight } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './SearchOutcome/Home'


const { height, width } = Dimensions.get('window')
class Profile extends React.Component {
    render() {
        return (
            <TouchableHighlight onPress={() => this.props.navigation.navigate('HomeDetail')} underlayColor='transparent'>
                <View style={{ width: width - 40, height: 200, marginBottom: 15, marginLeft: 15 }}>
                    <View style={{ flex: 2 }}>
                        <Image
                            source={require('../../assets/home1.jpg')}
                            style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }} />
                        <View >
                            <Text style={{ fontSize: 18 }}>Noma Hotel</Text>
                            <Text style={{ fontSize: 14, color: '#018F84' }}>21</Text>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}


const RootStack = createStackNavigator(
    {
        Profile: Profile,
        Home: Home,
    },
    {
        initialRouteName: 'Profile',
    }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}