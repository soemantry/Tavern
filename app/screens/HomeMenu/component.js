/* eslint-disable react/no-unused-state */
import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, Image, BackHandler } from 'react-native';
import IMAGES from '../../configs/images';
import Header from '../../components/elements/Header';
import MainScreen from '../../components/layouts/MainScreen';
import styles from './styles';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pressed: false,
      isLoading: false,
      kategori: '',
      baseUrl: ''
    };
  }

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentDidUpdate() {
    this._navigate();
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  _navigate = () => {
    if (this.state.kategori !== '') {
      this.props.navigation.navigate('Menu', { kategori: this.state.kategori, baseUrl: this.state.baseUrl });
    }
  };

  _selectFood = (category, url) => {
    if (!this.pressed) {
      this.pressed = true;
      this.setState({
        kategori: category,
        baseUrl: url
      });
      this._navigate();
    }
  };

  handleBackPress = () => {
    BackHandler.exitApp(); // works best when the goBack is async
    return true;
  };
  render() {
    return (
      <MainScreen>
        <Header title="" back={false} leftComponent={<Text style={styles.headerTitle}>Menu</Text>} />
        <View style={styles.container}>
          <Image style={styles.imageScroll} source={IMAGES.background} />
          <View style={styles.categoryRow}>
            <View style={styles.categoryContainer}>
              <TouchableOpacity
                onPress={() => this._selectFood('All Food', `http://35.172.178.112:9000/api/menu/v1`)}
                style={styles.categoryView}
                activeOpacity={0.5}
              >
                <Image style={styles.categoryIcon} source={IMAGES.categoryall} />
                <Text style={styles.categoryText}>All Food</Text>
                <View style={styles.divider} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  this._selectFood('Rekommendation', `http://35.172.178.112:9000/api/menu/v1/recommendation`)
                }
                style={styles.categoryView}
                activeOpacity={0.5}
              >
                <Image style={styles.categoryIcon} source={IMAGES.categoryRecom} />
                <Text style={styles.categoryText}>Recomendation</Text>
                <View style={styles.divider} />
              </TouchableOpacity>
            </View>
            <View style={styles.categoryContainer}>
              <TouchableOpacity
                onPress={() =>
                  this._selectFood('Junkfood', `http://35.172.178.112:9000/api/menu/v1?category=Junkfood`)
                }
                style={styles.categoryView}
                activeOpacity={0.5}
              >
                <Image style={styles.categoryIcon} source={IMAGES.category1} />
                <Text style={styles.categoryText}>Junkfood</Text>
                <View style={styles.divider} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  this._selectFood('Drinks', `http://35.172.178.112:9000/api/menu/v1?category=Drink`)
                }
                style={styles.categoryView}
                activeOpacity={0.5}
              >
                <Image style={styles.categoryIcon} source={IMAGES.category2} />
                <Text style={styles.categoryText}>Drinks</Text>
                <View style={styles.divider} />
              </TouchableOpacity>
            </View>
            <View style={styles.categoryContainer}>
              <TouchableOpacity
                onPress={() =>
                  this._selectFood('Seafood', `http://35.172.178.112:9000/api/menu/v1?category=Seafood`)
                }
                style={styles.categoryView}
                activeOpacity={0.5}
              >
                <Image style={styles.categoryIcon} source={IMAGES.category3} />
                <Text style={styles.categoryText}>Seafood</Text>
                <View style={styles.divider} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  this._selectFood('Dessert', `http://35.172.178.112:9000/api/menu/v1?category=Dessert`)
                }
                style={styles.categoryView}
                activeOpacity={0.5}
              >
                <Image style={styles.categoryIcon} source={IMAGES.category4} />
                <Text style={styles.categoryText}>Desert</Text>
                <View style={styles.divider} />
              </TouchableOpacity>
            </View>
            <View style={styles.categoryContainer}>
              <TouchableOpacity
                onPress={() =>
                  this._selectFood('Meal', `http://35.172.178.112:9000/api/menu/v1?category=Meal`)
                }
                style={styles.categoryView}
                activeOpacity={0.5}
              >
                <Image style={styles.categoryIcon} source={IMAGES.category5} />
                <Text style={styles.categoryText}>Meal</Text>
                <View style={styles.divider} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  this._selectFood('Vegetables', `http://35.172.178.112:9000/api/menu/v1?category=Vegetable`)
                }
                style={styles.categoryView}
                activeOpacity={0.5}
              >
                <Image style={styles.categoryIcon} source={IMAGES.category6} />
                <Text style={styles.categoryText}>Vegetables</Text>
                <View style={styles.divider} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </MainScreen>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
