import React, { Component } from 'react';
import { StyleSheet, Dimensions, View, Text, TouchableHighlight, ScrollView, CheckBox, TextInput } from 'react-native';
import { RadioButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
const { height, width } = Dimensions.get('window')

class RadioButtonRules extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: 'yes',
            checked1: false,
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
        const { title } = this.props;
        return (
            <View style={{ flexDirection: 'column' }}>
                <Text style={{ marginLeft: 10, fontSize: 17 }}>{title} </Text>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'row', paddingRIght: 15 }}>
                        <RadioButton
                            color='#00a68d'
                            value="yes1"
                            status={checked === 'yes1' ? 'checked' : 'unchecked'}
                            onPress={() => { this.setState({ checked: 'yes1' }); }}
                        />
                        <Text style={{ marginTop: 8, fontSize: 15 }}>Yes</Text>
                    </View>
                    <View style={{ flexDirection: 'row', paddingRIght: 15 }}>
                        <RadioButton
                            color='#00a68d'
                            value="yes"
                            status={checked === 'yes' ? 'checked' : 'unchecked'}
                            onPress={() => { this.setState({ checked: 'yes' }); }}
                        />
                        <Text style={{ marginTop: 8, fontSize: 15 }}>No</Text>
                    </View>
                </View>
            </View>

        );
    }
}

export default RadioButtonRules;

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