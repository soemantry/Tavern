/* eslint-disable import/first */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
/* eslint-disable react/no-multi-comp */
import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TextInput,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
import MainScreen from '../../components/layouts/MainScreen';
import Header from '../../components/elements/Header';
import IMAGES from '../../configs/images';
import styles from './styles';
import Modal from 'react-native-modal';
import I18n from '../../i18n';

const menu = [
  { _id: 1, name: 'Es Cendol Dawet', harga: 500, pcs: 1 },
  { _id: 2, name: 'Es Cendol Dawet', harga: 500, pcs: 1 }
];

class ListItem extends React.Component {
  render() {
    const { item } = this.props;

    return (
      <View style={styles.View1}>
        <View style={styles.imageContainer}>
          <Image source={IMAGES.orderScreen} resizedMode="contain" style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.makananContainer}> {item.name} </Text>
          <Text style={styles.hargaContainer}>
            {I18n.t('RP')} {item.harga}
          </Text>
          <View style={styles.plusminusContainer}>
            <TouchableHighlight onPress={this.props.onSubtract}>
              <Image
                source={IMAGES.minus}
                resizedMode="contain"
                style={styles.minusImage}
                onPress={this.props.onSubtract}
              />
            </TouchableHighlight>
            <Text>{item.pcs}</Text>
            <TouchableHighlight onPress={this.props.onAdd}>
              <Image source={IMAGES.plus} resizedMode="contain" style={styles.plusImage} />
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

export default class Component extends React.Component {
  state = {
    menu,
    isModalVisible: false
  };

  onSubtract = (item, index) => {
    const menu = [...this.state.menu];
    menu[index].pcs -= 1;
    this.setState({ menu });
  };

  onAdd = (item, index) => {
    const menu = [...this.state.menu];
    menu[index].pcs += 1;
    this.setState({ menu });
  };

  performTimeConsumingTask = async () =>
    new Promise(resolve =>
      setTimeout(() => {
        resolve('result');
      }, 1500)
    );

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
    this.performTimeConsumingTask().then(() => {
      this.setState({ isModalVisible: !this.state.isModalVisible });
    });
  };

  render() {
    const { menu } = this.state;
    let totalpcs = 0;
    let hargaMenu = 0;
    let diskon = 0;
    let totalHarga = 0;
    menu.forEach(item => {
      totalpcs += item.pcs;
      hargaMenu += item.pcs * item.harga;
      totalHarga += item.pcs * item.harga;
      diskon += item.harga - item.harga;
    });

    return (
      <MainScreen style={styles.container}>
        <Header title="" back={false} leftComponent={<Text style={styles.headerTitle}>Pesanan</Text>} />
        <ScrollView>
          <View style={styles.container}>
            <FlatList
              data={this.state.menu}
              renderItem={({ item, index }) => (
                <ListItem
                  item={item}
                  onSubtract={() => this.onSubtract(item, index)}
                  onAdd={() => this.onAdd(item, index)}
                />
              )}
              keyExtractor={item => item._id}
            />
            <View style={styles.spasiContainer} />
            <View style={styles.viewnomejaContainer}>
              <Text style={styles.textnomejaContainer}>{I18n.t('noMeja')}</Text>
              <TextInput
                style={styles.textinputContainer}
                underlineColorAndroid="grey"
                keyboardType="numeric"
              />
            </View>
            <View style={styles.spasiContainer2} />
            <View style={styles.catatanviewContainer}>
              <Text style={styles.catatanContainer}>{I18n.t('catatanTitle')}</Text>
              <TextInput
                style={styles.textinputContainer3}
                underlineColorAndroid="transparent"
                placeholder={I18n.t('catatan')}
                keyboardType="default"
              />
            </View>
            <View style={styles.spasiContainer3} />
            <View style={styles.kodeVoucher}>
              <Text style={styles.voucherContainer}>{I18n.t('kodeVocTitle')}</Text>
              <View>
                <TouchableOpacity style={styles.buttonvoucherContainer} onPress={this.kodeVoucher}>
                  <Text style={styles.textPakaiContainer}> {I18n.t('pakai')}</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.spasiContainer4} />
            <View style={styles.checkOut}>
              <View style={styles.viewHarga}>
                <Text style={styles.jmlhargaContainer}>{I18n.t('hargaTitle')}</Text>
                <View style={styles.sblhharga}>
                  <Text>
                    {I18n.t('RP')}
                    {hargaMenu}
                  </Text>
                </View>
              </View>
              <View style={styles.viewDiskon}>
                <Text style={styles.jmlhargaContainer}>{I18n.t('diskon')}</Text>
                <View style={styles.sblhharga}>
                  <Text>{I18n.t('hargadiskon')}</Text>
                </View>
              </View>
              <View style={styles.viewTotal}>
                <Text style={styles.jmlhargaContainer}>{I18n.t('totalHarga')}</Text>
                <View style={styles.sblhharga}>
                  <Text>
                    {I18n.t('RP')}
                    {totalHarga}
                  </Text>
                </View>
              </View>
              <View style={styles.spasiContainer4} />
              {/* TAMBAHIN POP UP DI BUTTON INI */}
              <View>
                <TouchableOpacity
                  style={styles.buttonPesananContainer}
                  title="Pesan"
                  onPress={this.toggleModal}
                >
                  <Text style={styles.textPesanan}> {I18n.t('pesan')}</Text>
                  <Modal isVisible={this.state.isModalVisible}>
                    <View style={styles.modal1}>
                      <View style={styles.border2}>
                        <Image source={IMAGES.popup} style={styles.img} />
                        <Text style={styles.modal}>{I18n.t('modal')}</Text>
                      </View>
                    </View>
                  </Modal>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </MainScreen>
    );
  }
}
