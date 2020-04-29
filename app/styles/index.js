/* eslint-disable no-redeclare */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/**
 * @providesModule config-styles
 */

import { gray, red, black, white, green3, green } from './colors';

export const COLOR_BUTTON = green3;

export const COLOR_BASE_PRIMARY_DARK = '#007d7e';
export const COLOR_BASE_PRIMARY_MAIN = '#25adad';
export const COLOR_BASE_PRIMARY_LIGHT = '#66dfdf';

export const COLOR_BASE_SECONDARY_DARK = '#003b50';
export const COLOR_BASE_SECONDARY_MAIN = '#03657c';
export const COLOR_BASE_SECONDARY_LIGHT = '#4893ab';

export const COLOR_BASE_TERTIARY_DARK = '#616161';
export const COLOR_BASE_TERTIARY_MAIN = '#929292';
export const COLOR_BASE_TERTIARY_LIGHT = '#BDBDBD';

export const COLOR_FONT_PRIMARY_DARK = '#8c8c8c';
export const COLOR_FONT_PRIMARY_LIGHT = '#bdbdbd';

export const COLOR_FONT_SECONDARY_DARK = '#00E676';
export const COLOR_FONT_SECONDARY_LIGHT = '#00E676';
export const COLOR_FONT_LINK = '#0000FF';

export const COLOR_EVENT_SUCCESS = '#58cd85';
export const COLOR_EVENT_ERROR = red.red_50;
export const COLOR_EVENT_INFORMATION = '#47acf7';
export const COLOR_EVENT_WARNING = '#f8e71c';
export const COLOR_EVENT_INACTIVE = gray.gray_30;

export const COLOR_WHITE = white;
export const COLOR_WHITE_OPACITY50 = 'rgba(255,255,255,0.5)';
export const COLOR_GREY = gray.gray_50;
export const COLOR_GREY_MEDIUM = gray.gray_101;
export const COLOR_GREY_DARK = gray.gray_70;
export const COLOR_BLACK = black;
export const COLOR_BLACK_OPACITY50 = 'rgba(0,0,0,0.5)';
export const COLOR_GREEN = green.green_101;
export const COLOR_TRANSPARENT = 'rgba(0,0,0,0)';
export const COLOR_HIJAU = green.green_101;
export const COLOR_GRAY_SEARCH = '#F2F2F2';
export const COLOR_GREEN_PRIMARY = '#23D53B';

export const FONT_SIGNIN_REGULAR = 'Roboto-Medium';

const FONT_PRIMARY_REGULAR = 'Quicksand-Regular';
const FONT_PRIMARY_MEDIUM = 'Quicksand-Medium';
const FONT_PRIMARY_LIGHT = 'Quicksand-Light';

const FONT_SECONDARY_REGULAR = 'Quicksand-Regular';
const FONT_SECONDARY_MEDIUM = 'Quicksand-Medium';
const FONT_SECONDARY_LIGHT = 'Quicksand-Light';

const FONT_SIZE_INPUT = 18;
const FONT_SIZE_HEADLINE1 = 96;
const FONT_SIZE_HEADLINE2 = 60;
const FONT_SIZE_HEADLINE3 = 48;
const FONT_SIZE_HEADLINE4 = 34;
const FONT_SIZE_HEADLINE5 = 24;
const FONT_SIZE_HEADLINE6 = 20;
const FONT_SIZE_SUBTITLE1 = 16;
const FONT_SIZE_SUBTITLE2 = 14;
const FONT_SIZE_BODY1 = 16;
const FONT_SIZE_BODY2 = 14;
const FONT_SIZE_BUTTON = 14;
const FONT_SIZE_CAPTION = 12;
const FONT_SIZE_OVERLINE = 10;
export const FONT_SIZE_BODY3 = 14;
export const FONT_SIZE_BODY4 = 16;

export const FONT_SIGNIN_PRIMARY = {
  fontFamily: FONT_SIGNIN_REGULAR,
  fontSize: FONT_SIZE_INPUT
};

export const FONT_HEADLINE1_PRIMARY = {
  fontFamily: FONT_PRIMARY_LIGHT,
  fontSize: FONT_SIZE_HEADLINE1
};

export const FONT_HEADLINE1_SECONDARY = {
  fontFamily: FONT_SECONDARY_LIGHT,
  fontSize: FONT_SIZE_HEADLINE1
};

