import {View, Text} from 'react-native';
import React from 'react';
import {useAppSelector} from '../../shared/store/store';
import colors from '../../shared/constansts/colors';

export default function Profile() {
  const user = useAppSelector(state => state.user);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <View
        style={{
          flexDirection: 'row',
          height: '10%',
          alignItems: 'center',
          padding: 20,
          margin: 10,
          shadowColor: colors.primary,
          shadowOffset: {width: 0, height: 0},
          backgroundColor: colors.white,
          shadowOpacity: 0.5,
          shadowRadius: 10,
          elevation: 10,
          borderRadius: 10,
        }}>
        <Text style={{fontSize: 18, fontWeight: '500'}}>Mail</Text>
        <Text style={{position: 'absolute', right: 20, fontSize: 15}}>
          {user.email}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          height: '10%',
          alignItems: 'center',
          padding: 20,
          margin: 10,
          shadowColor: colors.primary,
          shadowOffset: {width: 0, height: 0},
          shadowOpacity: 0.5,
          shadowRadius: 10,
          elevation: 10,
          borderRadius: 10,
          backgroundColor: colors.white,
        }}>
        <Text style={{fontSize: 18, fontWeight: '500'}}>Skor</Text>
        <Text style={{position: 'absolute', right: 20, fontSize: 15}}>
          {user.score} Puan
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          height: '10%',
          alignItems: 'center',
          padding: 20,
          margin: 10,
          shadowColor: colors.primary,
          shadowOffset: {width: 0, height: 0},
          shadowOpacity: 0.5,
          shadowRadius: 10,
          elevation: 10,
          borderRadius: 10,
          backgroundColor: colors.white,
        }}>
        <Text style={{fontSize: 18, fontWeight: '500'}}>Kullanıcı Adı</Text>
        <Text style={{position: 'absolute', right: 20, fontSize: 15}}>
          {user.userName}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          height: '10%',
          alignItems: 'center',
          padding: 20,
          margin: 10,
          shadowColor: colors.primary,
          shadowOffset: {width: 0, height: 0},
          shadowOpacity: 0.5,
          shadowRadius: 10,
          elevation: 10,
          borderRadius: 10,
          backgroundColor: colors.white,
        }}>
        <Text style={{fontSize: 18, fontWeight: '500'}}>Kredi</Text>
        <Text style={{position: 'absolute', right: 20, fontSize: 15}}>
          {user.credit}
        </Text>
      </View>
    </View>
  );
}
