import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';
import LapText from '../TextTypes/LapText';
import styles from './styles';

const LapsTable = ({ dataArray, timer }) => {

  const results = dataArray.slice(1);

  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;

  if (results.length >= 2) {
    results.forEach(result => {

      if (result.laps < min) { min = result.laps };

      if (result.laps > max) { max = result.laps };
    });
  }

  return (
    <ScrollView style={styles.scrollView} >
      {
        dataArray.map((result, index) => (
          <LapText name={result.name}
            key={result.id}
            interval={ index== 0 ? timer : result.laps}
            fastest={result.laps == min}
            slowest={result.laps == max}

          />
        )
        )
      }
    </ScrollView>
  );
};

LapsTable.propTypes = {
  dataArray : PropTypes.array,
  timer : PropTypes.number
};

export default LapsTable;
