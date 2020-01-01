import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, ScrollView, KeyboardAvoidingView, StyleSheet } from 'react-native';
import colors from '../styles/colors';
import InputField from '../components/form/InputField';
import NextArrowButton from '../components/buttons/NextArrowButton';
import Loader from '../components/Loader';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loadingVisible: false,
        };
        this.handleNextButton = this.handleNextButton.bind(this);
        this.toggleNextButtonState = this.toggleNextButtonState.bind(this);
    }

    handleNextButton() {
        this.setState({ loadingVisible: true });
        setTimeout(() => { alert('success') }
            , 2000)

        //this.setState({ formValid: true });
    }
    toggleNextButtonState() {
        return true;
    }

    render() {
        const { loadingVisible, } = this.state;
        return (
            <KeyboardAvoidingView style={styles.wrapper}
                behavior="padding">

                <View style={styles.scrollViewWrapper}>
                    <ScrollView style={styles.scrollView}>
                        <Text style={styles.loginHeader}>Log In</Text>
                        <InputField
                            labelText="EMAIL ADDRESS"
                            labelTextSize={14}
                            labelColor={colors.white}
                            colorText={colors.white}
                            inputType="email"
                        />
                        <InputField
                            labelText="PASSWORD"
                            labelTextSize={14}
                            labelColor={colors.white}
                            colorText={colors.white}
                            inputType="password"
                        />
                    </ScrollView>
                    <View style={styles.nextButton}>
                        <NextArrowButton
                            handleNextButton={this.handleNextButton}
                            disabled={this.toggleNextButtonState()} />
                    </View>
                </View>
                <Loader
                    modalVisible={loadingVisible}
                    animationType="fade" />

            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({

    wrapper: {
        display: 'flex',
        flex: 1,
        backgroundColor: colors.green01,
    },
    scrollViewWrapper: {
        marginTop: 70,
        flex: 1,
    },
    scrollView: {
        paddingLeft: 30,

        paddingRight: 20,
        flex: 1,
    },
    loginHeader: {
        fontSize: 34,
        color: colors.white,
        fontWeight: '300',
        marginBottom: 40,
    },
    nextButton: {
        alignItems: 'flex-end',
        right: 10,
        bottom: 10,
    },

});