import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './style';
import colors from '../../shared/constansts/colors';
import Button from '../../shared/components/Button';
import fixtureService from '../../shared/services/fixture-service';
import LoadingPage from '../../shared/components/LoadingPage';
import {useAppDispatch, useAppSelector} from '../../shared/store/store';
import {CouponType, MatchPredict} from '../../shared/store/slices/type';
import {setCoupon} from '../../shared/store/slices/couponSlice';

export default function Fixture() {
  const [matchs, setMatchs] = useState<any[]>();
  const [loading, setLoading] = useState(true);
  const user = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();
  const coupon: any = useAppSelector(state => state.coupon);

  useEffect(() => {
    fixtureService
      .getFixture()
      .then(res => {
        setMatchs(res?.data);
      })
      .catch(err => {
        console.log(JSON.stringify(err));
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const addCoupon = (item: any, prediction: number) => {
    let matchPredicts: MatchPredict[] = [];
    let fc: CouponType | any = {};
    const pre = prediction ? (prediction === 1 ? 0 : 2) : 1;
    const rt = item?.bets?.[0].values?.[prediction].odd;

    if (coupon?.matchPredicts?.length) {
      //Kupon Var
      matchPredicts = [...coupon?.matchPredicts];
      const index = matchPredicts?.findIndex(
        (x: any) => x?.matchId == item?.fixture?.id,
      );

      if (index != -1) {
        //Maç var
        matchPredicts[index] = {
          ...matchPredicts[index],
          ...{prediction: pre, rate: rt},
        };
      } else {
        //Maç Yok
        matchPredicts.push({
          matchId: item?.fixture?.id ?? '0',
          isActive: true,
          prediction: pre,
          rate: rt,
          result: true,
        });
      }
      let total = 1.0;
      matchPredicts?.map(x => {
        total *= x?.rate;
      });
      fc = {
        ownerId: user?.id,
        result: true,
        isActive: true,
        matchPredicts: matchPredicts,
        totalRate: total,
      };
      dispatch(setCoupon(fc));
    } else {
      //Kupon Yok
      matchPredicts.push({
        matchId: item?.fixture?.id ?? '0',
        isActive: true,
        prediction: pre,
        rate: rt,
        result: true,
      });
      fc = {
        ownerId: user?.id,
        result: true,
        isActive: true,
        matchPredicts: matchPredicts,
        totalRate: rt,
      };
      dispatch(setCoupon(fc));
    }
  };
  const renderItem = ({item}: {item: any}) => {
    return (
      <View
        style={{
          backgroundColor: colors.white,
          margin: 7,
          shadowColor: colors.black,
          shadowOffset: {width: 0, height: 0},
          shadowOpacity: 1,
          shadowRadius: 10,
          elevation: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 20,
          }}>
          <Text style={{width: '25%'}} numberOfLines={1}>
            {item?.teams?.home?.name}
          </Text>
          <Text style={{position: 'absolute', top: 0, left: 20}}>
            #{item?.fixture?.id}
          </Text>
          <View style={{flexDirection: 'row', width: '40%'}}>
            <Button
              onPress={() => addCoupon(item, 0)}
              text={item?.bets?.[0].values?.[0].odd}
              containerStyle={{width: '33%', height: 26, marginHorizontal: 3}}
            />
            <Button
              onPress={() => addCoupon(item, 1)}
              text={item?.bets?.[0].values?.[1].odd}
              containerStyle={{width: '33%', height: 26, marginHorizontal: 3}}
            />
            <Button
              onPress={() => addCoupon(item, 2)}
              text={item?.bets?.[0].values?.[2].odd}
              containerStyle={{width: '33%', height: 26, marginHorizontal: 3}}
            />
          </View>
          <Text
            style={{
              position: 'absolute',
              right: 10,
              width: '30%',
              marginLeft: 10,
              textAlign: 'right',
            }}
            numberOfLines={1}>
            {item?.teams?.away?.name}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {loading && <LoadingPage />}

      <Text style={{marginHorizontal: 10, fontSize: 16, color: colors.black}}>
        Günün MaçlarI
      </Text>
      <FlatList data={matchs} renderItem={renderItem} />
    </View>
  );
}
