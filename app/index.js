import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import HomeScreen from './Components/screens/HomeScreen';

EStyleSheet.build(
  {
    $primaryLightBlue: '#005ce6',
    $skyBlue: '#95dced',
    $coolGreen : '#446674',
    $bitPinky: '#fcc8c0',
    $white: '#FFFFFF',
    $borderColor: '#E2E2E2',
    $inputTextColor: '#797979',
    $lightGrey: '#a6a6a6'
  },
 

);

export default () => { return <HomeScreen />; };
