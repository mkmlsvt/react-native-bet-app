import {View, Text, FlatList, Alert} from 'react-native';
import React from 'react';
import {useAppDispatch, useAppSelector} from '../../shared/store/store';
import {CouponType, MatchPredict} from '../../shared/store/slices/type';
import colors from '../../shared/constansts/colors';
import Button from '../../shared/components/Button';
import couponService from '../../shared/services/coupon-service';
import {setCoupon} from '../../shared/store/slices/couponSlice';
import {useNavigation} from '@react-navigation/native';

export default function CreateCoupon() {
  const coupon: CouponType | {} = useAppSelector(state => state.coupon);
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const submit = () => {
    couponService
      .postCoupon(coupon)
      .then(res => {
        dispatch(setCoupon({}));
        navigation.goBack();
      })
      .catch(err => {
        Alert.alert('Hata', 'Krediniz yetersiz');
        console.log(err);
      });
  };
  const renderItem = ({item}: {item: MatchPredict}) => {
    return (
      <View
        style={{
          alignSelf: 'center',
          width: '95%',
          padding: 20,
          backgroundColor: colors.white,
          margin: 5,
          borderRadius: 5,
          shadowColor: colors.secondary,
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 1,
          shadowRadius: 5,
          elevation: 5,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text style={{color: colors.black}}>Maç: #{item?.matchId}</Text>
          <Text style={{color: colors.black}}>M.S.: {item?.prediction}</Text>
          <Text style={{color: colors.black}}>Oran: {item?.rate}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <View>
        <FlatList data={coupon?.matchPredicts ?? []} renderItem={renderItem} />
        <Text style={{color: colors.black, alignSelf: 'flex-end', margin: 10}}>
          Toplam Oran: {coupon?.totalRate ?? '0.00'}
        </Text>
        <Button
          text="Kaydet"
          containerStyle={{
            width: '90%',
            alignSelf: 'center',
            borderRadius: 5,
            marginTop: 20,
            borderWidth: 0,
            backgroundColor: colors.white,
            shadowColor: colors.black,
            shadowOffset: {
              width: 10,
              height: 10,
            },
            shadowOpacity: 1,
            shadowRadius: 10,
            elevation: 10,
          }}
          onPress={submit}
        />
      </View>
    </View>
  );
}
