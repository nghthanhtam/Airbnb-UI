import React, { Component } from 'react';
import { StyleSheet, Dimensions, View, Text, TouchableHighlight, ScrollView, CheckBox, TextInput } from 'react-native';
import { RadioButton } from 'react-native-paper';
import DatePicker from 'react-native-datepicker';
import Icon from 'react-native-vector-icons/FontAwesome';
import RadioButtonRules from './RadioButtonRules';
const { height, width } = Dimensions.get('window')

class Step3Host extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: 'yes',
            checked1: 'first',
            checked2: false,
            checked3: false,
            count1: 0,
            count2: 0,
            count3: 0,
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
        const {
            checked, checked1, checked2, checked3,
            count1, count2, count3
        } = this.state;
        const { navigate } = this.props.navigation;

        return (
            <View style={{ flexDirection: 'column', paddingBottom: 20, }}>
                <View
                    style={{
                        borderBottomColor: '#018F84',
                        borderBottomWidth: 7,
                        width: width - 10,
                    }}
                />
                <Text style={{ padding: 10, fontSize: 20, color: '#018F84' }}>Step 3/3 </Text>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ flexDirection: 'column', paddingLeft: 15 }}>

                        <Text style={{ padding: 10, paddingBottom: 20, fontSize: 21 }}>Set our rules for your guests</Text>
                        <RadioButtonRules
                            title="Suitable for children" />
                        <RadioButtonRules
                            title="Suitable for infants" />
                        <RadioButtonRules
                            title="Smoking allowed" />
                        <RadioButtonRules
                            title="Events or parties allowed" />

                        <Text style={{ padding: 10, paddingTop: 25, fontSize: 21 }}>How much notice do you need before a guest arrives?</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'row', paddingRIght: 15 }}>
                                <RadioButton
                                    color='#00a68d'
                                    value="zero"
                                    status={checked1 === 'zero' ? 'checked' : 'unchecked'}
                                    onPress={() => { this.setState({ checked1: 'zero' }); }}
                                />
                                <Text style={{ marginTop: 8, fontSize: 15 }}>Same day</Text>
                            </View>
                            <View style={{ flexDirection: 'row', paddingRIght: 15 }}>
                                <RadioButton
                                    color='#00a68d'
                                    value="first"
                                    status={checked1 === 'first' ? 'checked' : 'unchecked'}
                                    onPress={() => { this.setState({ checked1: 'first' }); }}
                                />
                                <Text style={{ marginTop: 8, fontSize: 15 }}>2 days</Text>
                            </View>
                            <View style={{ flexDirection: 'row', paddingRIght: 15 }}>
                                <RadioButton
                                    color='#00a68d'
                                    value="second"
                                    status={checked1 === 'second' ? 'checked' : 'unchecked'}
                                    onPress={() => { this.setState({ checked1: 'second' }); }}
                                />
                                <Text style={{ marginTop: 8, fontSize: 15 }}>1 week</Text>
                            </View>
                        </View>

                        <Text style={{ padding: 10, fontSize: 21 }}>When can guests check in?</Text>
                        <View flexDirection="column" style={{ paddingLeft: 10 }}>
                            <View style={{ paddingBottom: 5 }}>
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
                            <View >
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


                        <Text style={{ padding: 10, marginTop: 10, fontSize: 21 }}>Minimum price</Text>
                        <TextInput style={styles.textInput1}
                            placeholder="$ 0">
                        </TextInput>
                        <Text style={{ padding: 10, fontSize: 15, color: '#018F84' }}>Suggest: $100</Text>

                        <View style={{ flexDirection: 'row', paddingTop: 20, paddingBottom: 70, marginLeft: 10 }} >
                            <View alignItems='center' >
                                <TouchableHighlight
                                    textAlign='center'
                                    underlayColor='grey'
                                    onPress={() => navigate('Profile')}
                                    style={{ height: 30, width: width - 40, borderRadius: 5, alignItems: 'center', backgroundColor: '#FF5A60' }}>
                                    <Text style={{ color: 'white', fontSize: 18 }}>Confirm</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>

                </ScrollView>
            </View >

        );
    }
}

export default Step3Host;

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
    textInput: {
        textAlignVertical: 'top',
        height: 80,
        width: width - 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderColor: '#bfbfbf',
        paddingTop: 10,
        paddingLeft: 10,
        marginLeft: 10
    },
    textInput1: {
        textAlignVertical: 'top',
        height: 40,
        width: width - 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderColor: '#bfbfbf',
        paddingTop: 10,
        paddingLeft: 10,
        marginLeft: 10,
    },
    textInput2: {
        textAlignVertical: 'top',
        height: 40,
        width: width - 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderColor: '#bfbfbf',
        paddingTop: 8,
        paddingLeft: width - 90,
        marginLeft: 10,
        color: '#018F84',
        fontSize: 18
    },
});