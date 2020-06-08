import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
 } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

const Signup = ({navigation}) => {
        const [userdata, setuserdata ] = useState({
            email: '',
            password: '',
            confirm_password: '',
            emailIcon: false,
            passwordicon: true,
            confirmpasswordicon: true,
        });

const EmailHandler = (val) => {
        if (val.length !== 0){
            setuserdata({
                ...userdata,
                email: val,
                emailIcon: true,
            });
        }
        else {
            setuserdata({
                ...userdata,
                email: val,
                emailIcon: false,
            });
        }
};

const PasswordHandler = (val) => {
     setuserdata({
         ...userdata,
         password: val,
     });
};

const ConfirmPasswordHandler = (val) => {
    setuserdata({
        ...userdata,
        confirm_password: val,
    });
};

const updateSecureEntry = () => {
    setuserdata({
        ...userdata,
        passwordicon: !userdata.passwordicon,
    });
};

const updateconfirmSecureEntry = () => {
    setuserdata({
        ...userdata,
        confirmpasswordicon: !userdata.confirmpasswordicon,
    });
};
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text_header}>Register now</Text>
            </View>
            <Animatable.View style={styles.footer} animation ='fadeInUpBig'>
                <Text style={styles.text_footer}>Email</Text>
            <View style={styles.action}>
                    <Icon
                    name='user-o'
                    size={20}
                    color='#05375a'
                    />
                    <TextInput
                    style={styles.textInput}
                    placeholder='Type your Email'
                    placeholderTextColor='#05375a'
                    autoCapitalize='none'
                    onChangeText={(val) => EmailHandler(val)}
                    />
                    {userdata.emailIcon ?
                    <Animatable.View
                    animation='bounceIn'
                    >
                    <Icon
                    name="check-circle"
                    color="#0EF20B"
                    size={20}
                    /> 
                    </Animatable.View>
                    : null}
            </View>

            <Text style={[styles.text_footer, { marginTop: 35}]}>Password</Text>
            <View style={styles.action}>
                    <Icon
                    name='lock'
                    size={20}
                    color='#05375a'
                    />
                    <TextInput
                    style={styles.textInput}
                    placeholder='Type your Password'
                    secureTextEntry={userdata.passwordicon ? true : false}
                    placeholderTextColor='#05375a'
                    autoCapitalize='none'
                    onChangeText={(val) => PasswordHandler(val)}
                    />
                    <TouchableOpacity onPress={updateSecureEntry}>
                        {userdata.passwordicon ? <Icon2
                    name="eye-off"
                    color="grey"
                    size={20}
                    /> :
                    <Icon2
                    name="eye"
                    color="grey"
                    size={20}
                    />}
                    </TouchableOpacity>
            </View>

            <Text style={[styles.text_footer, { marginTop: 35}]}>Confirm Password</Text>
            <View style={styles.action}>
                    <Icon
                    name='lock'
                    size={20}
                    color='#05375a'
                    />
                    <TextInput
                    style={styles.textInput}
                    placeholder='Confirm Password'
                    secureTextEntry={userdata.confirmpasswordicon ? true : false}
                    placeholderTextColor='#05375a'
                    autoCapitalize='none'
                    onChangeText={(val) => ConfirmPasswordHandler(val)}
                    />
                    <TouchableOpacity onPress={updateconfirmSecureEntry}>
                        {userdata.confirmpasswordicon ? <Icon2
                    name="eye-off"
                    color="grey"
                    size={20}
                    /> :
                    <Icon2
                    name="eye"
                    color="grey"
                    size={20}
                    />}
                    </TouchableOpacity>
            </View>

            <View style={styles.button}>
                <LinearGradient
                    colors={['#08d4c4', '#01ab9d']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Sign Up</Text>
                </LinearGradient>

            </View>

            <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={[styles.signIn, {
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#009387'
                    }]}>Sign In</Text>
                </TouchableOpacity>
        </Animatable.View>

    </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#009387',
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50,
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18,
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5,
    },
    textInput: {
        flex: 1,
        marginTop: -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50,
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold',
    },
  });
export default Signup;
