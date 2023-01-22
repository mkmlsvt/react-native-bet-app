import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../constansts/colors';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    height: height * 0.1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderColor: '#ddd',
    shadowColor: '#aaa',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  tabStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '5%',
  },
  midTabStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    top: (height * -0.04) / 2.5,
    backgroundColor: colors.primary,
    borderRadius: (width * width) / 2,
    width: width * 0.15,
    height: width * 0.15,
    elevation: 10,
    shadowColor: colors.secondary,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    marginBottom: '5%',
  },
});

export default styles;