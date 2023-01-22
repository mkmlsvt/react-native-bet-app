import {
  Text,
  Alert,
  KeyboardAvoidingView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
import Input from '../../shared/components/Input';
import colors from '../../shared/constansts/colors';
import { TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useEffect, useState} from 'react';
import userService from '../../shared/services/user-service';
import {useAppDispatch} from '../../shared/store/store';
import {setUser} from '../../shared/store/slices/userSlice';

export default function Login() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [mail, setMail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useAppDispatch();
  const navigate = () => {
    if (mail && password) {
      userService
        .login(mail)
        .then((res: any) => {
          dispatch(setUser(res?.data));
          navigation.navigate('BottomNavBar');
        })
        .catch(err => {
          Alert.alert('Hata', 'Lütfen bilgilerinizi doğru giriniz')
          console.log(err, 'ad');
        });
    }
    else{
      Alert.alert('Hata', 'Lütfen bilgilerinizi eksiksiz giriniz')
    }
  };
  useEffect(() => {
    console.log(mail);
  }, [mail]);
  return (
    <KeyboardAvoidingView behavior="height" style={styles.wrapper}>
      <ImageBackground
        style={styles.backGround}
        source={require('../../shared/assets/images/loginBackGround.jpeg')}>
        <Text style={styles.header}>GİRİŞ YAP</Text>
        <TouchableOpacity
          style={{alignSelf: 'center'}}
          onPress={() => {
            navigation.navigate('Register');
          }}>
          <Text>Kayıt Ol</Text>
        </TouchableOpacity>
        <Input
          label={'Email'}
          value={mail}
          onChangeText={setMail}
          style={styles.input}
          placeholder={'ornek@example.com'}
          backgroundColor={colors.transparent}
        />
        <Input
          label={'Password'}
          value={password}
          onChangeText={setPassword}
          placeholder={'validation'}
          style={[styles.input, {marginTop: '10%'}]}
          secureTextEntry={true}
          right={<TextInput.Icon name="eye" />}
          backgroundColor={colors.transparent}
        />
        <TouchableOpacity
          onPress={navigate}
          style={{
            width: '95%',
            alignSelf: 'center',
            borderRadius: 10,
            padding: 15,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
            backgroundColor: colors.transparent,
            shadowColor: colors.white,
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: .5,
            shadowRadius: 25,
          }}>
          <Text style={{color: colors.white + 'CD'}}>Giriş Yap</Text>
        </TouchableOpacity>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}
/*

    <ThemedButton
          extra={
            <LinearGradient
              colors={['#00AE94', '#05973C', '#052097', '#1A0397']}
              style={{...StyleSheet.absoluteFillObject}}
            />
          }
          style={styles.buttonLogin}
          name="rick"
          type="anchor"
          onPress={navigate}>
          GİRİŞ YAP
        </ThemedButton>
*/
