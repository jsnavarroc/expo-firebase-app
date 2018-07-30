import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppButton from './application/components/AppButton';
import PreLoader from './application/components/PreLoader';
import BackgroundImage from './application/components/BackgroundImage';

export default class App extends React.Component {
  render() {
    return (
     <BackgroundImage
      source = {require('./assets/images/3.jpg') }
     >
      <Text style = {{color:'#fff', marginTop:100 }}>Hola</Text>
     </BackgroundImage>
    );
  }
}

