/* eslint-disable react/no-unused-state */
/* eslint-disable no-console */
import React from 'react';
import { View, FlatList, Text, Image, RefreshControl, Linking, BackHandler } from 'react-native';
import PropTypes from 'prop-types';
import Button from '../../components/elements/Button';
import MainScreen from '../../components/layouts/MainScreen';
import HeaderSearch from '../../components/elements/HeaderSearch';
import styles from './styles';
import { IMAGES } from '../../configs';
import I18n from '../../i18n';
// import { COLOR_FONT_LINK } from '../../styles';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: this.props.navigation.state.params.kategori,
      refreshing: false,
      data: [],
      page: 1,
      firstLoad: true,
      filter: '',
      gambar: '',
      harga: '',
      judul: '',
      desc: '',
      isGetAll: this.props.navigation.state.params.allfood
    };
    this.arrayholder = [];
    this.search = this.search.bind(this);
    this.set = this.set.bind(this);
    this.refresh = this.refresh.bind(this);
    this.clear = this.clear.bind(this);
    // this.more = this.more.bind(this);
  }

  async componentWillMount() {
    await this._getData();
  }

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  set(value) {
    this.setState({ keyword: value });
  }

  clear() {
    this.setState(
      {
        page: 1,
        keyword: this.props.navigation.state.params.kategori
      },
      () => this._getData()
    );
  }

  refresh() {
    this.setState(
      {
        page: 1,
        refreshing: true
      },
      () => this._getData()
    );
  }

  search(text) {
    const newData = this.arrayholder.filter(item => {
      const itemData = item.description ? item.description.toUpperCase() : ''.toUpperCase();

      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });

    this.setState({ data: newData });
  }

  // more = () => {
  //   if (this.state.totalPage !== this.state.page) {
  //     if (this.state.totalPage === 1) {
  //       this._getData();
  //     } else {
  //       this.setState({ page: this.state.page + 1 }, () => {
  //         this._getData();
  //       });
  //     }
  //   }
  // };

  _onBack = () => {
    this.props.navigation.navigate('HomeMenu');
  };

  _kirimDetail = (title, description, price, img) => {
    this.setState({
      judul: title,
      desc: description,
      harga: price,
      picture: img
    });
    this._pindahDetail();
  };

  _pindahDetail = () => {
    this.props.navigation.navigate('DetailPage', {
      judul: this.state.judul,
      desc: this.state.desc,
      harga: this.state.harga,
      picture: this.state.picture,
      keyword: this.state.keyword
    });
  };

  handleBackPress = () => {
    this._onBack(); // works best when the goBack is async
    return true;
  };

  // eslint-disable-next-line consistent-return
  async _getData() {
    const url = this.props.navigation.state.params.baseUrl;
    const bearer = 'Basic dGVmYS0yMDE5OnBkd25ncGlhLXI3NDc4dHEtNDdsdHNxNmstZmFsdHN0cDVrZg==';
    try {
      // eslint-disable-next-line no-undef
      const response = await fetch(url, {
        method: 'GET',
        withCredentials: true,
        credentials: 'include',
        headers: {
          Authorization: bearer,
          'Content-Type': 'application/json'
        }
      });
      const responseJson = await response.json();
      this.setState({ data: responseJson.data });
      // eslint-disable-next-line no-alert
      console.log(responseJson);
      return responseJson.data;
    } catch (error) {
      console.error(error);
    } finally {
      this.setState({ refreshing: false, firstLoad: false });
    }
  }
  // eslint-disable-next-line no-unused-vars
  _renderFood = ({ item, index }) => {
    console.log(item.picture);
    return (
      <View key={index}>
        <View style={styles.listMenu}>
          <View style={styles.imageList}>
            <Image style={styles.image} source={{ uri: `http://${item.picture}` }} />
          </View>
          <View style={styles.textView}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.deskripsi}>{item.description} </Text>
            <View style={styles.price}>
              <Text style={styles.rp}>Rp</Text>
              <Text style={styles.nominal}>{item.price}</Text>
            </View>
          </View>
          <View style={styles.buttonView}>
            <Button
              customContainer={styles.button}
              customText={styles.btnText}
              disable
              isUpperCase={false}
              title="Tambah"
              onPress={() => this._kirimDetail(item.name, item.description, item.price, item.picture)}
            />
          </View>
        </View>
      </View>
    );
  };

  _renderNoData = () => {
    const { firstLoad } = this.state;
    return (
      <View>
        {firstLoad ? null : (
          <View style={styles.containerFound}>
            <View style={styles.containerImgFound}>
              <Image resizeMode="contain" style={styles.imagesFound} source={IMAGES.noDataSearch} />
            </View>
            <View style={styles.textFound}>
              <Text style={styles.txtTitleFound}>{I18n.t('error.noData')}</Text>
              <Text style={styles.txtDescFound}>{I18n.t('error.noDataDesc')}</Text>
            </View>
          </View>
        )}
      </View>
    );
  };

  _onPress = url => {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      }
    });
  };

  render() {
    const { data, refreshing } = this.state;
    return (
      <MainScreen style={styles.container}>
        <HeaderSearch
          searchBar={text => this.setState({ filter: text })}
          left={[
            {
              icon: IMAGES.icoBack,
              onPress: () => this._onBack()
            }
          ]}
          title={this.state.keyword}
          onSubmitEditing={() => this.search(this.state.filter)}
          onPressClose={this.clear}
          typeClose={!!this.state.keyword}
          placeholder={I18n.t('placeholder.news')}
        />
        <FlatList
          data={data}
          renderItem={this._renderFood}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={this.refresh} />}
          // onEndReachedThreshold={0.1}
          // onEndReached={this.more}
          ListEmptyComponent={this._renderNoData}
          showsVerticalScrollIndicator={false}
          // ItemSeparatorComponent={this.renderSeparator}
        />
      </MainScreen>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
