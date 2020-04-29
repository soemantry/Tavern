/* eslint-disable react/prop-types */
/* eslint-disable import/no-duplicates */
/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React from 'react';
import { View, Text, TextInput, ToastAndroid, TouchableOpacity } from 'react-native';
import styles from './styles';
import MainScreen from '../../components/layouts/MainScreen';
import Header from '../../components/elements/Header';
import I18n from '../../i18n';
import Button from '../../components/elements/Button';
import { ARRAYS } from '../../constants';
import { ENDPOINT } from '../../configs';
import { COLOR_TRANSPARENT } from '../../styles';

const uang = ARRAYS.UANG;
const uang2 = ARRAYS.UANG2;

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nominal: ''
    };
  }
  // eslint-disable-next-line react/sort-comp
  _buttonPressed = value => {
    // eslint-disable-next-line no-undef
    this.setState({
      nominal: value
    });
  };

  _onChange = value => {
    this.setState({ nominal: value });
  };

  /* _cekNominal = () => {
    this.state.nominal >= 5000 ? alert(I18n.t('done')) : ToastAndroid.show(I18n.t('fail'), ToastAndroid.LONG);
  }; */

  _topUp = async () => {
    const { nominal } = this.state;
    const params = { nominal };
    try {
      if (nominal / 5000 >= 1) {
        try {
          const result = await ENDPOINT.topUp(nominal);
          if (result.code === 200) {
            ToastAndroid.show(I18n.t('done'), ToastAndroid.LONG);
            this.props.navigation.navigate('App');
          }
          console.log({ result });
        } catch (error) {
          console.log(error);
        }
      } else {
        ToastAndroid.show(I18n.t('fail'), ToastAndroid.LONG);
        console.log('failed');
      }
    } catch (error) {
      ToastAndroid.show('error.networkError', ToastAndroid.SHORT);
    }
  };

  render() {
    const { nominal } = this.state;
    return (
      <MainScreen style={styles.hdr}>
        <Header
          back={false}
          leftComponent={
            <View>
              <Text style={styles.headerStyle}>{I18n.t('buttonText')}</Text>
            </View>
          }
          rightComponent={
            <View>
              <TouchableOpacity
                style={styles.rightHeader}
                onPress={() => this.props.navigation.navigate('Account')}
              >
                <Text style={styles.textHeader}>{I18n.t('myVoucher')}</Text>
              </TouchableOpacity>
            </View>
          }
        />
        <View style={styles.viewUnderline2} />
        <View>
          <Text style={styles.text1}>{I18n.t('manualTopUp')}</Text>
        </View>
        <View style={styles.viewTextInput}>
          <Text style={styles.textRp}>{I18n.t('RP')} </Text>
          <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            label=""
            underlineColorAndroid={COLOR_TRANSPARENT}
            placeholder={I18n.t('nominal0')}
            editable
            value={this.state.nominal}
            // eslint-disable-next-line no-shadow
            onChangeText={this._onChange}
          />
        </View>
        <View style={styles.border}>
          <View style={styles.viewUnderline} />
        </View>
        <View>
          <Text style={styles.text1}>{I18n.t('pilihanTopUp')}</Text>
        </View>
        <View style={styles.viewButton}>
          {uang.map(item => (
            // eslint-disable-next-line react/jsx-key
            <Button
              // eslint-disable-next-line no-shadow
              onPress={() => this._buttonPressed(item.nominal)}
              type="raised-ripple"
              title={item.nominal}
              customContainer={styles.button1}
              customText={styles.textbutton1}
            />
          ))}
        </View>
        <View style={styles.viewButton2}>
          {uang2.map(item => (
            // eslint-disable-next-line react/jsx-key
            <Button
              // eslint-disable-next-line no-shadow
              onPress={() => this._buttonPressed(item.nominal)}
              type="raised-ripple"
              title={item.nominal}
              customContainer={styles.button1}
              customText={styles.textbutton1}
            />
          ))}
        </View>
        <View style={styles.viewAll}>
          <View style={styles.view}>
            <Button
              disable
              customContainer={styles.button}
              customText={styles.textbutton}
              title={I18n.t('buttonText')}
              onPress={() => this._topUp(this.state.nominal)}
            />
          </View>
        </View>
      </MainScreen>
    );
  }
}
