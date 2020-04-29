/* eslint-disable import/named */
/* eslint-disable import/namespace */
import { StyleSheet } from 'react-native';

import {
  COLOR_BASE_PRIMARY_LIGHT,
  COLOR_BASE_PRIMARY_DARK,
  COLOR_FONT_PRIMARY_LIGHT,
  COLOR_GREEN,
  COLOR_WHITE
} from '../../../styles';
import { scale } from '../../../utils/scaling';

const container = {
  width: 265,
  height: 40,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 20
};

export default StyleSheet.create({
  container: {
    ...container,
    backgroundColor: COLOR_GREEN
  },
  containerDisabled: {
    ...container,
    backgroundColor: COLOR_BASE_PRIMARY_LIGHT
  },
  containerFlat: {
    ...container,
    width: scale(50),
    height: scale(50),
    backgroundColor: 'transparent'
  },
  containerPressed: {
    ...container,
    backgroundColor: COLOR_BASE_PRIMARY_DARK
  },
  text: {
    color: COLOR_WHITE,
    fontSize: 18
  },
  textDisabled: {
    color: COLOR_FONT_PRIMARY_LIGHT
  },
  textPressed: {
    color: COLOR_FONT_PRIMARY_LIGHT
  },
  button: {
    lineHeight: 40
  },
  buttonPressed: {
    ...container,
    backgroundColor: COLOR_BASE_PRIMARY_DARK
  },
  buttonDisabled: {}
});
