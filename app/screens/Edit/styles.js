/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import { scale } from '../../utils/scaling';
import { COLOR_WHITE, COLOR_BLACK } from '../../styles';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    backgroundColor: COLOR_WHITE
  },
  img: {
    alignItems: 'center',
    marginTop: scale(20)
  },
  ImageContainer: {
    borderRadius: scale(150),
    width: scale(150),
    height: scale(150),
    borderColor: '#9B9B9B',
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    width: scale(150),
    height: scale(150),
    borderRadius: scale(150),
    borderWidth: scale(4),
    borderColor: COLOR_WHITE
  },
  edit: {
    alignItems: 'flex-end',
    marginRight: scale(15)
  },
  biodata: {
    marginHorizontal: scale(15)
  },
  judulAwal: {
    color: COLOR_BLACK,
    fontSize: scale(20)
  },
  judul: {
    marginTop: scale(20),
    color: COLOR_BLACK,
    fontSize: scale(20)
  },
  savebutton: {
    marginTop: scale(50),
    alignItems: 'center',
    height: scale(50)
  }
});

export default styles;
