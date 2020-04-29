/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
/* eslint-disable import/namespace */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-alert */
/* eslint-disable react/sort-comp */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable react-native/no-color-literals */
import React from 'react';
import { View, ImageBackground, Text, Share } from 'react-native';
import NumericInput from 'react-native-numeric-input';
import IMAGES from '../../configs/images';
import styles from './styles';
import Button from '../../components/elements/Button';
import HeaderDetail from '../../components/elements/HeaderDetail';
import BtnShare from '../../../assets/svgs/Share';
import { scale } from '../../utils/scaling';
import I18n from '../../i18n';
import { COLOR_BLACK, COLOR_WHITE, COLOR_GREY_MEDIUM } from '../../styles';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jumlahItem: 0,
      // nama: this.props.navigation.state.params.judul,
      gambar: '',
      harga: '',
      desc: ''
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange = value => {
    this.setState({ jumlahItem: value });
  };
  onShare = async () => {
    try {
      const link =
        'https://m.guideku.com/food/2018/12/05/180000/sekilas-mirip-ternyata-ini-beda-es-cendol-dan-es-dawet';

      const result = await Share.share({
        message: link
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // alert(`share with ${result.activityType}`);
        } else {
          // alert(`shared but not sure how`);
        }
      } else if (result.action === Share.dismissedAction) {
        // alert(`dismissed`);
      }
    } catch (error) {
      alert(error.message);
    }
  };
  tambah = () => {
    this.state.jumlahItem > 0 ? alert('Done') : alert('False');
  };
  render() {
    return (
      <View style={styles.page}>
        <View style={styles.imgMenu}>
          <ImageBackground source={IMAGES.detail} resizeMode="contain" style={styles.image}>
            <HeaderDetail style={styles.headerContainer} />
          </ImageBackground>
        </View>

        <View>
          <Text style={styles.title}>{I18n.t('price')}</Text>
          <Text style={styles.subtitle}>{I18n.t('descMenu')}</Text>
        </View>

        <View style={styles.hargaContainer}>
          <Text style={styles.harga}>{I18n.t('price')}</Text>
          <Text style={styles.rupiah}>{I18n.t('rupiahPrice')}</Text>
        </View>

        <View style={styles.itemContainer}>
          <Text style={styles.jmlItem}>{I18n.t('total')}</Text>
          <NumericInput
            onChange={value => this.onChange(value)}
            totalWidth={scale(145)}
            totalHeight={scale(40)}
            iconSize={scale(25)}
            step={1}
            minValue={0}
            maxValue={50}
            value={this.state.jumlahItem}
            valueType="integer"
            rounded
            textColor={COLOR_BLACK}
            iconStyle={COLOR_GREY_MEDIUM}
            rightButtonBackgroundColor={COLOR_WHITE}
            leftButtonBackgroundColor={COLOR_WHITE}
          />
        </View>

        <View style={styles.pesanContainer}>
          <Button
            title={I18n.t('addOrder')}
            onPress={() => this.tambah(this.state.jumlahItem)}
            type="raised-ripple"
          />
          <View style={styles.btnShare}>
            <BtnShare onPress={this.onShare} />
          </View>
        </View>
      </View>
    );
  }
}
