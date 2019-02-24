import React, { Component } from 'react';
import { View,AsyncStorage, Text,ActivityIndicator, StyleSheet,KeyboardAvoidingView, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo';
import { GRADIENTS,conststyles } from './../../constants'
import FontAwesomeIcon from '@expo/vector-icons/FontAwesome';
import { Sae } from 'react-native-textinput-effects';
import AuthService from './auth.services';
class login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email:'',
            password:'',
            loading:false
         };
    }

    onLoginPress=()=>{
        this.setState({loading:true})
        AuthService.Login(this.state.email,this.state.password).then(res=>{
            this.props.navigation.navigate('Home')
            // console.warn(" i m here")
            this.setState({loading:false})
            // this.settoAsync(res);
            // this.props.navigation.navigate('Home')
        }).catch(err=>{
            console.log(" i m in catc")
            console.warn(err)
            this.setState({loading:false})
        }) // error handling and showing pop up here
    }

    settoAsync = (data)=>{
        AsyncStorage.setItem('TOKENDATA',JSON.stringify(data))
    }   

    render() {
        return (
            <ImageBackground style={{flex:1}}
                source={require('./../../../assets/books.jpg')}
            >
            {this.state.loading && <View style={{flex:1,backgroundColor:'rgba(255,255,255,0.8)',alignItems:'center',justifyContent:'center'}}>
                <ActivityIndicator size="large" color="#673AB7"/>
            </View> ||
            <ScrollView contentContainerStyle={{flex:1,backgroundColor:'rgba(0,0,0,0.9)'}}>
            <LinearGradient
                colors={['#673AB7', '#8E24AA', 'transparent']}
                style={styles.container}>
                <Text style={conststyles.text}>Login</Text>
                <KeyboardAvoidingView style={{borderBottomWidth:1,borderColor:"#9E9E9E",marginTop:10}}>
                <Sae
                    label={<Text style={{color:"#9E9E9E",fontWeight:'100'}}>Email</Text>}
                    iconClass={FontAwesomeIcon}
                    iconName={'pencil'}
                    iconColor={'white'}
                    inputPadding={16}
                    labelHeight={24}
                    borderHeight={2}
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    onChangeText={(text)=>this.setState({email:text})}
                    value={this.state.email}
                    keyboardType="email-address"
                />
                </KeyboardAvoidingView>
                <KeyboardAvoidingView style={{borderBottomWidth:1,borderColor:"#9E9E9E",marginVertical:10}}>
                <Sae
                    label={<Text style={{color:"#9E9E9E",fontWeight:'100'}}>Password</Text>}
                    iconClass={FontAwesomeIcon}
                    iconName={'pencil'}
                    iconColor={'white'}
                    inputPadding={16}
                    labelHeight={24}
                    borderHeight={2}
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    onChangeText={(text)=>this.setState({password:text})}
                    value={this.state.password}
                    secureTextEntry={true}
                />
                </KeyboardAvoidingView>
                <TouchableOpacity
                    onPress={()=>this.onLoginPress()}
                    activeOpacity={0.8}
                    style={{alignSelf:'center',backgroundColor:'#fff',paddingVertical:5,paddingHorizontal:20,marginTop:20,alignItems:'center',justifyContent:'center',borderRadius:4}}
                    disabled={!this.state.email || !this.state.password}
                >
                    <Text style={[conststyles.text,{color:'#000',fontSize:20}]}>Login</Text>
                </TouchableOpacity>
                <Text style={[conststyles.text,{alignSelf:'center',marginTop:30,fontSize:16}]}>Don't have an account?</Text>
                <Text style={[conststyles.text,{alignSelf:'center',textDecorationLine:'underline'}]}
                    onPress={()=>this.props.navigation.navigate('SignUp')}
                >Sign Up!</Text>
            </LinearGradient>
            {/* </ImageBackground> */}
            </ScrollView>}
            </ImageBackground>
        );
    }
}

export default login;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        paddingHorizontal: 40,
        backgroundColor:'rgba(255,255,255,0.5)'
    }
})