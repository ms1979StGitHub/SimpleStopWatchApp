import React, {Component} from 'react';
import { StatusBar } from 'react-native';
import Container from '../ContainerObjects/Container';
import ButtonsRow from '../Buttons/ButtonsRow';
import IntervalText from '../TextTypes/IntervalText';
import RoundButton from '../Buttons/RoundButton';
import LapsTable from '../ContainerObjects/LapsTable';
import { styles } from '../TextTypes';

const DataArray = [
  {id: 1, name: 'Mirco', laps: 100000},
  {id: 2, name: 'Raphael', laps: 99999},
  {id: 3, name: 'Michael', laps: 7777777},
  {id: 4, name: 'Stefan', laps: 45454224}
];

export default class HomeScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      start : 0,
      id : 1,
      name: 'Mirco',
      now : 0,
      results : [],
    }
  }

  startProcess = () => {
    
    const now = new Date().getTime();
    this.setState({start: now, now, results : [{id:1,name:'mirco', laps:1}] });

    this.timer = setInterval(() => {
      this.setState({now: new Date().getTime()})
    }, 100);



  }
  

  render() {

    const {now, start, results} = this.state;
    const timer = now - start;

    return (
      <Container>
      <StatusBar translucent={false} barStyle="light-content" />

      <IntervalText interval={timer} style={styles.timer} >

      </IntervalText>

      <ButtonsRow>
        <RoundButton title='Reset' color='#FFFFFF' backgroundColor='#a6a6a6' >

        </RoundButton>

        <RoundButton title='Start' color='#FFFFFF' backgroundColor='#95dced' onPress={this.startProcess} >

        </RoundButton>
      </ButtonsRow>

      <LapsTable dataArray={results} timer={timer} />

    </Container>
    );
  }
}
