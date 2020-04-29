/* eslint-disable import/first */
import { StyleSheet } from 'react-native';
import { COLOR_BLACK, COLOR_WHITE } from '../../styles';
import { scale } from '../../utils/scaling';
import metrics from '../../constants/metrics';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  icon: {
    height: hp('10%'),
    width: wp('20%')
  },
  title: {
    fontSize: 16,
    color: COLOR_BLACK,
    marginHorizontal: metrics.marginHorizontal,
    paddingTop: metrics.marginHorizontal
  },
  header: {
    backgroundColor: COLOR_WHITE,
    width: wp('100%'),
    paddingVertical: scale(8),
    paddingHorizontal: scale(12),
    flexDirection: 'row'
  },
  body: {
    fontSize: 18,
    paddingHorizontal: metrics.marginHorizontal
  },
  dropDownItem: {
    marginTop: metrics.marginHorizontal
  },
  drop: {
    paddingTop: scale(5)
  }
});

export default styles;
