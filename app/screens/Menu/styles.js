/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {
  COLOR_WHITE,
  COLOR_BLACK,
  FONT_SUBTITLE1_SECONDARY,
  FONT_BODY2_PRIMARY,
  FONT_CAPTION_PRIMARY,
  FONT_BODY1_PRIMARY,
  COLOR_GRAY_SEARCH,
  COLOR_GREEN_PRIMARY
} from '../../styles';
import METRICS from '../../constants/metrics';
import { heightByScreen } from '../../utils/dimensions';
import { scale } from '../../utils/scaling';

const styles = StyleSheet.create({
  container: { backgroundColor: COLOR_WHITE },
  information: {
    width: METRICS.screenWidth - 2 * METRICS.doubleBaseMargin,
    padding: METRICS.baseMargin
  },
  imageContainer: { height: heightByScreen(20) - METRICS.baseMargin, width: METRICS.screenWidth },
  image: {
    backgroundColor: COLOR_GRAY_SEARCH,
    width: wp('30%'),
    height: hp('12%'),
    borderRadius: scale(10)
  },
  imagesFound: {
    width: METRICS.screenWidth * 0.4,
    height: METRICS.screenWidth * 0.4
  },
  containerFound: {
    alignItems: 'center',
    backgroundColor: COLOR_WHITE,
    flex: 1,
    justifyContent: 'center'
  },
  containerImgFound: {
    marginTop: METRICS.doubleBaseMargin * 5,
    marginBottom: METRICS.doubleBaseMargin * 1.5
  },
  txtTitleFound: {
    ...FONT_SUBTITLE1_SECONDARY,
    textAlign: 'center',
    color: COLOR_BLACK
  },
  txtDescFound: {
    textAlign: 'center',
    ...FONT_BODY2_PRIMARY,
    paddingTop: METRICS.baseMargin
  },
  textFound: {
    marginVertical: METRICS.doubleBaseMargin
  },
  listMenu: {
    borderWidth: 1,
    borderColor: COLOR_GRAY_SEARCH,
    flexDirection: 'row',
    height: hp('15%'),
    paddingHorizontal: scale(15)
  },
  imageList: {
    marginVertical: METRICS.baseMargin
  },
  textView: {
    flexDirection: 'column',
    padding: METRICS.baseMargin,
    width: wp('40%')
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    ...FONT_BODY1_PRIMARY,
    marginTop: scale(5)
  },
  deskripsi: {
    ...FONT_CAPTION_PRIMARY,
    fontWeight: 'normal'
  },
  price: {
    flexDirection: 'row',
    marginTop: scale(10)
  },
  rp: {
    ...FONT_BODY1_PRIMARY,
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: scale(5)
  },
  nominal: {
    ...FONT_BODY1_PRIMARY,
    fontSize: 18,
    fontWeight: '600'
  },
  buttonView: {
    justifyContent: 'center',
    marginRight: METRICS.baseMargin
  },
  button: {
    backgroundColor: COLOR_GREEN_PRIMARY,
    width: wp('20%'),
    height: wp('10%')
  },
  btnText: {
    color: COLOR_WHITE
  }
});

export default styles;
