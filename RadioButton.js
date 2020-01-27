import React, { Component } from 'react';
import { View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

class RadioButton extends Component {
    
    state = {

    }

    render() {
        return (
        <TouchableWithoutFeedback 
        onPress={() => this.props.onPress() }>
            <View style={{
                borderRadius:20,
                borderWidth:1,
                borderColor: this.props.color ? 
                this.props.color : 'red',
                width:25,
                height:25,
                alignItems:'center',
                justifyContent:'center'
            }}>
                <View style={{
                    width:15,
                    height:15,
                    borderRadius:10,
                    borderWidth:this.props.selected ? 1: 0,
                    borderColor:this.props.color ? 
                        this.props.color : 'red',
                    backgroundColor: this.props.selected ?
                        ( this.props.color ? 
                        this.props.color : 'red' ) : 'rgba(0,0,0,0)'
                }} />
            </View>
        </TouchableWithoutFeedback>
        );
    }
}

export default RadioButton;
