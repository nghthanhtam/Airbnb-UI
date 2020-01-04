import React, { Component } from 'react';
import { StyleSheet, Dimensions, View, Text, TouchableHighlight, ScrollView, CheckBox, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const { height, width } = Dimensions.get('window')

class Step2Host extends Component {
    constructor(props) {
        super(props)
        this.state = {

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
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flexDirection: 'column', paddingBottom: 20, }}>
                <View
                    style={{
                        borderBottomColor: '#018F84',
                        borderBottomWidth: 7,
                        width: width - 120,
                    }}
                />
                <Text style={{ padding: 10, fontSize: 20, color: '#018F84' }}>Step 2/3 </Text>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ flexDirection: 'column', paddingLeft: 15 }}>

                        <Text style={{ padding: 10, fontSize: 21 }}>Add photos to your listings?</Text>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ padding: 10, fontSize: 18, color: 'grey' }}>Photos help guests imagining staying in your place </Text>
                            <TouchableHighlight
                                textAlign='center'
                                underlayColor='grey'
                                onPress={this.props.onPressNext}
                                style={{ height: 30, marginLeft: 10, width: width - 250, borderRadius: 5, alignItems: 'center', backgroundColor: '#018F84' }}>
                                <View style={{ flexDirection: 'row', alignItem: 'center', marginTop: 5 }}>
                                    <Icon name="upload"
                                        color='#FF5A60'
                                        size={20}
                                        style={styles.icon}
                                    />
                                    <Text style={{ color: 'white', fontSize: 15 }}>UPLOAD</Text>
                                </View>
                            </TouchableHighlight>
                        </View>

                        <Text style={{ padding: 10, marginTop: 20, fontSize: 21 }}>Describe your place to guests</Text>
                        <TextInput style={styles.textInput}
                            placeholder="Write your description...">
                        </TextInput>

                        <Text style={{ padding: 10, marginTop: 20, fontSize: 21 }}>Tell them your availability</Text>
                        <Text style={{ padding: 10, fontSize: 18, color: 'grey' }}>Let guests know how available you'll be during their stay </Text>
                        <TextInput style={styles.textInput}
                            placeholder="Write your message here...">
                        </TextInput>

                        <Text style={{ padding: 10, marginTop: 20, fontSize: 21 }}>Name your place</Text>
                        <TextInput style={styles.textInput1}
                            placeholder="Write your name here...">
                        </TextInput>

                        <Text style={{ padding: 10, marginTop: 20, fontSize: 21 }}>Add your mobile phone number</Text>
                        <TextInput style={styles.textInput2}
                            placeholder="Write your name here...">
                            verify
                        </TextInput>

                        <View style={{ flexDirection: 'row', paddingTop: 20, paddingBottom: 70, marginLeft: 10 }} >
                            <View alignItems='center' >
                                <TouchableHighlight
                                    textAlign='center'
                                    underlayColor='grey'
                                    onPress={() => navigate('Step3Host')}
                                    style={{ height: 30, width: width - 40, borderRadius: 5, alignItems: 'center', backgroundColor: '#FF5A60' }}>
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

export default Step2Host;

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