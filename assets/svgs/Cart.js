import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgComponent = props => (
  <Svg width={24} height={24} {...props}>
    <Path d="M10 19.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.5-1.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm1.336-5l1.977-7H0l2.938 7h11.898zm4.969-10l-3.432 12H3.776l.839 2h13.239l3.474-12h1.929L24 3h-4.195z" />
  </Svg>
);

export default SvgComponent;