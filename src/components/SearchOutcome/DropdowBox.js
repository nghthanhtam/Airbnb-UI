import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, CheckBox, ScrollView } from 'react-native';
import DatePicker from 'react-native-datepicker';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Slider } from 'react-native-elements';

class DropdownBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count1: 0,
            count2: 0,
            count3: 0,
            checked1: false,
            checked2: false,
            checked3: false,
            value: 0,
            valueMax: 0
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
        const { name, marginLeft } = this.props;
        const { count1, count2, count3, checked1, checked2, checked3 } = this.state;
        return (
            <View style={[styles.filterBox, { marginLeft: marginLeft }]}>
                {name === 'Dates' ? (
                    <View>
                        <View style={{ paddingBottom: 10 }}>
                            <DatePicker
                                style={{ width: 200 }}
                                mode="date" //The enum of date, datetime and time
                                placeholder="checkin date"
                                format="DD-MM-YYYY"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                customStyles={{
                                    dateIcon: {
                                        position: 'absolute',
                                        left: 0,
                                        top: 4,
                                        marginLeft: 0,
                                    },

                                }}
                            />
                        </View>
                        <View style={{ paddingBottom: 10 }}>
                            <DatePicker
                                style={{ width: 200 }}
                                mode="date" //The enum of date, datetime and time
                                placeholder="checkout date"
                                format="DD-MM-YYYY"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                customStyles={{
                                    dateIcon: {
                                        position: 'absolute',
                                        left: 0,
                                        top: 4,
                                        marginLeft: 0,
                                    },

                                }}
                            />
                        </View>
                    </View>
                ) : null}

                {name === 'Guests' ? (
                    <View style={{ flexDirection: "column", alignItems: 'center', }}>
                        <View style={{ flexDirection: "row", paddingTop: 5 }}>
                            <Text style={{ paddingRight: 30, width: "37%" }}>Adults </Text>
                            <TouchableHighlight underlayColor='#ff7479' style={styles.button}
                                onPress={() => this.handleMinusPress("1")}>
                                <Icon name="minus"
                                    color='#FF5A60'
                                    size={13}
                                    style={styles.icon}
                                />
                            </TouchableHighlight>
                            <Text style={{ paddingLeft: 10, paddingRight: 10 }}>{count1} </Text>
                            <TouchableHighlight underlayColor='#ff7479' style={styles.button}
                                onPress={() => this.handlePlusPress("1")}>
                                <Icon name="plus"
                                    color='#FF5A60'
                                    size={13}
                                    style={styles.icon}
                                />
                            </TouchableHighlight>
                        </View>
                        <View style={{ flexDirection: "row", paddingTop: 15 }}>
                            <Text style={{ width: "38%" }}>Children </Text>
                            <TouchableHighlight underlayColor='#ff7479' style={styles.button}
                                onPress={() => this.handleMinusPress("2")}>
                                <Icon name="minus"
                                    color='#FF5A60'
                                    size={13}
                                    style={styles.icon}
                                />
                            </TouchableHighlight>
                            <Text style={{ paddingLeft: 10, paddingRight: 10 }}>{count2} </Text>
                            <TouchableHighlight underlayColor='#ff7479' style={styles.button}
                                onPress={() => this.handlePlusPress("2")}>
                                <Icon name="plus"
                                    color='#FF5A60'
                                    size={13}
                                    style={styles.icon}
                                />
                            </TouchableHighlight>
                        </View>
                        <View style={{ flexDirection: "row", paddingTop: 15 }}>
                            <Text style={{ width: "37%" }}>Infants </Text>
                            <TouchableHighlight underlayColor='#ff7479' style={styles.button}
                                onPress={() => this.handleMinusPress("3")}>
                                <Icon name="minus"
                                    color='#FF5A60'
                                    size={13}
                                    style={styles.icon}
                                />
                            </TouchableHighlight>
                            <Text style={{ paddingLeft: 10, paddingRight: 10 }}>{count3} </Text>
                            <TouchableHighlight underlayColor='#ff7479' style={styles.button}
                                onPress={() => this.handlePlusPress("3")}>
                                <Icon name="plus"
                                    color='#FF5A60'
                                    size={13}
                                    style={styles.icon}
                                />
                            </TouchableHighlight>
                        </View>
                    </View>
                ) : null
                }

                {
                    name === 'Types' ? (
                        <View style={{ flexDirection: "column" }}>
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
                    ) : null
                }

                {
                    name === 'Prices' ? (
                        <View style={{ flexDirection: "column", }}>
                            <View style={{ alignItems: 'center' }}>
                                <Text>Min: ${this.state.value}</Text>
                            </View>
                            <Slider
                                step={1}
                                minimumValue={0}
                                maximumValue={600000}
                                value={this.state.value}
                                onValueChange={value => this.setState({ value })}
                                thumbTintColor='#FF5A60'
                            />
                            <View style={{ alignItems: 'center' }}>
                                <Text >Max:${this.state.valueMax}</Text>
                            </View>
                            <Slider
                                step={1}
                                minimumValue={0}
                                maximumValue={600000}
                                value={this.state.valueMax}
                                onValueChange={valueMax => this.setState({ valueMax })}
                                thumbTintColor='#FF5A60'
                            />
                        </View>
                    ) : null
                }

                {
                    name === 'Filters' ? (
                        <ScrollView style={{ flexDirection: "column" }}>
                            <Text style={{ fontWeight: '700' }}>Rooms and beds </Text>
                            <View style={{ flexDirection: "row", paddingTop: 5 }}>
                                <Text style={{ width: "45%", paddingLeft: 5 }}>Beds </Text>
                                <TouchableHighlight underlayColor='#ff7479' style={styles.button}
                                    onPress={() => this.handleMinusPress("1")}>
                                    <Icon name="minus"
                                        color='#FF5A60'
                                        size={13}
                                        style={styles.icon}
                                    />
                                </TouchableHighlight>
                                <Text style={{ paddingLeft: 10, paddingRight: 10 }}>{count1} </Text>
                                <TouchableHighlight underlayColor='#ff7479' style={styles.button}
                                    onPress={() => this.handlePlusPress("1")}>
                                    <Icon name="plus"
                                        color='#FF5A60'
                                        size={13}
                                        style={styles.icon}
                                    />
                                </TouchableHighlight>
                            </View>
                            <View style={{ flexDirection: "row", paddingTop: 5 }}>
                                <Text style={{ width: "45%", paddingLeft: 5 }}>Bedrooms </Text>
                                <TouchableHighlight underlayColor='#ff7479' style={styles.button}
                                    onPress={() => this.handleMinusPress("1")}>
                                    <Icon name="minus"
                                        color='#FF5A60'
                                        size={13}
                                        style={styles.icon}
                                    />
                                </TouchableHighlight>
                                <Text style={{ paddingLeft: 10, paddingRight: 10 }}>{count1} </Text>
                                <TouchableHighlight underlayColor='#ff7479' style={styles.button}
                                    onPress={() => this.handlePlusPress("1")}>
                                    <Icon name="plus"
                                        color='#FF5A60'
                                        size={13}
                                        style={styles.icon}
                                    />
                                </TouchableHighlight>
                            </View>
                            <View style={{ flexDirection: "row", paddingTop: 5, paddingBottom: 10 }}>
                                <Text style={{ width: "45%", paddingLeft: 5 }}>Bathrooms </Text>
                                <TouchableHighlight underlayColor='#ff7479' style={styles.button}
                                    onPress={() => this.handleMinusPress("1")}>
                                    <Icon name="minus"
                                        color='#FF5A60'
                                        size={13}
                                        style={styles.icon}
                                    />
                                </TouchableHighlight>
                                <Text style={{ paddingLeft: 10, paddingRight: 10 }}>{count1} </Text>
                                <TouchableHighlight underlayColor='#ff7479' style={styles.button}
                                    onPress={() => this.handlePlusPress("1")}>
                                    <Icon name="plus"
                                        color='#FF5A60'
                                        size={13}
                                        style={styles.icon}
                                    />
                                </TouchableHighlight>
                            </View>
                            <Text style={{ fontWeight: '700' }}>Amentities </Text>
                            <View style={{ flexDirection: "column", }}>
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
                                    />
                                    <Text style={{
                                        paddingTop: 5
                                    }}>Towels</Text>
                                </View>
                                <View style={{ flexDirection: "row", }}>
                                    <CheckBox
                                        name="checked2"
                                        value={checked1}
                                        onChange={(e) => {
                                            this.onCheckBoxPress({
                                                target: {
                                                    name: 'checked2',
                                                    value: { checked1 },
                                                },
                                            });
                                        }}
                                    />
                                    <Text style={{
                                        paddingTop: 5
                                    }}>Shampoo</Text>
                                </View>
                            </View>

                        </ScrollView>
                    ) : null
                }
            </View >
        );
    }
}

export default DropdownBox;

const styles = StyleSheet.create({
    text: {
        fontWeight: '700',
        fontSize: 13
    },
    filterBox: {
        justifyContent: 'space-between',
        minHeight: 150,
        minWidth: 190,
        padding: 10,
        backgroundColor: 'white',
        borderColor: '#dddddd',
        borderWidth: 1,
        borderRadius: 2,
        //justifyContent: 'center',
    },
    icon: {
        marginRight: 0,
        marginTop: -2,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        width: 25,
        height: 25,
        backgroundColor: '#ffa7aa',
    },
});