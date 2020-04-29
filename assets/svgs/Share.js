import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgShare = props => (
  <Svg width={20} height={20} viewBox="0 0 138 138" fill="none" {...props}>
    <Path
      d="M112.253 87.708c-7.989 0-15.037 3.806-19.64 9.635l-42.705-21.84c.559-2.084.96-4.239.96-6.506 0-2.469-.477-4.793-1.143-7.054l42.517-21.738c4.578 6.093 11.808 10.075 20.017 10.075 13.906 0 25.155-11.25 25.155-25.143C137.415 11.256 126.165 0 112.259 0 98.385 0 87.123 11.256 87.123 25.137c0 2.273.402 4.434.967 6.525l-42.698 21.84c-4.61-5.835-11.67-9.654-19.673-9.654C11.826 43.848.584 55.109.584 68.997c0 13.887 11.243 25.143 25.137 25.143 8.221 0 15.445-3.995 20.042-10.094l42.497 21.739c-.666 2.255-1.149 4.597-1.149 7.072 0 13.887 11.262 25.143 25.137 25.143 13.906 0 25.155-11.256 25.155-25.143.006-13.9-11.243-25.15-25.149-25.15z"
      fill="#A9A9A9"
    />
  </Svg>
);

export default SvgShare;