import { SwitchNavigator } from 'react-navigation';
import { OnBoardingStack, SplashScreenStack, HomeMenuStack, HomeStack, AccountStack, SearchStack, DetailPageStack, OrderScreenStack, ForgetStack, TopUpStack, VoucherScreenStack } from './stackNavigator';
import { Drawer } from './drawerNavigator';
import { UserAuthStack } from './stackNavigator';

export default SwitchNavigator(
  {
    OnBoarding: OnBoardingStack,
    DetailPage: DetailPageStack,
    SplashScreen :SplashScreenStack,
    HomeMenu: HomeMenuStack,
    Home: HomeStack,
    App: Drawer,
    TopUp: TopUpStack,
    Account: AccountStack,
    Searching: SearchStack,
    OrderScreen: OrderScreenStack,
    Forget: ForgetStack,
    UserAuth: UserAuthStack,
    VoucherScreen: VoucherScreenStack,
  },
  {
    initialRouteName: 'Account'
  }
);
