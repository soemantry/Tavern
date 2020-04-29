/* eslint-disable import/extensions */
/* eslint-disable import/default */
/* eslint-disable no-unused-expressions */
/* eslint-disable eqeqeq */
/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable prefer-const */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-state */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/first */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text, ScrollView, TouchableOpacity, Alert, TextInput } from 'react-native';
import MainScreen from '../../components/layouts/MainScreen';
import HeaderSearch from '../../components/elements/HeaderSearch';
import Button from '../../components/elements/Button';
import styles from './styles';
import I18n from '../../i18n';
import ImagePicker from 'react-native-image-picker';
import { scale } from '../../utils/scaling';
import { IMAGES } from '../../configs';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ImageSource: null,
      data: null,
      text: '',
      name: '',
      email: '',
      notelp: ''
    };
  }
  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      borderRadius: scale(150),
      maxWidth: scale(500),
      maxHeight: scale(500),
      storageOptions: {
        skipBackup: true
      }
    };
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = { uri: response.uri };

        this.setState({
          ImageSource: source,
          data: response.data
        });
      }
    });
  }
  _profile = () => {
    if (this.state.name != '') {
      if (this.state.email != '') {
        if (this.state.notelp != '') {
          Alert.alert(
            I18n.t('datachange'),
            I18n.t('datasave'),
            [{ text: I18n.t('ok'), onPress: () => this.props.navigation.navigate('Account') }],
            { cancelable: false }
          );
        } else {
          Alert.alert(I18n.t('failed'), I18n.t('check'), [{ text: I18n.t('ok') }], { cancelable: false });
        }
      } else {
        Alert.alert(I18n.t('failed'), I18n.t('check'), [{ text: I18n.t('ok') }], { cancelable: false });
      }
    } else {
      Alert.alert(I18n.t('failed'), I18n.t('check'), [{ text: I18n.t('ok') }], { cancelable: false });
    }
  };
  _onBack = () => {
    this.props.navigation.navigate('Account');
  };
  render() {
    return (
      <MainScreen style={styles.container}>
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
          <View style={styles.img}>
            <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
              <View style={styles.ImageContainer}>
                {this.state.ImageSource === null ? (
                  <Image style={styles.avatar} source={IMAGES.camera} />
                ) : (
                  <Image style={styles.ImageContainer} source={this.state.ImageSource} />
                )}
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.biodata}>
            <Text style={styles.judulAwal}>{I18n.t('name')}</Text>
            <TextInput placeholder={I18n.t('name')} editable onChangeText={name => this.setState({ name })} />
            <Text style={styles.judul}>{I18n.t('email')} </Text>
            <TextInput
              placeholder={I18n.t('email')}
              editable
              keyboardType="email-address"
              onChangeText={email => this.setState({ email })}
            />
            <Text style={styles.judul}>{I18n.t('notelp')}</Text>
            <TextInput
              placeholder={I18n.t('notelp')}
              editable
              keyboardType="numeric"
              onChangeText={notelp => this.setState({ notelp })}
            />
          </View>
          <View style={styles.savebutton}>
            <Button type="ripple" title={I18n.t('save')} onPress={this._profile} />
          </View>
        </ScrollView>
      </MainScreen>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
