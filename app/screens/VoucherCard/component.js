/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
/* eslint-disable no-cond-assign */
/* eslint-disable react/no-unused-state */
/* eslint-disable react-native/no-color-literals */
import React from 'react';
import Modal from 'react-native-modal';
// import Clipboard from 'react-native-clipboard';
import {
  TouchableHighlight,
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Clipboard,
  Image,
  ToastAndroid
} from 'react-native';
import I18n from '../../i18n';
import styles from './styles';
import { ENDPOINT, IMAGES } from '../../configs';
import Header from '../../components/elements/Header';
import Button from '../../components/elements/Button';
import Calendar from '../../../assets/svgs/Calendar';

const Toast = props => {
  if (props.visible) {
    ToastAndroid.showWithGravityAndOffset(props.message, ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);
    return null;
  }
  return null;
};

export default class Component extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      voucher: 0,
      data: [],
      visible: false,
      modaldata: {}
    };
  }

  componentWillMount = async () => {
    await this._getData();
  };

  writeToClipboard = async () => {
    Clipboard.setString(this.state.token);
    this.setState(
      {
        visible: true
      },
      () => {
        this.hideToast();
      }
    );
  };

  hideToast = () => {
    this.setState({
      visible: false
    });
  };

  _showModal = modaldata => this.setState({ modaldata, isModalVisible: true });
  _hideModal = () => this.setState({ isModalVisible: false });

  _keyExtractor = item => item;

  _getData = async () => {
    try {
      const result = await ENDPOINT.voucher();
      this.setState({ data: result.data.data });
      console.log(this.state.data);
    } catch (error) {
      console.log(error);
    }
  };

  _renderVoucher = ({ item, index }) => (
    <View key={index}>
      <TouchableHighlight style={styles.container}>
        <ImageBackground
          source={{ uri: `http://${item.photo}` }}
          style={styles.cardImage}
          imageStyle={{ borderRadius: 10 }}
        >
          <View style={styles.cardText}>
            <View style={{ flexDirection: 'column' }}>
              <Text style={styles.title}>{item.title}</Text>
              <View style={styles.date}>
                <Calendar />
                <Text style={styles.masaberlaku}>Berlaku sampai {item.exp.slice(0, 10)}</Text>
              </View>
            </View>
            <View style={styles.button}>
              <Button
                customContainer={styles.lihat}
                customText={styles.buttonText}
                title={I18n.t('lihat')}
                onPress={() => this._showModal(item)}
              />
            </View>
          </View>
        </ImageBackground>
      </TouchableHighlight>
    </View>
  );
  _renderNoData = () => {
    const { firstLoad } = this.state;
    return (
      <View style={styles.nVoucher}>
        {firstLoad ? null : (
          <View style={styles.containerFound}>
            <View style={styles.containerImgFound}>
              <Image resizeMode="contain" style={styles.imagesFound} source={IMAGES.tokennotfound} />
            </View>
            <View style={styles.textFound}>
              <Text style={styles.txtTitleFound}>{I18n.t('noVoucher')}</Text>
            </View>
          </View>
        )}
      </View>
    );
  };

  render() {
    const { data, modaldata } = this.state;
    console.log(data);
    return (
      <View>
        <Header title="Voucher" />
        <FlatList
          style={styles.content}
          data={data}
          renderItem={this._renderVoucher}
          // onEndReachedThreshold={0.1}
          // onEndReached={this.more}
          ListEmptyComponent={this._renderNoData}
          showsVerticalScrollIndicator={false}
          // ItemSeparatorComponent={this.renderSeparator}
        />
        <Modal isVisible={this.state.isModalVisible}>
          <View style={styles.modal}>
            <Text style={styles.titleModal}>Kode Voucher</Text>
            <View style={styles.desk}>
              <Text>{modaldata.description}</Text>
            </View>
            <TouchableOpacity style={styles.tokenView} onPress={this.writeToClipboard}>
              <Text style={styles.tokenText}>{modaldata.code}</Text>
            </TouchableOpacity>
            <View style={styles.modalButton}>
              <Button customContainer={styles.buttonModal} title="Ok" onPress={this._hideModal} />
            </View>
          </View>
        </Modal>
        <Toast visible={this.state.visible} message="Copyed" />
      </View>
    );
  }
}
