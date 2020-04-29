/* eslint-disable import/no-named-as-default */
/* eslint-disable import/named */
/* eslint-disable import/default */
/* eslint-disable eqeqeq */
/* eslint-disable import/namespace */
/* eslint-disable react/prop-types */
/* eslint-disable react/sort-comp */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-shadow */
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Text,
  View,
  Image,
  ImageBackground,
  alert,
  TouchableOpacity,
  ToastAndroid,
  TextInput
} from 'react-native';
import PropTypes from 'prop-types';
import MainScreen from '../../components/layouts/MainScreen';
import styles from './styles';
import Input from '../../components/elements/Input/BasicTitle';
import I18n from '../../i18n';
import IMAGES from '../../configs/images';
import Button from '../../components/elements/Buttonlogin';
import Profil from '../../../assets/svgs/Profil';
import Password from '../../../assets/svgs/Password';
import { COLOR_WHITE_OPACITY50 } from '../../styles';
import { ENDPOINT } from '../../configs';
import storage from '../../utils/storage';
import { STORAGE_KEY } from '../../constants';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      iconName: 'eye',
      hidePassword: true,
      isLoading: false
    };
  }

  setPasswordVisibility = () => {
    const iconName = this.state.hidePassword ? 'eye-off' : 'eye';

    this.setState({ hidePassword: !this.state.hidePassword, iconName });
  };

  _signIn = async () => {
    const { email, password } = this.state;
    const params = { email, password };
    try {
      this.setState({ isLoading: true });
      console.log({ params });
      const result = await ENDPOINT.login(params);
      console.log({ result });
      if (result.code == 200) {
        await storage.set(STORAGE_KEY.TOKEN_LOGIN, result.data);
        this.props.navigation.navigate('App');
      } else {
        ToastAndroid.show('Failed', ToastAndroid.SHORT);
      }
    } catch (error) {
      ToastAndroid.show('network error', ToastAndroid.SHORT);
    } finally {
      this.setState({ isLoading: false });
    }
    // const header = {
    //   Authorization: 'Basic dGVmYS0yMDE5OnBkd25ncGlhLXI3NDc4dHEtNDdsdHNxNmstZmFsdHN0cDVrZg=='
    // };
    // const result = await ENDPOINT.login(params, header);
    // storage.set('GET_TOKEN', result.data);
    // // const getToken = storage.get('GET_TOKEN');
    // if (result.code === 200) {
    //   this.props.navigation.navigate('Home');
    //   console.log('haha');
    // } else {
    //   ToastAndroid.show(I18n.t('failedlogin'), ToastAndroid.SHORT);
    // }
  };

  _signUp = () => {
    console.log('SIGN UP');
    const { navigation } = this.props;
    navigation.navigate('SignUp');
  };

  _forgetpass() {
    this.props.navigation.navigate('Forget');
  }

  render() {
    const { email, password, isLoading } = this.state;
    return (
      <MainScreen isLoading={isLoading} style={styles.mainContainer}>
        <ImageBackground
          source={IMAGES.backimage}
          style={{ width: '100%', height: '100%', justifyContent: 'center' }}
        >
          <View style={styles.logoContainer}>
            <Image source={IMAGES.appLogo} resizeMode="contain" style={styles.logo} />
          </View>
          <View style={styles.emailContainer}>
            <View style={styles.icon}>
              <Profil />
            </View>
            <Input
              style={styles.Inputemail}
              label=""
              placeholder={I18n.t('email')}
              editable
              value={email}
              onChangeText={email => this.setState({ email })}
            />
          </View>
          <View style={styles.passwordContainer}>
            <View style={styles.icon}>
              <Password />
            </View>
            <Input
              style={styles.inputpassword}
              label=""
              secureTextEntry={this.state.hidePassword}
              placeholder={I18n.t('password')}
              editable
              value={password}
              onChangeText={password => this.setState({ password })}
            />
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.touchableButton}
              onPress={this.setPasswordVisibility}
            >
              <Icon
                name={this.state.iconName}
                color={COLOR_WHITE_OPACITY50}
                size={20}
                source={this.state.hidePassword}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.forgetContainer}>
            <TouchableOpacity onPress={() => this._forgetpass()}>
              <Text style={styles.forgetPass} onPress={() => this._forgetpass()}>
                {I18n.t('forgetPass')}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              style={styles.buttons}
              type="raised-ripple"
              title={I18n.t('login')}
              onPress={() => this._signIn()}
            />
            <View style={styles.dontContainer}>
              <Text style={styles.dont}>{I18n.t('dont')}</Text>
              <TouchableOpacity onPress={() => this._signUp()}>
                <Text style={styles.signUp}>{I18n.t('signUp')}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </MainScreen>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
