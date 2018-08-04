import {createStackNavigator} from 'react-navigation';
import StartScreen from '../screens/Start';



  export default createStackNavigator(
    {
        Start:{
                screen:StartScreen 
             }
    },
    {
        initialRouteName:'Start',
        navigationOptions:{
            title: 'Start',
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
