/* eslint-disable import/no-duplicates */
/* eslint-disable import/named */
/* eslint-disable import/namespace */
/* eslint-disable no-redeclare */
/* eslint-disable no-dupe-keys */
/* eslint-disable no-undef */
import { StyleSheet } from 'react-native';

import { COLOR_BASE_PRIMARY_LIGHT, COLOR_BASE_PRIMARY_DARK, COLOR_WHITE, COLOR_HIJAU } from '../../../styles';

import { scale } from '../../../utils/scaling';

const container = {
  width: 150,
  height: 40,
  alignSelf: 'flex-start',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 10
};

export default StyleSheet.create({
  container: {
    ...container,
    backgroundColor: COLOR_HIJAU
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
    fontSize: 16,
    fontWeight: 'bold',
    fontSize: 18
  },
  textDisabled: {
    color: COLOR_WHITE
  },
  textPressed: {
    color: COLOR_WHITE
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
