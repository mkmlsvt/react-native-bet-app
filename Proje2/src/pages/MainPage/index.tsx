import {View, Text, FlatList, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {PieChart} from 'react-native-svg-charts';
import styles from './style';
import colors from '../../shared/constansts/colors';
import {Divider} from 'react-native-paper';
import homeService from '../../shared/services/home-service';
import Icon from '../../shared/components/Icon';
import LoadingPage from '../../shared/components/LoadingPage';
import {useIsFocused} from '@react-navigation/native';

export default function MainPage() {
  const [statistic, setStatistic] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [leaderBoard, setLeaderBoard] =
    useState<{id: number; userName: string; score: string}[]>();
  const isFocused = useIsFocused();

  const pieData = [
    {
      key: 1,
      value: 4,
      svg: {fill: colors.primary},
      arc: {outerRadius: '120%', cornerRadius: 10},
    },
    {
      key: 2,
      value: 10,
      svg: {fill: colors.secondary},
      arc: {cornerRadius: 5},
    },
    {
      key: 3,
      value: 4,
      svg: {fill: colors.black + 'dd'},
      arc: {cornerRadius: 5},
    },
  ];

  useEffect(() => {
    setStatistic(pieData);
    homeService
      .getLeaderBoard()
      .then((res: any) => {
        setLeaderBoard(res?.data);
      })
      .catch((err: any) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [isFocused]);

  const renderItem = ({
    item,
    index,
  }: {
    item: {id: number; userName: string; score: string};
    index: number;
  }) => {
    return (
      <View style={{padding: 5, marginBottom: 5}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          {index == 0 && (
            <Icon
              name="crown-circle:materialcomm"
              size={20}
              color="rgba(245,240,0,1)"
            />
          )}
          <Text
            style={[
              {color: colors.black, marginLeft: 10},
              index < 1 && {fontWeight: '700', fontSize: 16},
              index == 0 && {color: 'rgba(245,240,0,1)'},
            ]}>
            {index != 0 && index + 1 + ' - '}
            {item?.userName}
          </Text>
          <Text
            style={[
              {position: 'absolute', right: 10, color: 'black'},
              index == 0 && {color: 'rgba(245,240,0,1)'},
            ]}>
            {item?.score} Puan
          </Text>
        </View>
        <Divider style={{height: 2, marginTop: 5}} />
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {loading && <LoadingPage />}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <PieChart
          style={styles.pie}
          outerRadius={'70%'}
          innerRadius={10}
          data={statistic || []}
        />

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '45%',
            height: 200,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={[styles.box, {backgroundColor: colors.primary}]} />
            <Text style={{color: colors.primary, marginLeft: 5}}>
              Kazanılan{' '}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={[styles.box, {backgroundColor: colors.secondary}]} />
            <Text style={{color: colors.secondary, marginLeft: 5}}>
              Kaybedilen
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={[styles.box, {backgroundColor: colors.black}]} />
            <Text style={{color: colors.black, marginLeft: 5}}>
              İptal Edilen
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          padding: 10,
          shadowColor: colors.black,
          shadowOffset: {width: 0, height: 0},
          shadowOpacity: 0.5,
          shadowRadius: 10,
          elevation: 5,
          backgroundColor: colors.white,
          margin: 10,
          borderRadius: 10,
        }}>
        <Text
          style={{
            textAlign: 'center',
            alignSelf: 'center',
            color: colors.black,
            fontSize: 20,
            fontWeight: '500',
          }}>
          Lider Tablosu
        </Text>
        <FlatList data={leaderBoard} renderItem={renderItem} />
      </View>
    </ScrollView>
  );
}
