/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import { COLOR_WHITE, COLOR_HIJAU } from '../../styles';
import metrics from '../../constants/metrics';
import { scale } from '../../utils/scaling';

const styles = StyleSheet.create({
  container: {},
  image: {
    width: scale(100),
    height: scale(100)
  },
  text: {
    fontSize: 50,
    color: COLOR_WHITE
  },
  Button: {
    color: COLOR_HIJAU,
    justifyContent: 'center'
  },
  containerButton: {
    alignItems: 'center',
    borderBottomColor: COLOR_WHITE
  },
  imageBackground: {
    height: scale(610),
    justifyContent: 'center'
  },
  judul: {
    color: COLOR_WHITE,
    alignSelf: 'center',
    fontSize: 25,
    marginBottom: metrics.section,
    fontWeight: 'bold'
  },
  judul2: {
    color: COLOR_WHITE,
    alignSelf: 'center',
    marginBottom: metrics.doubleSection
  },
  isiInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: scale(1),
    marginBottom: scale(60),
    borderBottomColor: COLOR_WHITE,
    width: scale(320),
    alignContent: 'center',
    alignSelf: 'center'
  },
  sms: {
    width: scale(20),
    marginLeft: metrics.smallMargin
  },
  // iconEmail: {
  //   marginTop: metrics.section,
  //   marginLeft: metrics.marginVertical
  // },
  data: {
    color: COLOR_WHITE
  }
});

export default styles;
