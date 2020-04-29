/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLOR_WHITE, COLOR_GREY } from '../../styles';
import metrics from '../../constants/metrics';
import { scale } from '../../utils/scaling';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_WHITE,
    paddingHorizontal: metrics.doubleBaseMargin,
    paddingVertical: metrics.doubleBaseMargin
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '900'
  },
  categoryIcon: {
    height: hp('5%'),
    width: wp('11%')
  },
  categoryText: {
    fontSize: wp('3%'),
    fontWeight: 'bold',
    paddingVertical: metrics.baseMargin
  },
  categoryContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  divider: {
    height: hp('0.2%'),
    width: wp('25%'),
    backgroundColor: COLOR_GREY
  },
  categoryView: {
    alignItems: 'center'
  },
  categoryRow: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'stretch'
  },
  autoScroll: {
    backgroundColor: COLOR_GREY,
    width: metrics.screenWidth,
    alignSelf: 'stretch',
    marginBottom: scale(30),
    height: scale(125)
  },
  imageScroll: {
    alignSelf: 'center',
    borderRadius: 15,
    marginBottom: metrics.doubleBaseMargin + 10,
    height: scale(120),
    width: scale(300)
  }
});

export default styles;
