import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, TouchableHighlight, TextInput, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const { height, width } = Dimensions.get('window')

class HomeBooking extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView scrollEventThrottle={16} showsVerticalScrollIndicator={false}>
                    <View style={{ padding: 15, flexDirection: 'column' }}>
                        <Text style={{ fontSize: 20, paddingBottom: 30 }}>Things to keep in mind</Text>
                        <View style={{ flexDirection: 'row', flex: 1, paddingBottom: 20 }}>
                            <Icon name="home"
                                color='#FF5A60'
                                size={25}
                                style={styles.icon}
                            />
                            <Text style={{ fontSize: 15, fontWeight: '680', paddingLeft: 50 }}>Suitable for children and infants</Text>
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
                    <View style={{ padding: 15, }}>
                        <Text style={{ fontSize: 20, paddingBottom: 5 }}>Confirm your number</Text>

                        <TextInput style={styles.phoneInput}
                            placeholder="Your phone number...">

                        </TextInput>
                    </View>

                    {/* <View style={styles.checkoutButton}>
                        <TouchableHighlight underlayColor='grey'
                            onPress={this.onPress}>
                            <Text style={{ color: 'white', textAlign: 'center', fontSize: 15 }}>Checkout</Text>
                        </TouchableHighlight >
                    </View> */}
                </ScrollView>
                <View alignItems='center' >
                    <TouchableHighlight
                        textAlign='center'
                        underlayColor='grey'
                        onPress={() => this.props.navigation.navigate('HomeBooking')}
                        style={{ height: 30, width: width - 30, borderRadius: 5, alignItems: 'center', backgroundColor: '#FF5A60' }}>
                        <Text style={{ color: 'white', fontSize: 18 }}>Confirm</Text>
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
    textInput: {
        textAlignVertical: 'top',
        height: 80,
        width: width - 100,
        borderColor: 'gray',
        borderWidth: 1,
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
    }
});

