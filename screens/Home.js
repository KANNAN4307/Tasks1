import React from 'react';
import {View, Button, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({navigation}) => {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <StatusBar backgroundColor='#009387' barStyle='light-content' />
          <Button title ='to add detiled screen'  onPress={() => navigation.navigate('Notifications') }/> 
          <Icon name='ios-heart'  size={25} color='red'/>
      </View>
    );
};

export default HomeScreen;
