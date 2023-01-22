import {View} from 'react-native';
import React from 'react';
import styles from './style';

import Lottie from 'lottie-react-native';
import Loading from '../../constansts/Lottie/loading.json';

export default function LoadingPage() {

  return (
    <View style={styles.container}>
      <Lottie source={Loading} loop autoPlay />
    </View>
  );
}
