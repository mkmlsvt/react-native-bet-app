import {StyleSheet} from "react-native";
import colors from "../../shared/constansts/colors";

const styles = StyleSheet.create({

    container : {
        display : "flex",
        flex : 1,
        justifyContent : "center",
        alignItems : "center",
        flexDirection : "row",
        textAlign : "center"
    },
    keyboardAvoid : {
        display : "flex",
        flex : 1,
        
   },
    linearGradient : {
        alignItems : "center",
        justifyContent : "center",
        height : "100%",
        width : "100%",
        paddingVertical : "40%"
    },
    card : {
        borderRadius : 20,
        justifyContent : "center",
        alignItems : "center",
        display : "flex",
    },
    tittle : {
        textAlign : "center",
        justifyContent : "center",
        display : "flex",
        marginLeft : "30%"
    },
    button : {
        marginHorizontal : "15%",
        marginTop : 50
    }
    
});
export default styles;