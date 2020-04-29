/* eslint-disable import/first */
import { StyleSheet } from 'react-native';
import { COLOR_WHITE } from '../../styles';
import { scale } from '../../utils/scaling';
import metrics from '../../constants/metrics';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    backgroundColor: COLOR_WHITE
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    flex: 1,
    width: wp('200%'),
    height: wp('110%')
  },
  row: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: metrics.section,
    marginHorizontal: scale(15)
  },
  header: {
    fontSize: 24
  },
  text: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center'
  },
  gambar: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    marginHorizontal: scale(100),
    marginRight: metrics.marginHorizontal,
    marginTop: metrics.doubleBaseMargin
  },
  icon: {
    flex: 1
  },
  icon1: {
    width: wp('20%'),
    height: hp('15%')
  },
  versi: {
    marginTop: scale(90)
  }
});

export default styles;
