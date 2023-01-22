import { Text, View,StyleSheet, KeyboardAvoidingView } from "react-native";
import { Card, TextInput,Button } from "react-native-paper";
import Input from "../../shared/components/Input";
import colors from "../../shared/constansts/colors"
import {ThemedButton} from "react-native-really-awesome-button";
import LinearGradient from 'react-native-linear-gradient';
import styles from "../Register/style";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { SafeAreaView } from "react-native-safe-area-context";


export default function Login({navigation}){
    return(
        <SafeAreaView style={{flex : 1}}>

        
        <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        style={styles.keyboardAvoid}>
        <View style={styles.container}>
            <LinearGradient colors={["#00AE94", "#05973C", "#052097", "#1A0397"]} style = {styles.linearGradient}>
                <View>

            <Card style={styles.card}>
                <Card.Title title={"KAYIT OL"} style = {styles.tittle}></Card.Title>
                <Card.Content >
                <Input 
                    label={'Email'}
                    placeholder={'ornek@example.com'}
                    primaryColor={colors.primary}
                    outlineColor={colors.white}
                    activeUnderlineColor = {colors.primary}
                    textColor = {colors.primary}
                    mode={'FLAT'}
                    />
                <Input 
                    label={'Username'}
                    placeholder={'MustBeUnique'}
                    primaryColor={colors.primary}
                    outlineColor={colors.white}
                    activeUnderlineColor = {colors.primary}
                    textColor = {colors.primary}
                    mode={'FLAT'}
                />
                <Input 
                    label={'Password'}
                    placeholder={'validation'}
                    secureTextEntry = {true}
                    right={<TextInput.Icon name="eye" />}
                    primaryColor={colors.primary}
                    outlineColor={colors.white}
                    activeUnderlineColor = {colors.primary}
                    textColor = {colors.primary}
                    mode={'FLAT'}
                />
                <Input 
                    label={'Password Again'}
                    placeholder={'Password Again'}
                    secureTextEntry = {true}
                    right={<TextInput.Icon name="eye" />}

                    primaryColor={colors.primary}
                    outlineColor={colors.white}
                    activeUnderlineColor = {colors.primary}
                    textColor = {colors.primary}
                    mode={'FLAT'}
                />
                <Button uppercase={false} style={{marginTop : 20}}>Already Registered ? / Login</Button>
                <ThemedButton 
                style={styles.button}
                extra={<LinearGradient 
                    colors={["#00AE94", "#05973C", "#052097", "#1A0397"]}
                    style={{ ...StyleSheet.absoluteFillObject }}/>}
                name="rick" 
                type="anchor" 
                onPress={() => {
                    navigation.navigate('Login')
                  }}
                >KAYDOL
                </ThemedButton>
                </Card.Content>
            </Card>
            </View>
            </LinearGradient>
        </View>
        </KeyboardAwareScrollView>
        </SafeAreaView>

    )
}
