/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/default */
/* eslint-disable prettier/prettier */
/* eslint-disable import/namespace */
/* eslint-disable import/no-named-as-default */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-state */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/first */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert
} from 'react-native';
import MainScreen from '../../components/layouts/MainScreen';
import Header from '../../components/elements/Header';
import Button from '../../components/elements/Button';
import styles from './styles';
import I18n from '../../i18n';
import { IMAGES } from '../../configs';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Pebong',
      email: '',
      telp: ''
    };
  }
  _edit = () => {
    // function to make two option alert
    Alert.alert(
      // title
      I18n.t('editdata'),
      // body
      I18n.t('alertedit'),
      [
        { text: I18n.t('ok'), onPress: () => this.props.navigation.navigate('Edit') },
        { text: I18n.t('cancel'), onPress: () => console.log('No Pressed'), style: 'cancel' }
      ],
      { cancelable: false }
      // clicking out side of alert will not cancel
    );
  };
  _voucher = () => {
    this.props.navigation.navigate('');
  };
  _about = () => {
    this.props.navigation.navigate('AboutUs');
  };
  _help = () => {
    this.props.navigation.navigate('Help');
  };
  _logout = () => {
    // function to make two option alert
    Alert.alert(
      // title
      I18n.t('alertlogout'),
      // body
      I18n.t('msglogout'),
      [
        { text: I18n.t('ok'), onPress: () => this.props.navigation.navigate('') },
        { text: I18n.t('cancel'), onPress: () => console.log('No Pressed'), style: 'cancel' }
      ],
      { cancelable: false }
      // clicking out side of alert will not cancel
    );
  };
  render() {
    return (
      <MainScreen style={styles.container}>
      <Header title="" back={false} leftComponent={
        <Text style = {styles.headerTitle}>Akun</Text>
      } />
        <ScrollView>
          <View style={styles.img}>
            <View style={styles.avatar} />
          </View>
          <View style={styles.edit}>
            <Button style={styles.editbutton} type="flat" title={I18n.t('edit')} onPress={this._edit} />
          </View>
          <View style={styles.biodata}>
            <Text style={styles.judul}>{I18n.t('name')}</Text>
            <Text style={styles.keterangan}>{this.state.name}</Text>
            <Text style={styles.judul}>{I18n.t('email')}</Text>
            <Text style={styles.keterangan}>{this.state.email}</Text>
            <Text style={styles.judul}>{I18n.t('notelp')}</Text>
            <Text style={styles.keterangan}>{this.state.telp}</Text>
          </View>
          <View style={styles.line} />
          <View style={styles.downOption}>
            <TouchableOpacity style={styles.downbutton} onPress={this._help}>
              <View style={styles.containerbutton}>
                <Image style={styles.imagehelp} source={IMAGES.help} />
                <Text style={styles.texthelp}>{I18n.t('help')}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.downbutton} onPress={this._about}>
              <View style={styles.containerbutton}>
                <Image style={styles.imagehelp} source={IMAGES.about} />
                <Text style={styles.texthelp}>{I18n.t('about')}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.downbutton} onPress={this._logout}>
              <View style={styles.containerbutton}>
                <Image style={styles.imagehelp} source={IMAGES.signout} />
                <Text style={styles.texthelp}>{I18n.t('logout')}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.space} />
        </ScrollView>
      </MainScreen>
    );
  }
}
