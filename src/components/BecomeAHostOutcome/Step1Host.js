import React, { Component } from 'react';
import { StyleSheet, Dimensions, View, Text, TouchableHighlight, ScrollView, CheckBox } from 'react-native';
import { RadioButton } from 'react-native-paper';
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';
const { height, width } = Dimensions.get('window')

class Step1Host extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: 'first',
            count1: 0,
            count2: 0,
            count3: 0,
            checked1: false,
            checked2: false,
            checked3: false,
        }
    }
    handlePlusPress = (name) => {
        if (name === '1') this.setState({ ['count' + name]: this.state.count1 + 1 });
        else if (name === '2') this.setState({ ['count' + name]: this.state.count2 + 1 });
        else this.setState({ ['count' + name]: this.state.count3 + 1 });
    }
    handleMinusPress = (name) => {
        const { count1, count2, count3 } = this.state;
        if (name === '1' && count1 > 0) this.setState({ ['count' + name]: this.state.count1 - 1 });
        else if (name === '2' && count2 > 0) this.setState({ ['count' + name]: this.state.count2 - 1 });
        else {
            if (count3 > 0) this.setState({ ['count' + name]: this.state.count3 - 1 });
        }
    }
    onCheckBoxPress = (e) => {
        this.setState({ [e.target.name]: !e.target.value.checked1 });
    }


    render() {
        const { checked,
            count1, count2, count3,
            checked1, checked2, checked3 } = this.state;
        const { navigate } = this.props.navigation;

        return (
            <View style={{ flexDirection: 'column', paddingBottom: 20, }}>
                <View
                    style={{
                        borderBottomColor: '#018F84',
                        borderBottomWidth: 7,
                        width: width - 250,
                    }}
                />
                <Text style={{ padding: 10, fontSize: 20, color: '#018F84' }}>Step 1/3 </Text>
                <ScrollView >
                    <View style={{ flexDirection: 'column', paddingLeft: 15 }}>
                        <Text style={{ padding: 10, fontSize: 21 }}>What kind of place are you listing?</Text>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ padding: 10, fontSize: 20, color: 'grey' }}>Choose a place type </Text>
                            <View style={{ flexDirection: 'row', paddingRIght: 15 }}>
                                <RadioButton
                                    color='#00a68d'
                                    value="first"
                                    status={checked === 'first' ? 'checked' : 'unchecked'}
                                    onPress={() => { this.setState({ checked: 'first' }); }}
                                />
                                <Text style={{ marginTop: 8, fontSize: 15 }}>Entire place</Text>
                            </View>
                            <View style={{ flexDirection: 'row', paddingRIght: 15 }}>
                                <RadioButton
                                    color='#00a68d'
                                    value="second"
                                    status={checked === 'second' ? 'checked' : 'unchecked'}
                                    onPress={() => { this.setState({ checked: 'second' }); }}
                                />
                                <Text style={{ marginTop: 8, fontSize: 15 }}>Private room</Text>
                            </View>
                            <View style={{ flexDirection: 'row', paddingRIght: 15 }}>
                                <RadioButton
                                    color='#00a68d'
                                    value="thỉd"
                                    status={checked === 'thỉd' ? 'checked' : 'unchecked'}
                                    onPress={() => { this.setState({ checked: 'thỉd' }); }}
                                />
                                <Text style={{ marginTop: 8, fontSize: 15 }}>Shared room</Text>
                            </View>
                        </View>

                        <Text style={{ padding: 10, marginTop: 20, fontSize: 21 }}>How many guests can your place accomodate?</Text>
                        <View style={{ flexDirection: "column", marginLeft: 10 }}>
                            <View style={{ flexDirection: "row", paddingTop: 5 }}>
                                <Text style={{ paddingRight: 30, width: "68%", fontSize: 15 }}>Guests </Text>
                                <TouchableHighlight underlayColor='#00e6c3' style={styles.button}
                                    onPress={() => this.handleMinusPress("1")}>
                                    <Icon name="minus"
                                        color='#FF5A60'
                                        size={13}
                                        style={styles.icon}
                                    />
                                </TouchableHighlight>
                                <Text style={{ paddingLeft: 10, paddingRight: 10 }}>{count1} </Text>
                                <TouchableHighlight underlayColor='#00e6c3' style={styles.button}
                                    onPress={() => this.handlePlusPress("1")}>
                                    <Icon name="plus"
                                        color='#FF5A60'
                                        size={13}
                                        style={styles.icon}
                                    />
                                </TouchableHighlight>
                            </View>
                            <View style={{ flexDirection: "row", paddingTop: 15 }}>
                                <Text style={{ width: "68%", fontSize: 15 }}>Beds </Text>
                                <TouchableHighlight underlayColor='#00e6c3' style={styles.button}
                                    onPress={() => this.handleMinusPress("2")}>
                                    <Icon name="minus"
                                        size={13}
                                        style={styles.icon}
                                    />
                                </TouchableHighlight>
                                <Text style={{ paddingLeft: 10, paddingRight: 10 }}>{count2} </Text>
                                <TouchableHighlight underlayColor='#00e6c3' style={styles.button}
                                    onPress={() => this.handlePlusPress("2")}>
                                    <Icon name="plus"
                                        size={13}
                                        style={styles.icon}
                                    />
                                </TouchableHighlight>
                            </View>
                            <View style={{ flexDirection: "row", paddingTop: 15 }}>
                                <Text style={{ width: "68%", fontSize: 15 }}>Bedrooms </Text>
                                <TouchableHighlight underlayColor='#00e6c3' style={styles.button}
                                    onPress={() => this.handleMinusPress("3")}>
                                    <Icon name="minus"
                                        size={13}
                                        style={styles.icon}
                                    />
                                </TouchableHighlight>
                                <Text style={{ paddingLeft: 10, paddingRight: 10 }}>{count3} </Text>
                                <TouchableHighlight underlayColor='#00e6c3' style={styles.button}
                                    onPress={() => this.handlePlusPress("3")}>
                                    <Icon name="plus"
                                        size={13}
                                        style={styles.icon}
                                    />
                                </TouchableHighlight>
                            </View>
                        </View>
                        <Text style={{ padding: 10, marginTop: 20, fontSize: 21 }}>Is the pin in the right place?</Text>
                        <MapView
                            style={{ flex: 1 }}
                            region={{ latitude: 42.882004, longitude: 74.582748, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}
                            showsUserLocation={true} />

                        <Text style={{ padding: 10, marginTop: 20, fontSize: 21 }}>What amenities do you offer?</Text>
                        <View style={{ flexDirection: "column", marginLeft: 5 }}>
                            <View style={{ flexDirection: "row", }}>
                                <CheckBox
                                    name="checked1"
                                    value={checked1}
                                    onChange={(e) => {
                                        this.onCheckBoxPress({
                                            target: {
                                                name: 'checked1',
                                                value: { checked1 },
                                            },
                                        });
                                    }}
                                    style={{ paddingRight: 50 }}
                                />
                                <Text style={{
                                    paddingTop: 5,
                                }}>Entire Home</Text>
                            </View>
                            <View style={{ flexDirection: "row", }}>
                                <CheckBox
                                    name="checked2"
                                    onPress={this.onCheckBoxPress}
                                    value={checked2}
                                    onChange={(e) => {
                                        this.onCheckBoxPress({
                                            target: {
                                                name: 'checked2',
                                                value: { checked2 },
                                            },
                                        });
                                    }}
                                    style={{ paddingRight: 50 }}
                                />
                                <Text style={{
                                    paddingTop: 5,
                                }}>Private Room</Text>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <CheckBox
                                    name="checked3"
                                    onPress={this.onCheckBoxPress}
                                    value={checked3}
                                    onChange={(e) => {
                                        this.onCheckBoxPress({
                                            target: {
                                                name: 'checked3',
                                                value: { checked3 },
                                            },
                                        });
                                    }}
                                    style={{ paddingRight: 50 }}
                                />
                                <Text style={{
                                    paddingTop: 5,
                                }}>Hotel</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', paddingTop: 20, paddingBottom: 50 }} >
                            <View alignItems='center' >
                                <TouchableHighlight
                                    textAlign='center'
                                    underlayColor='grey'
                                    onPress={() => navigate('Step2Host')}
                                    style={{ height: 30, width: width - 30, borderRadius: 5, alignItems: 'center', backgroundColor: '#FF5A60' }}>
                                    <Text style={{ color: 'white', fontSize: 18 }}>Next</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>

                </ScrollView>
            </View>

        );
    }
}

export default Step1Host;

const styles = StyleSheet.create({
    icon: {
        marginRight: 0,
        marginTop: -2,
        color: '#ffffff'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        width: 25,
        height: 25,
        backgroundColor: '#00a68d',
    },
});