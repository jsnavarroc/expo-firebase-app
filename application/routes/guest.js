import {createStackNavigator} from 'react-navigation';
import StartScreen from '../screens/Start';
import LoginScreen from '../screens/Login';



  export default createStackNavigator(
    {
        Start:{
                screen:StartScreen 
             },
        Login:{
                screen:LoginScreen 
             },

    },
    {
        initialRouteName:'Start',
        navigationOptions:{
            title: 'Expo App',
            headerStyle: {
              backgroundColor: 'rgba(111, 38, 74, 0.7)',
            },
            headerTintColor: '#FFF',
            headerTitleStyle: {
              fontWeight: 'bold',
              textAlign:'center',
              alignSelf:'center',
            },
        }
    }
);
