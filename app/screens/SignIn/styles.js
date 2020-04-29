/* eslint-disable import/named */
/* eslint-disable import/namespace */
import { StyleSheet } from 'react-native';
import {
  COLOR_WHITE,
  COLOR_BASE_PRIMARY_MAIN,
  FONT_SIGNIN_REGULAR,
  FONT_SIZE_BODY3,
  FONT_SIZE_BODY4,
  COLOR_WHITE_OPACITY50
} from '../../styles';
import { scale } from '../../utils/scaling';
import METRICS from '../../constants/metrics';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_WHITE
  },
  logoContainer: {
    width: scale(100),
    height: scale(100),
    alignContent: 'center',
    alignSelf: 'center'
  },
  logo: {
    width: 120,
    height: 100
  },
  forgetPass: {
    alignSelf: 'flex-end',
    marginRight: METRICS.doubleBaseMargin,
    marginBottom: METRICS.doubleSection,
    color: COLOR_WHITE
  },
  signUp: {
    color: COLOR_WHITE,
    fontWeight: 'bold',
    fontSize: FONT_SIZE_BODY4,
    fontFamily: FONT_SIGNIN_REGULAR,
    padding: METRICS.smallMargin
  },
  margin: { marginBottom: METRICS.baseMargin },
  outlined: { backgroundColor: COLOR_WHITE, borderColor: COLOR_BASE_PRIMARY_MAIN, borderWidth: 2 },
  outlinedText: { color: COLOR_BASE_PRIMARY_MAIN },
  buttonContainer: {
    alignItems: 'center'
  },
  buttons: {
    alignSelf: 'center',
    justifyContent: 'center'
  },
  dont: {
    color: COLOR_WHITE,
    opacity: 0.8,
    justifyContent: 'center',
    fontFamily: FONT_SIGNIN_REGULAR,
    fontSize: FONT_SIZE_BODY3,
    padding: METRICS.smallMargin
  },
  dontContainer: {
    flexDirection: 'row',
    marginTop: METRICS.doubleBaseMargin
  },
  Inputemail: {
    flex: 1,
    color: COLOR_WHITE
  },
  inputpassword: {
    flex: 1,
    color: COLOR_WHITE
  },
  emailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: scale(2),
    marginBottom: scale(20),
    borderBottomColor: COLOR_WHITE_OPACITY50,
    width: scale(280),
    alignContent: 'center',
    alignSelf: 'center'
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: scale(2),
    marginBottom: scale(20),
    borderBottomColor: COLOR_WHITE_OPACITY50,
    width: scale(280),
    alignContent: 'center',
    alignSelf: 'center'
  }
  // icon: {
  //   marginTop: METRICS.section,
  //   marginLeft: METRICS.marginVertical
  // }
});

export default styles;
