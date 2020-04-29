import React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { COLOR_BASE_PRIMARY_LIGHT } from '../../app/styles';
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgHome = props => {
  const color = props.active ? COLOR_BASE_PRIMARY_LIGHT : 'none';
  return (
    <Svg height={30} width={28} viewBox="0 0 30 28" {...props}>
      <G fill="none" fillRule="evenodd">
        <Path
          fill={color}
          stroke={COLOR_BASE_PRIMARY_LIGHT}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={0.7}
          strokeMiterlimit={10}
          d="M4.08 26.62s-.027.67.628.67l7.562-.009.01-6.196s-.106-1.022.886-1.022h3.137c1.173 0 1.1 1.022 1.1 1.022l-.013 6.176h7.403c.831 0 .794-.834.794-.834V15.003l-10.433-9.28-11.075 9.28V26.62z"
        />
        <Path
          fill={color}
          stroke={COLOR_BASE_PRIMARY_LIGHT}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={0.7}
          strokeMiterlimit={10}
          d="M0 14.139s.94 1.733 2.991 0L15.246 3.77l11.49 10.303c2.375 1.713 3.264 0 3.264 0L15.246.71 0 14.139zM26.458 3.747h-2.955l.012 3.584 2.943 2.497V3.747z"
        />
      </G>
    </Svg>
  );
};

export default SvgHome;
