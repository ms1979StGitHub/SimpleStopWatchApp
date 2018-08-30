import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, ViewPropTypes } from 'react-native';
import styles from './styles';
import moment from 'moment';

const IntervalText = (props) => {

    const { interval, style } = props;

    const pad = (n) => n < 10 ? '0' + n : n;

    const duration = moment.duration(interval);
    const centiseconds = Math.floor(duration.milliseconds() / 10);
    return (

        <View style={styles.timerContainer}>

            <Text style={style}>{pad(duration.minutes())}:</Text>
            <Text style={style}>{pad(duration.seconds())},</Text>
            <Text style={style}>{pad(centiseconds)}</Text>

        </View>

    );


};

IntervalText.propTypes = {

    interval: PropTypes.number,
    style: ViewPropTypes.style
};

export default IntervalText;