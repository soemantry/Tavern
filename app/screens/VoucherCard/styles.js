import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { scale } from '../../utils/scaling';
import MATRICS from '../../constants/metrics';
import {
  COLOR_WHITE,
  COLOR_BLACK,
  FONT_HEADLINE5_PRIMARY,
  FONT_BODY1_PRIMARY,
  FONT_OVERLINE_PRIMARY,
  COLOR_GREEN_PRIMARY,
  FONT_SUBTITLE1_SECONDARY,
  FONT_BODY2_PRIMARY
} from '../../styles';

const styles = StyleSheet.create({
  button: {
    height: hp('5%'),
    padding: MATRICS.baseMargin,
    width: wp('10%'),
    marginLeft: scale(30)
  },
  cardImage: {
    borderRadius: 25,
    height: hp('30%'),
    justifyContent: 'flex-end',
    marginLeft: '2%',
    marginRight: '2%',
    shadowColor: COLOR_BLACK,
    shadowOffset: {
      width: scale(10),
      height: scale(10)
    },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    width: wp('96%')
  },
  cardText: {
    backgroundColor: COLOR_WHITE,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: 'row',
    height: scale(70),
    padding: MATRICS.baseMargin
  },
  container: {
    marginTop: MATRICS.doubleBaseMargin
  },
  copy: {
    padding: MATRICS.copy
  },
  date: {
    flexDirection: 'row',
    ...FONT_OVERLINE_PRIMARY,
    padding: MATRICS.baseMargin
  },
  masaberlaku: {
    paddingLeft: 5
  },
  modal: {
    backgroundColor: COLOR_WHITE,
    borderRadius: 10,
    marginHorizontal: '5%',
    flexDirection: 'column',
    height: scale(230),
    padding: scale(20),
    width: '90%'
  },
  modalButton: {
    alignContent: 'center',
    alignSelf: 'center',
    flex: 2,
    justifyContent: 'flex-end',
    marginTop: MATRICS.baseMargin
  },
  title: {
    fontWeight: 'bold',
    ...FONT_BODY1_PRIMARY
  },
  titleModal: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  desk: {
    paddingTop: MATRICS.baseMargin
  },
  token: {},
  tokenText: {
    color: COLOR_WHITE,
    ...FONT_HEADLINE5_PRIMARY,
    fontWeight: 'bold'
  },
  tokenView: {
    alignSelf: 'center',
    backgroundColor: COLOR_GREEN_PRIMARY,
    borderRadius: 10,
    height: hp('7.5%'),
    justifyContent: 'center',
    marginTop: MATRICS.doubleBaseMargin,
    width: wp('50%'),
    alignItems: 'center'
  },
  content: {
    marginBottom: scale(60)
  },
  lihat: {
    backgroundColor: COLOR_GREEN_PRIMARY
  },
  buttonModal: {
    backgroundColor: COLOR_GREEN_PRIMARY
  },
  containerFound: {
    alignItems: 'center',
    backgroundColor: COLOR_WHITE,
    justifyContent: 'center',
    width: wp('100%'),
    height: hp('100%')
  },
  containerImgFound: {},
  imagesFound: {
    width: wp('96%'),
    height: hp('50%')
  },
  txtTitleFound: {
    ...FONT_SUBTITLE1_SECONDARY,
    textAlign: 'center',
    color: COLOR_BLACK
  },
  txtDescFound: {
    textAlign: 'center',
    ...FONT_BODY2_PRIMARY,
    paddingTop: MATRICS.baseMargin
  },
  textFound: {
    marginVertical: MATRICS.doubleBaseMargin
  },
  noVoucher: {
    justifyContent: 'center',
    alignItems: 'stretch'
  }
});

export default styles;
