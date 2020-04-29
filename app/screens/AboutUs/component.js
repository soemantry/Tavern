import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image, Linking, ScrollView } from 'react-native';
import HeaderSearch from '../../components/elements/HeaderSearch';
import IMAGES from '../../configs/images';
import styles from './styles';
import I18n from '../../i18n';

export default class Component extends React.Component {
  _onBack = () => {
    this.props.navigation.navigate('Account');
  };
  render() {
    return (
      <View style={styles.slide}>
        <HeaderSearch
          left={[
            {
              icon: IMAGES.icoBack,
              onPress: () => this._onBack()
            }
          ]}
          title={I18n.t('header.aboutus')}
        />
        <ScrollView>
          <View style={styles.imageContainer}>
            <Text>
              <Image source={IMAGES.foto} resizedMode="contain" style={styles.image} />
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.header}>{I18n.t('judul')}</Text>
            <Text style={styles.text}>{I18n.t('describe')}</Text>
          </View>
          <View style={styles.gambar}>
            <View style={styles.icon}>
              <Text
                onPress={() => {
                  Linking.openURL('https://facebook.com');
                }}
              >
                <Image source={IMAGES.fb} resizedMode="contain" style={styles.icon1} />
              </Text>
            </View>
            <View style={styles.icon}>
              <Text
                onPress={() => {
                  Linking.openURL('https://instragram.com');
                }}
              >
                <Image source={IMAGES.ig} resizedMode="contain" style={styles.icon1} />
              </Text>
            </View>
            <View style={styles.icon}>
              <Text
                onPress={() => {
                  Linking.openURL('https://gmail.com');
                }}
              >
                <Image source={IMAGES.em} resizedMode="contain" style={styles.icon1} />
              </Text>
            </View>
            <Text style={styles.versi}>
              {I18n.t('year')} {I18n.t('appVersi')}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
