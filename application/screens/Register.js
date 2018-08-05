import React, { Component } from 'react';
import t from 'tcomb-form-native';
import FormValidation from '../utils/validation';
import BackgroundImage from '../components/BackgroundImage';
import {View} from 'react-native';
import {Card} from 'react-native-elements';
import AppButton from '../components/AppButton';
const Form = t.form.Form;

class Register extends Component {
    constructor() {
        super();
        this.state = {
            user:{
                email:'',
                password: '',
            }
        };
        this.samePassword =  t.refinement(t.String, (s) => {
            return s=== this.state.user.password;
        }); 

        this.user = t.struct({
            email:FormValidation.email,
            password:FormValidation.password,
            password_confirmation: this.samePassword,
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
                    error: 'Password no valido',
                    password: true,
                    secureTextEntry:true,
                },
                password_confirmation: {
                    help: 'Introduce tu password',
                    error: 'Los Password no coinciden',
                    password: true,
                    secureTextEntry:true,
                },
            }
        }
        this.validate = null;
    }
    
    register(){
        console.log(this.state);
        try {
            this.validate = this.refs.form.getValue();
        } catch (error) {
            console.log(error);
        }
        
    }

    onChange(user){
        this.setState({user});
        try {
            this.validate = this.refs.form.getValue();
        } catch (error) {
            console.log(error);
        }
    }
    render() {
        return (
            <BackgroundImage source = {require('../../assets/images/3.jpg')} >
                <View>
                 <Card wrapperStyle = {{paddingLeft:10}} title="Registrate">
                    <Form
                      ref='form'
                      type={this.user}
                      onChange = {(v) => { this.onChange(v)}}
                      value = {this.state.user}
                      options = {this.options}
                    />
                    <AppButton
                        bgColor = "rgba(111, 38, 74, 0.7)"
                        title = "Registrarme"
                        action = { this.register.bind(this)}
                        iconName = {"user-plus"}
                        iconSize = {30}
                        iconColor = "#FFF"
                        widthProp = {333}
                    />
                 </Card>
                </View>
            </BackgroundImage>
        );
    }
}

export default Register;