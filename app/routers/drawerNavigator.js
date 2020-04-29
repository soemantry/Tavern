/* eslint-disable import/prefer-default-export */
import { Dimensions } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import { AppStack } from './tabNavigator';

export const Drawer = DrawerNavigator(
  {
    AppStack: {
      screen: AppStack,
    }
  }
);
