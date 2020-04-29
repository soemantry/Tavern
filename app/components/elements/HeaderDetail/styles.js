import { StyleSheet, Platform } from 'react-native';
import { COLOR_WHITE, FONT_HEADLINE6_PRIMARY, COLOR_GREY } from '../../../styles';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLOR_WHITE,
    height: Platform.OS === 'ios' ? 44 : 56,
    borderBottomWidth: 0.5,
    borderBottomColor: COLOR_GREY
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  leftRightContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 25
  },
  title: {
    ...FONT_HEADLINE6_PRIMARY,
    color: COLOR_WHITE
  }
});
