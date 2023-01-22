import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    width: width ,
    height: height * 0.98,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
