/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, ScrollView, Image } from 'react-native';
import DropDownItem from 'react-native-drop-down-item';
import styles from './styles';
import IMAGES from '../../configs/images';
import I18n from '../../i18n';
import HeaderSearch from '../../components/elements/HeaderSearch';

export default class App extends Component {
  state = {
    contents: [
      {
        icon: (
          <Text>
            <Image source={IMAGES.home} style={styles.icon} />
          </Text>
        ),
        title: <Text>{I18n.t('home')}</Text>,
        body: <Text>{I18n.t('penjelasan1')}</Text>
      },
      {
        icon: (
          <Text>
            <Image source={IMAGES.saldo} style={styles.icon} />
          </Text>
        ),
        title: <Text>{I18n.t('topup')}</Text>,
        body: <Text>{I18n.t('penjelasan2')}</Text>
      },
      {
        icon: (
          <Text>
            <Image
              source={IMAGES.chat}
              style={styles.icon}
              invisibleImage={IMAGES.right}
              visibleImage={IMAGES.down}
            />
          </Text>
        ),
        title: <Text>{I18n.t('chat')}</Text>,
        body: <Text>{I18n.t('penjelasan3')}</Text>
      },
      {
        icon: (
          <Text>
            <Image source={IMAGES.profil} style={styles.icon} />
          </Text>
        ),
        title: <Text>{I18n.t('profil')}</Text>,
        body: <Text>{I18n.t('penjelasan4')}</Text>
      },
      {
        icon: (
          <Text>
            <Image source={IMAGES.keranjang} style={styles.icon} />
          </Text>
        ),
        title: <Text>{I18n.t('keranjang')}</Text>,
        body: <Text>{I18n.t('penjelasan5')}</Text>
      }
    ]
  };

  _onBack = () => {
    // eslint-disable-next-line react/prop-types
    this.props.navigation.navigate('Account');
  };
  render() {
    return (
      <View style={styles.container}>
        <HeaderSearch
          left={[
            {
              icon: IMAGES.icoBack,
              onPress: () => this._onBack()
            }
          ]}
          title={I18n.t('header.help')}
        />

        <ScrollView style={{ alignSelf: 'stretch' }}>
          {this.state.contents
            ? this.state.contents.map((param, i) => (
                <DropDownItem
                  key={i}
                  style={styles.dropDownItem}
                  contentVisible={false}
                  header={
                    <View style={styles.header}>
                      <Text>{param.icon}</Text>
                      <Text
                        // eslint-disable-next-line react-native/no-color-literals
                        style={styles.title}
                      >
                        {param.title}
                      </Text>
                    </View>
                  }
                >
                  <Text style={[styles.body]}>{param.body}</Text>
                </DropDownItem>
              ))
            : null}
          <View />
        </ScrollView>
      </View>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