export const FONT_HEADLINE2_PRIMARY = {
  fontFamily: FONT_PRIMARY_LIGHT,
  fontSize: FONT_SIZE_HEADLINE2
};

export const FONT_HEADLINE2_SECONDARY = {
  fontFamily: FONT_SECONDARY_LIGHT,
  fontSize: FONT_SIZE_HEADLINE2
};

export const FONT_HEADLINE3_PRIMARY = {
  fontFamily: FONT_PRIMARY_REGULAR,
  fontSize: FONT_SIZE_HEADLINE3
};

export const FONT_HEADLINE3_SECONDARY = {
  fontFamily: FONT_SECONDARY_REGULAR,
  fontSize: FONT_SIZE_HEADLINE3
};

export const FONT_HEADLINE4_PRIMARY = {
  fontFamily: FONT_PRIMARY_REGULAR,
  fontSize: FONT_SIZE_HEADLINE4
};

export const FONT_HEADLINE4_SECONDARY = {
  fontFamily: FONT_SECONDARY_REGULAR,
  fontSize: FONT_SIZE_HEADLINE4
};

export const FONT_HEADLINE5_PRIMARY = {
  fontFamily: FONT_PRIMARY_REGULAR,
  fontSize: FONT_SIZE_HEADLINE5
};

export const FONT_HEADLINE5_SECONDARY = {
  fontFamily: FONT_SECONDARY_REGULAR,
  fontSize: FONT_SIZE_HEADLINE5
};

export const FONT_HEADLINE6_PRIMARY = {
  fontFamily: FONT_PRIMARY_MEDIUM,
  fontSize: FONT_SIZE_HEADLINE6
};

export const FONT_HEADLINE6_SECONDARY = {
  fontFamily: FONT_SECONDARY_MEDIUM,
  fontSize: FONT_SIZE_HEADLINE6
};

export const FONT_SUBTITLE1_PRIMARY = {
  fontFamily: FONT_PRIMARY_REGULAR,
  fontSize: FONT_SIZE_SUBTITLE1
};

export const FONT_SUBTITLE1_SECONDARY = {
  fontFamily: FONT_SECONDARY_REGULAR,
  fontSize: FONT_SIZE_SUBTITLE1
};

export const FONT_SUBTITLE2_PRIMARY = {
  fontFamily: FONT_PRIMARY_MEDIUM,
  fontSize: FONT_SIZE_SUBTITLE2
};

export const FONT_SUBTITLE2_SECONDARY = {
  fontFamily: FONT_SECONDARY_MEDIUM,
  fontSize: FONT_SIZE_SUBTITLE2
};

export const FONT_BODY1_PRIMARY = {
  fontFamily: FONT_SIGNIN_REGULAR,
  fontSize: FONT_SIZE_BODY2
};

export const FONT_BODY1_SECONDARY = {
  fontFamily: FONT_SECONDARY_REGULAR,
  FfontSize: FONT_SIZE_BODY1
};

export const FONT_BODY2_PRIMARY = {
  fontFamily: FONT_PRIMARY_REGULAR,
  fontSize: FONT_SIZE_BODY2
};

export const FONT_BODY2_SECONDARY = {
  fontFamily: FONT_SECONDARY_REGULAR,
  fontSize: FONT_SIZE_BODY2
};

export const FONT_BUTTON_PRIMARY = {
  fontFamily: FONT_PRIMARY_MEDIUM,
  fontSize: FONT_SIZE_BUTTON
};

export const FONT_BUTTON_SECONDARY = {
  fontFamily: FONT_SECONDARY_MEDIUM,
  fontSize: FONT_SIZE_BUTTON
};

export const FONT_CAPTION_PRIMARY = {
  fontFamily: FONT_PRIMARY_REGULAR,
  fontSize: FONT_SIZE_CAPTION
};

export const FONT_CAPTION_SECONDARY = {
  fontFamily: FONT_SECONDARY_REGULAR,
  fontSize: FONT_SIZE_CAPTION
};

export const FONT_OVERLINE_PRIMARY = {
  fontFamily: FONT_PRIMARY_REGULAR,
  fontSize: FONT_SIZE_OVERLINE
};

export const FONT_OVERLINE_SECONDARY = {
  fontFamily: FONT_SECONDARY_REGULAR,
  fontSize: FONT_SIZE_OVERLINE
};