import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, TouchableHighlight, TextInput, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { KeyboardAvoidingView } from 'react-native';
import ConfirmBooking from './ConfirmBooking';

const { height, width } = Dimensions.get('window')

class HomeBooking extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <KeyboardAvoidingView behavior="padding" enabled style={{ flex: 1 }}>
                <View style={styles.container}>

                    <ScrollView scrollEventThrottle={16} showsVerticalScrollIndicator={false}>
                        <View style={{ flex: 1, }}>
                            <Text style={{ padding: 15, paddingBottom: 8, fontSize: 20, color: '#018F84' }} >Step 1/3</Text>
                            {/* <TouchableHighlight underlayColor='white'
                            onPress={() => this.props.navigation.navigation('Home')}
                            style={{ height: 60, backgroundColor: 'white' }}>
                            <Icon
                                style={{ padding: 20 }}
                                name="long-arrow-left"
                                color='black'
                                size={25}
                            />
                        </TouchableHighlight> */}
                        </View>
                        <View style={{ padding: 15, flexDirection: 'column' }}>
                            <Text style={{ fontSize: 20, paddingBottom: 30 }}>Things to keep in mind</Text>
                            <View style={{ flexDirection: 'row', flex: 1, paddingBottom: 20 }}>
                                <Icon name="home"
                                    color='#FF5A60'
                                    size={25}
                                    style={styles.icon}
                                />
                                <Text style={{ fontSize: 15, fontWeight: '600', paddingLeft: 50 }}>Suitable for children and infants</Text>
                            </View>
                            <View style={{ flexDirection: 'row', flex: 1, paddingBottom: 20 }}>
                                <Icon name="paw"
                                    color='#FF5A60'
                                    size={25}
                                    style={styles.icon}
                                />
                                <Text style={{ fontSize: 15, fontWeight: '680', paddingLeft: 50 }}>Pets allowed</Text>
                            </View>
                            <View style={{ flexDirection: 'row', flex: 1, paddingBottom: 20 }}>
                                <Icon name="birthday-cake"
                                    color='#FF5A60'
                                    size={25}
                                    style={styles.icon}
                                />
                                <Text style={{ fontSize: 15, fontWeight: '680', paddingLeft: 50 }}>Parties allowed</Text>
                            </View>
                            <View style={{ flexDirection: 'row', flex: 1, paddingBottom: 20 }}>
                                <Icon name="ban"
                                    color='#FF5A60'
                                    size={25}
                                    style={styles.icon}
                                />
                                <Text style={{ fontSize: 15, fontWeight: '680', paddingLeft: 50 }}>No smoking</Text>
                            </View>
                        </View>
                        <View style={{ padding: 15, flexDirection: 'column' }}>
                            <Text style={{ fontSize: 20, paddingBottom: 30 }}>Tell your host about your trip</Text>
                            <View style={{ flex: 2, flexDirection: 'row' }}>
                                <TouchableHighlight underlayColor='#ff7479' style={styles.button} >
                                    <Icon name="user"
                                        color='#FF5A60'
                                        size={20}
                                        style={styles.icon}
                                    />
                                </TouchableHighlight>
                                <View style={{ flexDirection: 'column' }}>
                                    <TextInput style={styles.textInput}
                                        placeholder="Text your host something...">

                                    </TextInput>
                                </View>
                            </View>
                        </View>
                        <KeyboardAvoidingView behavior="padding" enabled style={{ flex: 1 }}>
                            <View style={{ padding: 15, }}>
                                <Text style={{ fontSize: 20, paddingBottom: 5 }}>Type your email</Text>

                                <TextInput style={styles.phoneInput}
                                    placeholder="Your email...">
                                </TextInput>
                            </View>
                        </KeyboardAvoidingView>
                    </ScrollView>
                    <View alignItems='center' >
                        <TouchableHighlight
                            textAlign='center'
                            underlayColor='grey'
                            onPress={() => navigate('HomeBooking1')}
                            style={{ height: 30, width: width - 30, borderRadius: 5, alignItems: 'center', backgroundColor: '#FF5A60' }}>
                            <Text style={{ color: 'white', fontSize: 18 }}>Next</Text>
                        </TouchableHighlight>
                    </View>
                </View >
            </KeyboardAvoidingView>
        );
    }
}

export default HomeBooking;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    icon: {
        marginRight: 0,
        marginTop: -2,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        width: 40,
        height: 40,
        backgroundColor: '#ffa7aa',
        marginRight: 20,
    },
    chatbox: {
        minHeight: 20,
        minWidth: 40,
        padding: 11,
        //backgroundColor: '#018f84',
        borderColor: '#dddddd',
        borderWidth: 1,
        borderRadius: 2,
        justifyContent: 'center',
    },
    textInput: {
        textAlignVertical: 'top',
        height: 80,
        width: width - 100,
        borderColor: 'gray',
        borderWidth: 1,
        paddingTop: 5,
        paddingLeft: 5,
    },
    phoneInput: {
        height: 30,
        width: width - 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 10
    },
    checkoutButton: {
        height: 38,
        width: 85,
        borderRadius: 5,
        position: 'absolute',
        top: height - 180,
        left: width - 90,
        backgroundColor: '#FF5A60',
        justifyContent: 'center',
    }
});

// const RootStack = createStackNavigator(
//     {
//         HomeBooking: {
//             screen: HomeBooking,
//             navigationOptions: {
//                 header: null,
//                 footer: null
//             }
//         },
//          Home: {
//              screen: Home,
//              navigationOptions: {
//                  header: null,
//                  footer: null
//              }
//          },
//         ConfirmBooking: {
//             screen: ConfirmBooking,
//             navigationOptions: {
//                 header: null,
//                 footer: null
//             }
//         },
//     },
//     {
//         initialRouteName: 'HomeBooking',
//     }
// );


// const AppContainer = createAppContainer(RootStack);
// export default class App extends React.Component {
//     render() {
//         return <AppContainer />;
//     }
// }