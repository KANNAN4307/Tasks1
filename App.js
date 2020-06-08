import React, {useState, useEffect, useMemo, useReducer } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {DrawerContent} from './screens/Customdrawer';
import RootStack from './Navigations/Rootstack';
import Maintabscreen from './screens/MainTab';
import Settingsscreen from './screens/Settings';
import SupportScreen from './screens/Support';
import Bookmarkscreen from './screens/Bookmarkscreen';
import { View, ActivityIndicator } from 'react-native';
// import SignIn from './screens/SignInscreen';
import { Authcontext } from './components/context';
import AsyncStorage from '@react-native-community/async-storage';

const Drawer = createDrawerNavigator();

const App = () => {


  const initialState = {
    isLoading: true,
    userToken: null,
    userName: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
        case 'RETRIVE_TOKEN' :
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };

        case 'LOGIN' :
        return {
          ...prevState,
          userToken: action.token,
          userName: action.id,
          isLoading: false,
        };

        case 'LOGOUT' :
        return {
          ...prevState,
          isLoading: false,
          userToken: null,
          userName: null,
        };

        case 'REGISTER' :
        return {
          ...prevState,
          isLoading: false,
          userToken: action.token,
          userName: action.id,
        };

    }
  };

  const [loginState, dispatch] = useReducer(loginReducer, initialState );

  const authContext = useMemo(() => ({

    SignIn: async(authuser) => {
    const userToken = String(authuser[0].userToken);
    const userName = String(authuser[0].username);
          try {
            await AsyncStorage.setItem('userToken', userToken);
          } catch (e) {
            console.log(e);
          }
      dispatch({ type: 'LOGIN', id: userName, token: userToken });
    },
    SignOut:async() => {
      try {
        await AsyncStorage.removeItem('userToken');
      } catch (e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' });
    },
    SignUp:() => {
    },
  }),[]);

  useEffect(() => {

    setTimeout(async() => {

      let userToken;
      userToken = null;
      try {
        await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.log(e);
      }
      dispatch({ type: 'RETRIVE_TOKEN', token: userToken});
    }, 1200);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size= 'large' color ='blue'/>
      </View>
    );
  }


  return (
    <Authcontext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken !== null ?
         ( <Drawer.Navigator
          initialRouteName="Mainhome"
           drawerContent={(props) => <DrawerContent {...props}/>}>
          <Drawer.Screen name="Home" component={Maintabscreen} />
          <Drawer.Screen name="Settings" component={Settingsscreen} />
          <Drawer.Screen name="Support" component={SupportScreen} />
          <Drawer.Screen name="Bookmark" component={Bookmarkscreen} />
          {/* <Drawer.Screen name="Notifications" component={DetailStackcontainer} /> */}
        </Drawer.Navigator>) :
         (<RootStack />)}

      </NavigationContainer>
    </Authcontext.Provider>
  );
};
export default App;
