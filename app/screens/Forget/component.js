/* eslint-disable import/namespace */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-console */
/* eslint-disable no-shadow */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/sort-comp */
/* eslint-disable no-useless-constructor */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-redeclare */
/* eslint-disable no-undef */
/* eslint-disable react-native/no-color-literals */
import React from 'react';
import { View, ImageBackground, Text, Alert } from 'react-native';
import PropTypes from 'prop-types';
import Button2 from '../../components/elements/Button2';
import IMAGES from '../../configs/images';
import styles from './styles';
import Input from '../../components/elements/Input';
import Pesan from '../../../assets/svgs/Pesan';
import i18n from '../../i18n';
import { ENDPOINT } from '../../configs';

export default class Component extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: ''
    };
  }

  _sendEmail = async () => {
    const { email } = this.state;
    const params = { email };
    const auth = {
      Authorization: 'Basic dGVmYS0yMDE5OnBkd25ncGlhLXI3NDc4dHEtNDdsdHNxNmstZmFsdHN0cDVrZg=='
    };
    try {
      const result = await ENDPOINT.resetPassword(params, auth);
      console.log(result);
      if (result.code === 200) {
        Alert.alert(i18n.t('suksesForget'));
      } else {
        Alert.alert(i18n.t('gagalForget'));
      }
    } catch (error) {
      Alert.alert(i18n.t('suksesForget'));
    }
  };

  // _onPress = () => {
  //   this.props.navigation.navigate('App');
  // };
  // async _addValue() {
  //   await this.setState({
  //     all: this.state.email
  //   });
  //   this._handlePress();
  // }

  handlePress() {
    if (this.state.email.trim().length === 0) {
      Alert.alert(i18n.t('gagalForget'));
    } else {
      this._sendEmail();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={IMAGES.background} style={styles.imageBackground}>
          <View>
            <Text style={styles.judul}>{i18n.t('forgotPassword')}</Text>
            <Text style={styles.judul2}>{i18n.t('title2')} </Text>
          </View>

          <View style={styles.isiInput}>
            <View style={styles.iconEmail}>
              <Pesan />
            </View>
            <View style={styles.sms}>
              <Input
                style={styles.data}
                placeholder={i18n.t('imail')}
                label=""
                editable
                value={this.state.text}
                onChangeText={Text => this.setState({ email: Text })}
              />
            </View>
          </View>

          <View style={styles.containerButton}>
            <Button2 style={styles.Button} onPress={() => this._sendEmail()} title={i18n.t('send')} />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
