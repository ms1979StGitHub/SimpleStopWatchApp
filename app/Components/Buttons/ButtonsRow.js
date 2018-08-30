import React from 'react';
import { View } from 'react-native';

import styles from './styles';

const ButtonsRow = ({children}) => 
{

    return(
        <View style={styles.buttonsRow}> {children}
            
        </View>
        

);
}



export default ButtonsRow;