import { StyleSheet } from "react-native";
import colors from "../../shared/constansts/colors/index";



const styles = StyleSheet.create({
    wrapper : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        flexDirection :'column'
    },
    backGround : {
        flex : 1,
        alignSelf : "stretch",
        width : null,
        height : null,
    },
    header : {
        fontFamily : 'Cochin',
        textAlign : 'center',
        marginTop : '20%',
        fontSize : 40,
        color : colors.secondary,
        fontWeight : 'bold',     
    },
    input : {
        shadowOpacity : 10,
        height : 50,
        marginTop : '40%'
    },
    buttonLogin : {
        marginHorizontal : '25%',
        marginTop : '10%'
    }
    
});


export default styles;