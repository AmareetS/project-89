import * as React from 'react';
import{createSwitchNavigator,createAppContainer} from "react-navigation"

import LoginScreen from "./screens/LoginScreen"
import LoadingScreen from "./screens/LoadingScreen"
import DashboardScreen from "./screens/DashboardScreen"

import * as firebase from "firebase";
import{firebadeConfig} from "./config";

if(!firebase.apps.length){
  firebase.initialzeApp(firebaseConfig);
} else{
  firebase.app();
}
const AppSwitchNavigator= createSwitchNavigator({
  LoadingScreen:LoadingScreen,
  LoginScreen:LoginScreen,
  DashboardScreen: DashboardScreen
})
const AppNavigator=createAppContainer(AppSwitchNavigator)

export default function App() {
  return (
    <AppNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
