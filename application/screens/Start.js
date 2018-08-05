import React, { Component } from 'react';
import {View} from 'react-native';
import BackgroundImage from '../components/BackgroundImage';
import AppButton from '../components/AppButton';
import { NavigationActions } from 'react-navigation';
import Firebase from '../utils/firebase';
import firebase from 'firebase'; 
firebase.initializeApp(Firebase);

class Start extends Component {
    login(){
        const navigateAction = NavigationActions.navigate({
            routeName: 'Login'
        });
        this.props.navigation.dispatch(navigateAction);
    }


    register(){
        const navigateAction = NavigationActions.navigate({
            routeName: 'Register'
        });
        this.props.navigation.dispatch(navigateAction);

    }
    async facebook(){}
    render() {
        return (<BackgroundImage source={require('../../assets/images/3.jpg')}>
                    <View style={{justifyContent:'center', flex:1}}>
                        <AppButton
                            bgColor = "rgba(111, 38, 74, 0.7)"
                            title = "Entrar"
                            action = { this.login.bind(this) }
                            iconName = {"sign-in"}
                            iconSize = {30}
                            iconColor = "#FFF"
                        />
                        <AppButton
                            bgColor = "rgba(20, 200, 50, 0.7)"
                            title = "Registrarme"
                            action = { this.register.bind(this) }
                            iconName = {"user-plus"}
                            iconSize = {30}
                            iconColor = "#FFF"
                        />
                        <AppButton
                            bgColor = "rgba(67, 67, 146, 0.7)"
                            title = "Facebook"
                            action = { this.facebook.bind()}
                            iconName = {"facebook"}
                            iconSize = {30}
                            iconColor = "#FFF"
                        />
                    </View>
           </BackgroundImage>);
    }
}

export default Start;