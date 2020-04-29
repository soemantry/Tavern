/* eslint-disable import/named */
/* eslint-disable import/namespace */
import { StyleSheet } from 'react-native';
import { COLOR_BLACK, COLOR_BLACK_OPACITY50, COLOR_WHITE } from '../../styles';

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_WHITE
  },
  onslide: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    color: COLOR_BLACK,
    fontFamily: 'Nunito',
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 15
  },
  text: {
    color: COLOR_BLACK_OPACITY50,
    fontFamily: 'Nunito',
    fontSize: 18,
    marginHorizontal: 40,
    textAlign: 'center',
    alignItems: 'center'
  }
});

export default styles;
