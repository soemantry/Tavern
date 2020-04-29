/* eslint-disable no-undef */
/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import {
  COLOR_BLACK,
  COLOR_TRANSPARENT,
  COLOR_WHITE,
  COLOR_GREY_MEDIUM,
  COLOR_GREY_DARK
} from '../../styles';
import metrics from '../../constants/metrics';
import { scale } from '../../utils/scaling';

const styles = StyleSheet.create({
  page: {
    backgroundColor: COLOR_WHITE,
    height: '100%'
  },
  headerContainer: {
    backgroundColor: COLOR_TRANSPARENT,
    borderBottomWidth: 0
  },
  imgMenu: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: scale(385),
    height: scale(385)
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLOR_BLACK,
    marginLeft: metrics.baseMargin,
    marginTop: metrics.mediumMargin
  },
  subtitle: {
    fontSize: 14,
    marginLeft: metrics.baseMargin,
    paddingRight: metrics.highMargin
  },
  hargaContainer: {
    flexDirection: 'row',
    borderBottomColor: COLOR_GREY_MEDIUM,
    borderBottomWidth: scale(1),
    marginHorizontal: metrics.margin,
    marginVertical: metrics.mediumMargin
  },
  harga: {
    fontSize: 18,
    marginTop: metrics.smallMargin,
    color: COLOR_BLACK
  },
  rupiah: {
    fontSize: 18,
    marginTop: metrics.smallMargin,
    marginLeft: metrics.highMargin2,
    color: COLOR_BLACK
  },
  itemContainer: {
    flexDirection: 'row',
    marginTop: metrics.mediumMargin
  },
  jmlItem: {
    fontSize: 18,
    marginLeft: metrics.baseMargin,
    marginRight: metrics.section,
    marginTop: metrics.mediumMargin,
    color: COLOR_BLACK,
    marginBottom: metrics.section
  },
  pesanContainer: {
    flexDirection: 'row',
    marginBottom: metrics.marginPlus
  },
  btnShare: {
    borderWidth: scale(0.4),
    borderRadius: scale(5),
    borderColor: COLOR_GREY_DARK,
    paddingVertical: metrics.mediumMargin,
    paddingHorizontal: metrics.paddingHorizontal,
    marginLeft: metrics.mediumMargin
  }
});

export default styles;
