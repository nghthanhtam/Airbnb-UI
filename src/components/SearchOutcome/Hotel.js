import * as React from 'react';
import { View, Text, Dimensions, Image, TouchableHighlight } from 'react-native';

const { width } = Dimensions.get('window')
class Hotel extends React.Component {
    render() {
        return (
            <TouchableHighlight onPress={this.props.onPress} underlayColor='transparent'>
                <View style={{ width: width - 40, height: 200, marginBottom: 15, marginLeft: 15 }}>
                    <View style={{ flex: 2 }}>
                        <Image
                            source={this.props.imageUri}
                            style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }} />
                        <View >
                            <Text style={{ fontSize: 18 }}>{this.props.name}</Text>
                            <Text style={{ fontSize: 14, color: '#018F84' }}>{this.props.price}</Text>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}

export default Hotel;
