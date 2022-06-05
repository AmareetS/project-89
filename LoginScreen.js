import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import React,{Component} from 'react';
import{Text,View} from 'react-native';

export default class LoginScreen extends Component{
    signInWithGoogleAsync= acync () => {
        try{
            const result=await Google.logInAsync({
                behavior:"web",
                androidClientId: "512716633783-rkrc8tpbrknrpnt0akjbqqo0v4ukafkc.apps.googleusercontent.com",
                iosClientId:"512716633783-n6qco4smqeh9g64ffalebfrsepq0nvlf.apps.googleusercontent.com",
                scopes:['profile','email']
            })
        }
    }
    render(){
        return(
            <View
                style={{
                    flex:1,
                    justifyContent:"center",
                    alignItems:"center"
                }}>
                    <Text>Login</Text>
                </View>
        )
    }
}