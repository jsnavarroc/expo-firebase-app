import React, { Component } from 'react';
import t from 'tcomb-form-native';
import FormValidation from '../utils/validation';
import BackgroundImage from '../components/BackgroundImage';
import {View} from 'react-native';
import {Card} from 'react-native-elements';
import AppButton from '../components/AppButton';
const Form = t.form.Form;
class Login extends Component {
    constructor() {
        super();
        this.user=t.struct({
            email:FormValidation.email,
            password: FormValidation.password,
        });
        this.options = {
            fields:{
                email: {
                    help: 'Introduce tu email',
                    error: 'Email incorrecto',
                    autoCapitalize:'none',
                },
                password: {
                    help: 'Introduce tu password',
                    error: 'password no valido',
                    password: true,
                    secureTextEntrt:true,
                }
            }
        }
    }

    login(){}
    
    render() {
        return (
                <BackgroundImage source = {require('../../assets/images/3.jpg')}>
                    <View>
                        <Card wrapperStyle={{paddingLeft:10}} title='Inciar Sesión'>
                            <Form 
                                ref="form"
                                type={this.user}
                                options={this.options}
                            />
                            <AppButton
                                bgColor = "rgba(111, 38, 74, 0.7)"
                                title = "Login"
                                action = { this.login.bind()}
                                iconName = {"sign-in"}
                                iconSize = {30}
                                iconColor = "#FFF"
                            />
                        </Card>
                    </View>
                </BackgroundImage>
        );
    }
}

export default Login;