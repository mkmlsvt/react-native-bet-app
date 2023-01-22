import {View, Text, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './style';
import colors from '../../shared/constansts/colors';
import Icon from '../../shared/components/Icon';
import couponService from '../../shared/services/coupon-service';
import {useAppSelector} from '../../shared/store/store';
import LoadingPage from '../../shared/components/LoadingPage';
import {useIsFocused} from '@react-navigation/native';

export default function Coupons() {
  const user = useAppSelector(state => state.user);
  const [loading, setLoading] = useState(true);
  const [coupons, setCoupons] = useState<any[]>();
  const isFocused = useIsFocused();
  useEffect(() => {
    couponService
      .getFixture(user?.id)
      .then(res => {
        setCoupons(res?.data?.reverse());
        console.log(res?.data);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [isFocused]);

  const renderItem = ({item}: {item: any}) => {
    return (
      <View
        style={{
          padding: 5,
          backgroundColor: colors.white,
          margin: 10,
          shadowColor: colors.black,
          shadowOffset: {width: 0, height: 0},
          shadowOpacity: 1,
          shadowRadius: 10,
          elevation: 10,
          borderRadius: 10,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon name="football :ion" size={15} />
          <Text style={{color: colors.black, fontWeight: '600', margin: 5}}>
            {item.id}
          </Text>
        </View>
        {item?.matchPredicts?.map((match: any, index: number) => {
          return (
            <View
              style={{flexDirection: 'row', alignItems: 'center', margin: 5}}>
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Text>{index + 1 + ' - ' + match?.matchId} Maçı </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  position: 'absolute',
                  right: 10,
                }}>
                <Text style={match?.result ? {color: 'green'} : {color: 'red'}}>
                  {Number(match?.rate).toFixed(2)}
                </Text>
                {!match?.result ? (
                  <Icon name={'close:material'} size={20} color={'red'} />
                ) : (
                  <Icon name={'check:material'} size={20} color={'green'} />
                )}
              </View>
            </View>
          );
        })}
        <View
          style={{
            marginVertical: 10,
            alignSelf: 'flex-end',
            flexDirection: 'row',
            marginRight: 15,
          }}>
          <Text>Toplam Oran: </Text>
          <Text style={{color: colors.black, fontWeight: '700'}}>
            {Number(item?.totalRate).toFixed(2)}
          </Text>
        </View>
        <View style={{position: 'absolute', left: 10, bottom: 10}}>
          <Text
            style={
              item?.isActive
                ? {color: colors.primary}
                : item?.result
                ? {color: 'green'}
                : {color: 'red'}
            }>
            {item?.isActive
              ? 'Devam Ediyor'
              : item?.result
              ? 'Başarılı'
              : 'Başarısız'}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {loading && <LoadingPage />}
      <FlatList data={coupons} renderItem={renderItem} />
    </View>
  );
}
