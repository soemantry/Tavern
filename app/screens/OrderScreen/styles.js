/* eslint-disable import/first */
import { StyleSheet } from 'react-native';
import { COLOR_WHITE, COLOR_BLACK, COLOR_EVENT_INACTIVE, COLOR_GREEN, COLOR_GREY } from '../../styles';
import { scale } from '../../utils/scaling';
import metrics from '../../constants/metrics';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_WHITE
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '900'
  },
  View1: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: COLOR_WHITE,
    paddingLeft: scale(20),
    paddingRight: scale(100)
  },
  imageContainer: {
    // flex: 1,
    marginTop: metrics.doubleBaseMargin
  },
  imageContainer2: {
    // flex: 1,
    marginTop: metrics.doubleBaseMargin
  },
  textContainer: {
    marginTop: scale(15),
    fontSize: 14,
    color: COLOR_BLACK,
    fontWeight: 'bold',
    paddingLeft: scale(24)
  },
  makananContainer: {
    color: COLOR_BLACK,
    fontWeight: 'bold',
    fontSize: 14
  },
  hargaContainer: {
    marginTop: scale(4.9),
    fontSize: 14,
    paddingLeft: scale(4),
    marginBottom: scale(5)
  },
  plusminusContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLOR_GREY,
    justifyContent: 'center'
  },
  plusImage: {
    marginLeft: metrics.doubleBaseMargin,
    marginRight: scale(8)
  },
  minusImage: {
    marginRight: metrics.doubleBaseMargin,
    marginLeft: scale(8)
  },
  spasiContainer: {
    backgroundColor: COLOR_EVENT_INACTIVE,
    height: hp('1%'),
    marginTop: metrics.doubleBaseMargin
  },
  viewnomejaContainer: {
    backgroundColor: COLOR_WHITE,
    paddingHorizontal: scale(15)
  },
  textnomejaContainer: {
    fontWeight: 'bold',
    fontSize: 14,
    color: COLOR_BLACK,
    marginTop: metrics.doubleBaseMargin,
    marginLeft: scale(3)
  },
  textinputContainer: {
    textAlign: 'left',
    paddingLeft: scale(5)
  },
  spasiContainer2: {
    backgroundColor: COLOR_EVENT_INACTIVE,
    height: scale(5),
    marginTop: scale(16)
  },
  catatanviewContainer: {
    backgroundColor: COLOR_WHITE
  },
  catatanContainer: {
    fontWeight: 'bold',
    fontSize: 14,
    color: COLOR_BLACK,
    marginTop: metrics.doubleBaseMargin,
    paddingLeft: scale(20)
  },
  textinputContainer3: {
    textAlign: 'left',
    paddingLeft: scale(20)
  },
  spasiContainer3: {
    backgroundColor: COLOR_EVENT_INACTIVE,
    height: scale(5),
    marginTop: scale(15)
  },
  kodeVoucher: {
    backgroundColor: COLOR_WHITE,
    flexDirection: 'row',
    alignItems: 'flex-end',
    width: wp('100%'),
    height: hp('8%')
  },
  voucherContainer: {
    fontWeight: 'bold',
    fontSize: 14,
    color: COLOR_BLACK,
    paddingLeft: scale(20),
    paddingBottom: scale(14)
  },
  buttonvoucherContainer: {
    marginLeft: scale(155),
    backgroundColor: COLOR_GREEN,
    borderRadius: 5,
    width: wp('15%'),
    height: hp('4%'),
    alignItems: 'center',
    marginBottom: metrics.baseMargin
  },
  textPakaiContainer: {
    color: COLOR_WHITE,
    fontSize: 12,
    fontWeight: 'bold',
    marginVertical: scale(6.5),
    marginHorizontal: scale(6)
  },
  spasiContainer4: {
    backgroundColor: COLOR_EVENT_INACTIVE,
    height: scale(5),
    marginTop: metrics.BaseMargin
  },
  checkOut: {
    backgroundColor: COLOR_WHITE,
    flexDirection: 'column'
  },
  viewHarga: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: metrics.BaseMargin,
    paddingRight: scale(30),
    paddingTop: scale(20)
  },
  viewDiskon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: metrics.BaseMargin,
    paddingRight: scale(30),
    paddingTop: scale(5)
  },
  viewTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: metrics.BaseMargin,
    paddingRight: scale(30),
    paddingBottom: scale(15),
    paddingTop: scale(5)
  },
  jmlhargaContainer: {
    fontWeight: 'bold',
    fontSize: 14,
    color: COLOR_BLACK,
    marginLeft: metrics.doubleBaseMargin,
    paddingTop: scale(5)
  },
  diskonContainer: {
    fontWeight: 'bold',
    fontSize: 14,
    color: COLOR_BLACK,
    marginLeft: metrics.doubleBaseMargin,
    paddingTop: scale(5)
  },
  tothargaContainer: {
    fontWeight: 'bold',
    fontSize: 14,
    color: COLOR_BLACK,
    marginLeft: metrics.doubleBaseMargin,
    paddingTop: scale(5)
  },
  buttonPesananContainer: {
    width: wp('80%'),
    height: hp('4%'),
    backgroundColor: COLOR_GREEN,
    alignItems: 'center',
    color: COLOR_WHITE,
    borderRadius: 5,
    marginVertical: scale(15),
    marginHorizontal: scale(35)
  },
  textPesanan: {
    color: COLOR_WHITE,
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: scale(6),
    marginHorizontal: scale(6)
  },
  border2: {
    width: wp('60%'),
    height: hp('30%'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_WHITE,
    borderRadius: scale(10)
  },
  modal: {
    marginHorizontal: 15,
    fontWeight: 'bold',
    fontSize: scale(19),
    lineHeight: scale(25)
  },
  img: {
    marginBottom: scale(25)
  },
  modal1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default styles;
