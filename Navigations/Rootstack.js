import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';
import Splashscreen from '../screens/Splashscreen';
import  SignUpscreen  from '../screens/SignUpscreen';
import SignInscreen from '../screens/SignInscreen';

const RootStack = createStackNavigator();

const RootStackscreen = ({navigation}) => {

    return (
        <RootStack.Navigator headerMode='none' >
            <RootStack.Screen name='Splashscreen' component={Splashscreen}/>
            <RootStack.Screen name='SignUpscreen' component={SignUpscreen}/>
            <RootStack.Screen name='SignInscreen' component={SignInscreen}/>
        </RootStack.Navigator>

    );
};

export default RootStackscreen;
