import { StackNavigator } from 'react-navigation';
import Home from '../screens/Home';
import Search from '../screens/Search';
import UploadPhoto from '../screens/UploadPhoto';
import History from '../screens/History';
import Account from '../screens/Account';
import OnBoarding from '../screens/OnBoarding';
import VoucherScreen from '../screens/VoucherCard';
import TopUp from '../screens/TopUp';
import Forget from '../screens/Forget';
import SignIn from '../screens/SignIn';
import DetailPage from '../screens/DetailPage';
import SplashScreen from '../screens/SplashScreen';
import Edit from '../screens/Edit';
import AboutUs from '../screens/AboutUs';
import Help from "../screens/Help";
import HomeMenu from '../screens/HomeMenu';
import Menu from '../screens/Menu';
import OrderScreen from '../screens/OrderScreen';

export const HomeStack = StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarVisible: true
      }
    },
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const SplashScreenStack = StackNavigator(
  {
    SplashScreen: {
      screen: SplashScreen,
      navigationOptions: {
        tabBarVisible: false
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const SearchStack = StackNavigator(
  {
    Search: {
      screen: Search,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const UploadPhotoStack = StackNavigator(
  {
    UploadPhoto: {
      screen: UploadPhoto,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const HistoryStack = StackNavigator(
  {
    History: {
      screen: History,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const AccountStack = StackNavigator(
  {
    Account: {
      screen: Account,
      navigationOptions: {
        tabBarVisible: true
      }
    },

    AboutUs: {
      screen: AboutUs,
      navigationOptions: {
        tabBarVisible: false
      }
    },

    Help: {
      screen: Help,
      navigationOptions: {
        tabBarVisible: false
      }
    },

    Edit: {
      screen: Edit,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const OnBoardingStack = StackNavigator(
  {
    OnBoarding: {
      screen: OnBoarding,
      navigationOptions: {
        tabBarVisible: false
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const TopUpStack = StackNavigator(
  {
    TopUp: {
      screen: TopUp,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);
export const ForgetStack = StackNavigator(
  {
    Forget: {
      screen: Forget
    }
},
{ headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);


export const UserAuthStack = StackNavigator(
  {
    SignIn: {
      screen: SignIn,
      navigationOptions: {
        tabBarVisible: false
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
  );
export const DetailPageStack = StackNavigator(
  {
    DetailPage: {
      screen: DetailPage,
      navigationOptions: {
        tabBarVisible: false
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const HomeMenuStack = StackNavigator(
  {
    HomeMenu: {
      screen: HomeMenu,
      navigationOptions: {
        tabBarVisible: true
      }
    },

    Menu: {
      screen: Menu,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);
export const VoucherScreenStack = StackNavigator(
  {
    VoucherScreen: {
      screen: VoucherScreen,
      navigationOptions: {
        tabBarVisible: true
      }
    },
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const OrderScreenStack = StackNavigator(
  {
    OrderScreen: {
      screen: OrderScreen,
      navigationOptions: {
        tabBarVisible: false
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);
