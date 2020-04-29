/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import metrics from '../../constants/metrics';
import { COLOR_WHITE, COLOR_BLACK, COLOR_GREY } from '../../styles';
import { scale } from '../../utils/scaling';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    backgroundColor: COLOR_WHITE
  },
  img: {
    alignItems: 'center'
  },
  headerStyle: {
    fontWeight: '800',
    fontSize: scale(24),
    width: metrics.screenWidth / 2,
    paddingLeft: scale(80)
  },
  avatar: {
    width: scale(150),
    height: scale(150),
    borderRadius: scale(150),
    borderWidth: scale(2),
    marginTop: scale(20),
    borderColor: COLOR_GREY
  },
  edit: {
    alignItems: 'flex-end',
    marginRight: scale(15)
  },
  biodata: {
    marginHorizontal: metrics.doubleBaseMargin
  },
  judul: {
    marginTop: scale(20),
    color: COLOR_GREY,
    fontSize: 14
  },
  keterangan: {
    color: COLOR_BLACK,
    marginVertical: scale(5),
    fontSize: 16
  },
  line: {
    marginBottom: scale(20),
    marginTop: scale(30),
    borderTopWidth: scale(2),
    borderColor: COLOR_GREY
  },
  downbutton: {
    flexDirection: 'row',
    marginVertical: scale(15),
    height: scale(25)
  },
  containerbutton: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  imagebutton: {
    marginHorizontal: metrics.doubleBaseMargin,
    width: scale(25),
    height: scale(15)
  },
  textbutton: {
    marginHorizontal: scale(10),
    textAlign: 'center',
    color: COLOR_BLACK
  },
  imagehelp: {
    marginLeft: scale(15),
    width: scale(25),
    height: scale(25)
  },
  texthelp: {
    marginLeft: scale(15),
    textAlign: 'center',
    color: COLOR_BLACK
  },
  space: {
    height: scale(25)
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '900'
  }
});

export default styles;
