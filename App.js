import React from 'react';
import { StyleSheet, View } from 'react-native';
import GuestNavigation from './application/routes/guest';
import firebase from 'firebase'; 
import {Text} from 'react-native-elements';
import PreLoader from './application/components/PreLoader';
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLogged : false,
      loaded : false,
    }
  }
  
  async componentWillMount(){
    await firebase.auth().onAuthStateChanged(user => {
      if(user!==null){
        this.setState({
          isLogged : false,
          loaded : true,
        });
      }
    });
  }
  
  render() {
    const {isLogged, loaded} = this.state;
    if(!loaded){
      return (<PreLoader/>)
    }
    if(isLogged){
      return (<Text> Logueado </Text>);
    }else{
      return (<GuestNavigation/>); 
    }
  }
}

