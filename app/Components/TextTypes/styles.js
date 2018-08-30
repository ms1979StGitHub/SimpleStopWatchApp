import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({

    lap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: '$bitPinky',
        borderTopWidth: 2 
    },

     
    lapText: {
        color: '$white',
        fontSize : 18,
    }, 

    timerContainer : {
        flexDirection: 'row',
    },

    timer: {

        color: '$bitPinky',
        fontWeight: '300',    
        fontSize : 72,
        width: 120
    },

    timerSmall: {

        color: '$bitPinky',
        fontWeight: '300',    
        fontSize : 18,
        width: 30
    },


    
    slowest : {
        color : '#ce4f24'
    },

    fastest : {
        color : '#00ac7f'
    }
   
});