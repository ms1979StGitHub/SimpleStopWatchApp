import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity  } from 'react-native';

import styles from './styles';

const RoundButton = ({title, color, backgroundColor, onPress, disabled}) => (

    
        <TouchableOpacity 
        onPress= { () => !disabled && onPress() } 
        style={[ styles.button, {backgroundColor}]}
        activeOpacity = {disabled ? 1.0 : 0.7}
        >
            <View style={ styles.buttonBorder}>
                <Text style={ [ styles.buttonTitle, {color} ]} >{title} </Text>
            </View>
        </TouchableOpacity>
        

);

RoundButton.propTypes = {

    onPress: PropTypes.func,
    title: PropTypes.string,
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    disabled : PropTypes.bool
};


export default RoundButton;