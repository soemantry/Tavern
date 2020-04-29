/* eslint-disable import/named */
/* eslint-disable import/namespace */
import {
  COLOR_BLACK,
  COLOR_GREY,
  COLOR_GREY_DARK,
  COLOR_EVENT_INACTIVE,
  COLOR_EVENT_ERROR,
  COLOR_TRANSPARENT,
  FONT_SUBTITLE1_PRIMARY,
  FONT_CAPTION_PRIMARY,
  FONT_BODY2_PRIMARY,
  COLOR_WHITE_OPACITY50
} from '../../../../styles';

const HEIGHT = 38;
// const WIDTH = 310;
const WIDTH = 230;
export const TYPES = {
  FILLED: 'filled',
  GHOST: 'ghost'
};

const mainContainer = {
  width: WIDTH
};

const container = {
  width: WIDTH,
  height: HEIGHT,
  alignContent: 'center',
  justifyContent: 'center',
  overflow: 'hidden'
};

export default {
  mainContainer: {
    ...mainContainer
  },
  containerStyle: type => {
    let style = {
      ...container,
      borderWidth: 1,
      borderColor: COLOR_TRANSPARENT,
      backgroundColor: COLOR_TRANSPARENT
    };
    if (type === TYPES.GHOST) {
      style = {
        ...container,
        borderBottomWidth: 1,
        borderBottomColor: COLOR_TRANSPARENT,
        backgroundColor: COLOR_TRANSPARENT
      };
    }
    return style;
  },
  disabledContainerStyle: type => {
    let style = {
      ...container,
      borderWidth: 1,
      borderColor: COLOR_WHITE_OPACITY50,
      backgroundColor: COLOR_EVENT_INACTIVE
    };
    if (type === TYPES.GHOST) {
      style = {
        ...container,
        borderBottomWidth: 1,
        borderBottomColor: COLOR_WHITE_OPACITY50,
        backgroundColor: COLOR_TRANSPARENT
      };
    }
    return style;
  },
  errorContainerStyle: type => {
    let style = {
      ...container,
      borderWidth: 1,
      borderColor: COLOR_EVENT_ERROR,
      backgroundColor: COLOR_TRANSPARENT
    };
    if (type === TYPES.GHOST) {
      style = {
        ...container,
        borderBottomWidth: 1,
        borderBottomColor: COLOR_EVENT_ERROR,
        backgroundColor: COLOR_TRANSPARENT
      };
    }
    return style;
  },
  containerLabel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 5,
    marginBottom: 7
  },
  textStyle: (type, editable) => {
    const style = {
      ...FONT_SUBTITLE1_PRIMARY,
      color: COLOR_WHITE_OPACITY50
    };
    if (!editable && type === TYPES.GHOST) {
      style.color = COLOR_WHITE_OPACITY50;
    }
    return style;
  },
  textInputStyle: type => {
    const style = {
      ...FONT_SUBTITLE1_PRIMARY,
      color: COLOR_GREY_DARK,
      marginHorizontal: 17
    };
    if (type === TYPES.GHOST) {
      style.color = COLOR_GREY;
    }
    return style;
  },
  textOptional: (type, editable) => {
    const style = {
      ...FONT_BODY2_PRIMARY,
      color: COLOR_BLACK
    };
    if (!editable && type === TYPES.GHOST) {
      style.color = COLOR_GREY;
    }
    return style;
  },
  errTextStyle: {
    ...FONT_CAPTION_PRIMARY,
    color: COLOR_EVENT_ERROR,
    marginTop: 5
  }
};
