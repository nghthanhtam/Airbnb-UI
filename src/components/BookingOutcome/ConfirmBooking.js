import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Dimensions, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Loader from '../Loader';
const { height, width } = Dimensions.get('window')

class ConfirmBooking extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isLoading: false }
    }
    onPress = () => {

        this.setState({ isLoading: true })
        setTimeout(
            function () {
                this.props.navigation.navigate('Home');
                this.setState({ isLoading: false })
            }.bind(this),
            2500
        );
    }
    render() {
        const { isLoading } = this.state;
        return (
            <View style={{ flexDirection: 'column', }}>
                {isLoading ? (<Loader />) : null}

                <View style={{ flexDirection: 'row', flex: 1 }}>
                    <View style={{ flexDirection: 'column', flex: 1, paddingLeft: 20, paddingTop: 20 }}>
                        <Text style={{ fontSize: 23, fontWeight: '700' }}>Review and Pay</Text>
                        <Text style={{ fontSize: 15, }}>Nov 8 - Nov 9</Text>
                        <Text style={{ fontSize: 15, }}>2 guests</Text>
                    </View>
                    <View style={{ width: 170, height: 150, padding: 20 }}>
                        <Image source={require('../../../assets/home1.jpg')}
                            style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }} />
                    </View>
                </View >
                <View style={{ alignItems: 'center' }}>
                    <View
                        style={{
                            borderBottomColor: '#bfbfbf',
                            borderBottomWidth: 1,
                            paddingTop: 150,
                            width: 318,

                        }}
                    />
                </View>

                <View style={{ flexDirection: 'column' }}>
                    <View style={{ flexDirection: 'row', paddingTop: 20, }}>
                        <Text style={{ fontSize: 15, paddingLeft: 20, flex: 1 }}>$90 x night</Text>
                        <Text style={{ fontSize: 15, paddingRight: 20, }}>$90</Text>
                    </View>
                    <View style={{ flexDirection: 'row', paddingTop: 10, }}>
                        <Text style={{ fontSize: 15, paddingLeft: 20, flex: 1 }}>10% VAT</Text>
                        <Text style={{ fontSize: 15, paddingRight: 20, }}>$9</Text>
                    </View>
                    <View style={{ flexDirection: 'row', paddingTop: 10, }}>
                        <Text style={{ fontSize: 15, paddingLeft: 20, flex: 1 }}>Service Fee</Text>
                        <Text style={{ fontSize: 15, paddingRight: 20, }}>$9</Text>
                    </View>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <View
                        style={{
                            borderBottomColor: '#bfbfbf',
                            borderBottomWidth: 1,
                            paddingTop: 25,
                            width: 318,
                        }}
                    />
                </View>
                <View style={{ padding: 15, }}>
                    <Text style={{ fontSize: 18, paddingBottom: 5 }}> Coupon code</Text>

                    <TextInput style={styles.couponInput}
                        placeholder="Your code...">
                    </TextInput>
                </View>
                <View style={{ flexDirection: 'row', }}>
                    <Text style={{ fontSize: 18, fontWeight: '700', paddingLeft: 20, flex: 1 }}>Total (USD)</Text>
                    <Text style={{ fontSize: 18, fontWeight: '700', paddingRight: 20, }}>$108</Text>
                </View>

                <View style={{ padding: 20, flexDirection: 'row' }} >
                    <TouchableHighlight
                        style={{ height: 30, width: 30, borderRadius: 5, alignItems: 'center', backgroundColor: '#e5e5e5' }}>
                        <Text style={{ color: 'grey', fontSize: 18 }}>+</Text>
                    </TouchableHighlight>
                    <Text style={{ fontSize: 17, paddingLeft: 10, flex: 1 }}>Add payment</Text>
                    <Icon name="long-arrow-right"
                        color='grey'
                        size={25}
                    />
                </View>
                <View alignItems='center' >
                    <TouchableHighlight
                        textAlign='center'
                        underlayColor='grey'
                        onPress={this.onPress}
                        style={{ height: 30, width: width - 30, borderRadius: 5, alignItems: 'center', backgroundColor: '#FF5A60' }}>
                        <Text style={{ color: 'white', fontSize: 18 }}>Confirm</Text>
                    </TouchableHighlight>
                </View>
            </View >
        );
    }
}

export default ConfirmBooking;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    couponInput: {
        height: 30,
        width: 150,
        borderColor: '#bfbfbf',
        borderWidth: 1,
        marginLeft: 5
    },
});