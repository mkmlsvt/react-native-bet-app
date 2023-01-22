import {View, Text, FlatList, RefreshControl} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './style';
import colors from '../../shared/constansts/colors';
import fixtureService from '../../shared/services/fixture-service';
import LoadingPage from '../../shared/components/LoadingPage';

export default function LiveMatch() {
  const [matchs, setMatchs] = useState<any[]>();
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState<boolean>(false);
  useEffect(() => {
    fixtureService
      .getLiveFixture()
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

  const onRefresh = () => {
    setRefresh(true);
    setLoading(true);
    fixtureService
      .getLiveFixture()
      .then(res => {
        setMatchs(res?.data);
      })
      .catch(err => {
        console.log(JSON.stringify(err));
      })
      .finally(() => {
        setLoading(false);
        setRefresh(false);
      });
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
          marginBottom: 15,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
          }}>
          <Text
            style={{
              position: 'absolute',
              top: 0,
              alignSelf: 'center',
              color: colors.gray,
            }}>
            {item?.fixture?.status?.elapsed}'
          </Text>
          <Text style={{width: '25%'}}>{item?.teams?.home?.name}</Text>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: '50%',
              padding: 5,
              marginTop: 5,
            }}>
            <Text
              style={{
                backgroundColor: 'white',
                shadowColor: 'gray',
                shadowOffset: {width: 0, height: 0},
                shadowOpacity: 0.7,
                shadowRadius: 5,
                elevation: 5,
                padding: 10,
                borderRadius: 5,
              }}>
              {item?.goals?.home} - {item?.goals?.away}
            </Text>
          </View>
          <Text style={{width: '25%', textAlign: 'right'}}>
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
        Canlı Maçlar
      </Text>
      <FlatList
        data={matchs}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
        }
      />
    </View>
  );
}
