/* eslint-disable import/first */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/default */
/* eslint-disable import/namespace */
import React from 'react';
import { View, Text, Image } from 'react-native';
import Swiper from '../../components/elements/Swipper';
import styles from './styles';
import IMAGES from '../../configs/images';
import PropTypes from 'prop-types';

export default class Component extends React.Component {
  _onPress = () => {
    this.props.navigation.navigate('UserAuth');
  };

  render() {
    return (
      <Swiper onPress={this._onPress}>
        <View style={styles.slide}>
          <Image source={IMAGES.first} resizeMode="contain" style={styles.onslide} />
          <Text style={styles.header}>Find what to eat</Text>
          <Text style={styles.text}>Order anything you want from your favourite restaurant</Text>
        </View>

        <View style={styles.slide}>
          <Image source={IMAGES.second} resizeMode="contain" style={styles.onslide} />
          <Text style={styles.header}>Order</Text>
          <Text style={styles.text}>Place your personal order and make your day more delicious</Text>
        </View>

        <View style={styles.slide}>
          <Image source={IMAGES.third} resizeMode="contain" style={styles.onslide} />
          <Text style={styles.header}>Get your order</Text>
          <Text style={styles.text}>
            Enjoy your favourite dishes without leaving your home, office, or hotel
          </Text>
        </View>
      </Swiper>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
