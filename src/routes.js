import React, {Component} from 'react';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import { Dimensions } from 'react-native';
import Login from './components/auth/login';
import SignUp from './components/auth/signUp';
import Home from './components/Home';
import Posts from './components/Posts';
import Menu from './components/global/menu';
import { View } from 'react-native';
import {Constants} from 'expo';

const DrawerBar = createDrawerNavigator({
    Login:{screen:Login},
    SignUp:{screen:SignUp},
    Home:{screen:Home},
    Posts:{screen:Posts}
},{
    initialRouteName:'Home',
    headerMode:'none',
    drawerPosition:'left',
    drawerWidth:Dimensions.get('window').width*0.7,
    contentComponent:Menu,
    drawerLockMode: 'locked-closed'
});

const App = createAppContainer(DrawerBar)

  export default function Route(){
      return(
          <View style={{flex:1}}>
            <View style={{backgroundColor: "#6A1B9A",height: Constants.statusBarHeight}} />
            <App/>
          </View>
      )
  }
