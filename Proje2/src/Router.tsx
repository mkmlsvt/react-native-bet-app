import * as React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './pages/Login';
import RegisterScreen from './pages/Register';
import MainPageScreen from './pages/MainPage';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBar from './shared/components/TabBar';
import Fixture from './pages/Fixture';
import LiveMatch from './pages/LiveMatch';
import Coupons from './pages/Coupons';
import {Provider} from 'react-redux';
import store, {useAppSelector} from './shared/store/store';
import Profile from './pages/Profile';
import {TouchableOpacity, View} from 'react-native';
import Icon from './shared/components/Icon';
import colors from './shared/constansts/colors';
import {Text} from 'react-native-paper';
import CreateCoupon from './pages/CreateCoupon';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function App() {
  function BottomNavBar(props: any) {
    return (
      <Tab.Navigator tabBar={props => <TabBar {...props} />}>
        <Tab.Screen
          options={{
            headerShown: true,
            title: 'Ana Sayfa',
            headerTitleAlign: 'center',
          }}
          name="Home"
          component={MainPageScreen}
          initialParams={{iconName: 'home : ion'}}
        />
        <Tab.Screen
          options={{
            headerShown: true,
            title: 'Fikstür',
            headerTitleAlign: 'center',
            headerRight: () => {
              const navigation = useNavigation<any>();
              const coupon =
                useAppSelector(state => state.coupon)?.matchPredicts?.length ??
                0;

              return (
                <TouchableOpacity
                  style={{margin: 10}}
                  onPress={() => {
                    coupon && navigation.navigate('CreateCoupon', {});
                  }}>
                  <Icon
                    name="soccer-field:materialcomm"
                    size={30}
                    color={colors.primary}
                  />
                  <View
                    style={{
                      backgroundColor: colors.secondary,
                      position: 'absolute',
                      right: -2,
                      padding: 5,
                      top: -7,
                      borderRadius: 20,
                    }}>
                    <Text style={{color: colors.white, fontSize: 10}}>
                      {coupon}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            },
          }}
          name="Fixture"
          component={Fixture}
          initialParams={{iconName: 'calendar : ion'}}
        />
        <Tab.Screen
          options={{
            headerShown: true,
            headerTitle: 'Canlı Skor',
            headerTitleAlign: 'center',
          }}
          name="LiveMatchs"
          component={LiveMatch}
          initialParams={{
            iconName: 'football-outline : ion',
          }}
        />
        <Tab.Screen
          options={{
            headerShown: true,
            title: 'Kuponlar',
            headerTitleAlign: 'center',
          }}
          name="Coupons"
          component={Coupons}
          initialParams={{iconName: 'ticket : materialcomm'}}
        />
        <Tab.Screen
          options={{
            headerShown: true,
            title: 'Profil',
            headerTitleAlign: 'center',
          }}
          name="Profile"
          component={Profile}
          initialParams={{iconName: 'person : ion'}}
        />
      </Tab.Navigator>
    );
  }
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="CreateCoupon"
            component={CreateCoupon}
            options={{headerShown: true, title: 'Kupon Oluştur'}}
          />
          <Stack.Screen
            name="BottomNavBar"
            component={BottomNavBar}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
