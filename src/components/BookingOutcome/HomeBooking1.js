import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, TouchableHighlight, TextInput, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { KeyboardAvoidingView } from 'react-native';
import ConfirmBooking from './ConfirmBooking';
import { Dropdown } from 'react-native-material-dropdown';

const { height, width } = Dimensions.get('window')

class HomeBooking extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        let datayear = [{
            value: '2025',
        }, {
            value: '2026',
        }, {
            value: '2027',
        }];
        let datamonth = [{
            value: '1',
        }, {
            value: '2',
        }, {
            value: '3',
        }, {
            value: '4',
        }, {
            value: '5',
        }, {
            value: '6',
        }, {
            value: '7',
        }, {
            value: '8',
        }, {
            value: '9',
        }, {
            value: '10',
        }, {
            value: '11',
        }, {
            value: '12',
        },
        ];
        return (
            <View style={styles.container}>

                <ScrollView scrollEventThrottle={16} style={{ padding: 15 }} showsVerticalScrollIndicator={false}>

                    <Text style={{ paddingBottom: 20, fontSize: 20, color: '#018F84' }} >Step 2/3</Text>

                    <Text style={{ fontSize: 20, paddingBottom: 10 }}>Confirm and pay</Text>
                    <Text style={{ fontSize: 15, paddingBottom: 10 }}>Card Info*</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Card info*">
                    </TextInput>
                    <Text style={{ fontSize: 15, paddingTop: 20 }}>Expire date*</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <Dropdown
                                label='month'
                                data={datamonth}
                            />
                        </View>
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <Dropdown
                                label='year'
                                data={datayear}
                            />
                        </View>
                    </View>

                    <Text style={{ fontSize: 15, paddingBottom: 10, paddingTop: 15 }}>CVV*</Text>
                    <TextInput
                        style={styles.textInput1}
                        placeholder="CVV*">
                    </TextInput>

                    <Text style={{ fontSize: 15, paddingBottom: 10, paddingTop: 15 }}>First Name*</Text>
                    <TextInput
                        style={styles.textInput1}
                        placeholder="Write your first name...*">
                    </TextInput>

                    <Text style={{ fontSize: 15, paddingBottom: 10, paddingTop: 15 }}>Last Name*</Text>
                    <KeyboardAvoidingView behavior="padding" enabled style={{ flex: 1 }}>
                        <TextInput
                            style={styles.textInput1}
                            placeholder="Write your last name...*">
                        </TextInput>
                        <View style={{ marginBottom: 45 }}></View>
                    </KeyboardAvoidingView>

                </ScrollView>

                <View alignItems='center' >
                    <TouchableHighlight
                        textAlign='center'
                        underlayColor='grey'
                        onPress={() => navigate('ConfirmBooking')}
                        style={{ height: 30, width: width - 30, borderRadius: 5, alignItems: 'center', backgroundColor: '#FF5A60' }}>
                        <Text style={{ color: 'white', fontSize: 18 }}>Next</Text>
                    </TouchableHighlight>
                </View>
            </View >
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

    textInput1: {
        textAlignVertical: 'top',
        height: 30,
        width: width - 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderColor: '#bfbfbf',
        paddingTop: 5,
        paddingLeft: 5,
        marginLeft: 10
    },
    phoneInput: {
        textAlign: 'center',
        height: 30,
        width: width - 200,
        borderColor: 'gray',
        borderWidth: 1,
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
    },
    textInput: {
        textAlignVertical: 'top',
        height: 80,
        width: width - 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderColor: '#bfbfbf',
        paddingTop: 10,
        paddingLeft: 5,
        marginLeft: 10
    },
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