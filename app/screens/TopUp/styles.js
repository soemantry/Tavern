import { StyleSheet } from 'react-native';
import METRICS from '../../constants/metrics';
import { scale } from '../../utils/scaling';
import { COLOR_GREY, COLOR_BLACK, COLOR_WHITE, COLOR_GREEN, COLOR_TRANSPARENT } from '../../styles';
// eslint-disable-next-line import/first
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// eslint-disable-next-line no-unused-vars

const styles = StyleSheet.create({
  headerStyle: {
    fontWeight: '900',
    fontSize: 18,
    width: wp('15%')
  },
  rightHeader: {
    backgroundColor: COLOR_TRANSPARENT,
    width: wp('25%')
  },
  view: {
    marginTop: scale(30)
  },
  viewAll: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  viewUnderline: {
    width: wp('82%'),
    height: hp('0.1%'),
    backgroundColor: COLOR_GREY,
    marginBottom: METRICS.baseMargin
  },
  viewButton: {
    marginTop: METRICS.doubleBaseMargin,
    marginHorizontal: METRICS.baseMargin,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  viewButton2: {
    marginTop: METRICS.doubleBaseMargin,
    marginHorizontal: METRICS.baseMargin,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  viewTextInput: {
    flexDirection: 'row',
    marginLeft: scale(30)
  },
  hdr: {
    backgroundColor: COLOR_WHITE,
    width: wp('100%'),
    height: hp('100%')
  },
  headerContainer: {
    alignItems: 'flex-start',
    color: COLOR_BLACK
  },
  textHeader: {
    fontWeight: '900',
    fontSize: 17,
    marginRight: METRICS.baseMargin / 2
  },
  textRp: {
    fontSize: scale(22),
    color: COLOR_BLACK,
    marginTop: METRICS.baseMargin,
    marginLeft: METRICS.baseMargin
  },
  text: {
    fontSize: scale(22),
    marginHorizontal: scale(40),
    marginTop: METRICS.baseMargin,
    color: COLOR_BLACK
  },
  text1: {
    fontSize: scale(16),
    color: COLOR_GREY,
    marginTop: METRICS.baseMargin,
    marginHorizontal: METRICS.baseMargin
  },
  textInput: {
    fontSize: scale(22),
    width: wp('70%'),
    marginTop: scale(3)
  },
  textbutton: {
    fontWeight: '500',
    color: COLOR_WHITE,
    fontSize: scale(21),
    paddingHorizontal: METRICS.baseMargin
  },
  button: {
    width: wp('50%'),
    backgroundColor: COLOR_GREEN,
    borderRadius: 5,
    elevation: 3,
    shadowColor: COLOR_WHITE
  },
  textbutton1: {
    color: COLOR_BLACK,
    fontSize: scale(18)
  },
  button1: {
    width: wp('27%'),
    height: hp('11%'),
    backgroundColor: COLOR_WHITE,
    borderColor: COLOR_GREEN,
    shadowColor: COLOR_WHITE,
    borderWidth: 2,
    borderRadius: 6,
    elevation: 3
  },
  border: {
    justifyContent: 'center',
    alignItems: 'center',
    height: hp('0.1%')
  },
  coba: {
    borderRadius: 5,
    paddingVertical: METRICS.baseMargin,
    paddingHorizontal: METRICS.baseMargin,
    backgroundColor: COLOR_WHITE,
    shadowColor: COLOR_GREY,
    shadowOpacity: 0.8,
    elevation: 4,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 }
  }
});

export default styles;
