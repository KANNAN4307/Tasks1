import React from 'react';
import {View, Button} from 'react-native';

const DetailScreen = ({navigation}) => {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Button title ='To home screen'  onPress={() => navigation.navigate('Home') }/>
      </View>
    );
};

export default DetailScreen;
