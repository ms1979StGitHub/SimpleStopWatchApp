import EStyleSheet from 'react-native-extended-stylesheet';

const imageHeight = 80;
const imageWidth = 80;
const borderRadius = imageHeight / 2;

export default EStyleSheet.create({
    
    button: {
        
        width : imageWidth,
        height : imageHeight,
        borderRadius : borderRadius,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonTitle : {
        fontSize : 18
    },

    buttonBorder: {
        
        width : 76,
        height : 76,
        borderRadius : 76/2,
        borderWidth: 2,
        borderColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',

    },

    buttonsRow : {
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'space-between',
        marginTop: 80,
        paddingHorizontal: 20,
        marginBottom: 30,

    }

});