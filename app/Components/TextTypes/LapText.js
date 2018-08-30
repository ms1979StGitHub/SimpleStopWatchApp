import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, ViewPropTypes } from 'react-native';
import IntervalText from './IntervalText';

import styles from './styles';

const LapText = (props) => {

    const { interval, fastest, slowest, name, style } = props;   

    const lapStyle = [styles.lap, styles.lapText,
    fastest && styles.fastest,
    slowest && styles.slowest];
    
    return (
        <View style={styles.lap} >
            <Text style={lapStyle}> {name} </Text>
            <IntervalText interval={interval} style={styles.timerSmall}/>
        </View>

    );


};

LapText.propTypes = {
    interval: PropTypes.number,   
    fastest : PropTypes.bool,
    slowest : PropTypes.bool,
    name: PropTypes.string,
    style: ViewPropTypes.style

};

export default LapText;