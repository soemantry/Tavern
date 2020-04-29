import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgCopy = props => (
  <Svg width={18} height={20} fill="none" {...props}>
    <Path
      d="M12.727 0H1.818C.818 0 0 .818 0 1.818v12.728h1.818V1.818h10.91V0zm2.727 3.636h-10c-1 0-1.818.819-1.818 1.819v12.727c0 1 .819 1.818 1.819 1.818h10c1 0 1.818-.818 1.818-1.818V5.455c0-1-.819-1.819-1.819-1.819zm0 14.546h-10V5.455h10v12.727z"
      fill="#fff"
    />
  </Svg>
);

export default SvgCopy;
