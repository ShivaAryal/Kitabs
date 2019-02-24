import React, { Component } from 'react';
import { ScrollView, Modal, TouchableOpacity, StyleSheet, Text, KeyboardAvoidingView,View,ActivityIndicator} from 'react-native';
import { LinearGradient } from 'expo';
import { GRADIENTS,conststyles } from './../../constants'
import FontAwesomeIcon from '@expo/vector-icons/FontAwesome';
import { Sae } from 'react-native-textinput-effects';
import AuthService from './auth.services';
class signUp extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            verifyVisible: false,
            code:''
         };
    }

    onSignUpPress=()=>{
        this.setState({loading:true});
        AuthService.Verify(this.state.email).then(res=>{
            this.setState({loading:false,verifyVisible:true})
        }).catch(err=>{
            this.setState({loading:false})
            alert(err)
        })
    }

    onVerifyPress=()=>{
        this.setState({verifyVisible:false,loading:true})
        const {name,code,email,password,phoneNumber,college} = this.state;
        AuthService.Register(name,code,email,password,phoneNumber,college).then(res=>{
            this.setState({loading:false,name:'',code:'',email:'',password:'',phoneNumber:'',college:''})
            alert('success')
        }).catch(err=>{
            alert('error')
            this.setState({loading:false})
        })
    }

    checkAll=()=>{
        if(this.state.name && this.state.email && this.state.password && this.state.phoneNumber && this.state.college){
            return false;
        }else{
            return true;
        }
    }

    render() {
        return (
            <LinearGradient
                colors={GRADIENTS}
                style={styles.container}>
                {this.state.loading && <View style={{flex:1,backgroundColor:'rgba(255,255,255,0.8)',alignItems:'center',justifyContent:'center'}}>
                    <ActivityIndicator size="large" color="#673AB7"/>
                </View> ||
                <ScrollView contentContainerStyle={{paddingHorizontal:30,paddingTop:20}}>
                <Text style={conststyles.text}>Sign Up</Text>
                <KeyboardAvoidingView style={{borderBottomWidth:1,borderColor:"#9E9E9E",marginTop:0}}>
                <Sae
                    label={<Text style={{color:"#9E9E9E",fontWeight:'100'}}>Name</Text>}
                    iconClass={FontAwesomeIcon}
                    iconName={'pencil'}
                    iconColor={'white'}
                    inputPadding={16}
                    labelHeight={24}
                    borderHeight={2}
                    autoCapitalize={'words'}
                    autoCorrect={false}
                    value={this.state.name}
                    onChangeText={(text)=>this.setState({name:text})}
                />
                </KeyboardAvoidingView>
                <KeyboardAvoidingView style={{borderBottomWidth:1,borderColor:"#9E9E9E",marginTop:10}}>
                <Sae
                    label={<Text style={{color:"#9E9E9E",fontWeight:'100'}}>Email</Text>}
                    iconClass={FontAwesomeIcon}
                    iconName={'pencil'}
                    iconColor={'white'}
                    inputPadding={16}
                    labelHeight={24}
                    // active border height
                    borderHeight={2}
                    // TextInput props
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    value={this.state.email}
                    onChangeText={(text)=>this.setState({email:text})}
                />
                </KeyboardAvoidingView>
                <KeyboardAvoidingView style={{borderBottomWidth:1,borderColor:"#9E9E9E",marginTop:10}}>
                <Sae
                    label={<Text style={{color:"#9E9E9E",fontWeight:'100'}}>Password</Text>}
                    iconClass={FontAwesomeIcon}
                    iconName={'pencil'}
                    iconColor={'white'}
                    inputPadding={16}
                    labelHeight={24}
                    // active border height
                    borderHeight={2}
                    // TextInput props
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    value={this.state.password}
                    onChangeText={(text)=>this.setState({password:text})}
                />
                </KeyboardAvoidingView>
                <KeyboardAvoidingView style={{borderBottomWidth:1,borderColor:"#9E9E9E",marginTop:10}}>
                <Sae
                    label={<Text style={{color:"#9E9E9E",fontWeight:'100'}}>Phone Number</Text>}
                    iconClass={FontAwesomeIcon}
                    iconName={'pencil'}
                    iconColor={'white'}
                    inputPadding={16}
                    labelHeight={24}
                    // active border height
                    borderHeight={2}
                    // TextInput props
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    keyboardType="numeric"
                    value={this.state.phoneNumber}
                    onChangeText={(text)=>this.setState({phoneNumber:text})}
                />
                </KeyboardAvoidingView>
                <KeyboardAvoidingView style={{borderBottomWidth:1,borderColor:"#9E9E9E",marginTop:10}} enabled>
                <Sae
                    label={<Text style={{color:"#9E9E9E",fontWeight:'100'}}>College</Text>}
                    iconClass={FontAwesomeIcon}
                    iconName={'pencil'}
                    iconColor={'white'}
                    inputPadding={16}
                    labelHeight={24}
                    // active border height
                    borderHeight={2}
                    // TextInput props
                    autoCapitalize={'words'}
                    autoCorrect={false}
                    value={this.state.college}
                    onChangeText={(text)=>this.setState({college:text})}
                />
                </KeyboardAvoidingView>
                <TouchableOpacity
                    disabled={()=>this.checkAll()}
                    onPress={()=>this.onSignUpPress()}
                    activeOpacity={0.8}
                    style={{alignSelf:'center',backgroundColor:'#fff',paddingVertical:5,paddingHorizontal:20,marginTop:20,alignItems:'center',justifyContent:'center',borderRadius:4}}
                >
                    <Text style={[conststyles.text,{color:'#000',fontSize:20}]}>Sign Up</Text>
                </TouchableOpacity>
                </ScrollView>}
                <Modal
                    visible={this.state.verifyVisible}
                    animationType="slide"
                    transparent={true}
                    onRequestClose={()=>this.setState({verifyVisible:false})}>
                    <LinearGradient
                        colors={GRADIENTS}
                        style={{flex:1,paddingHorizontal:30}}>
                        <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{flex:1,justifyContent:'center'}}>
                        <Text style={[conststyles.text,{textAlign:'center',fontSize:17}]}>A verification code was sent to your email address. Please enter the verification code below to proceed your registration.</Text>
                        <KeyboardAvoidingView style={{borderBottomWidth:1,borderColor:"#9E9E9E",marginTop:10}}>
                            <Sae
                                label={<Text style={{color:"#9E9E9E",fontWeight:'100'}}>Verification code</Text>}
                                iconClass={FontAwesomeIcon}
                                iconName={'pencil'}
                                iconColor={'white'}
                                inputPadding={16}
                                labelHeight={24}
                                // active border height
                                borderHeight={2}
                                // TextInput props
                                autoCapitalize={'words'}
                                autoCorrect={false}
                                value={this.state.code}
                                keyboardType="numeric"
                                onChangeText={(text)=>this.setState({code:text})}
                            />
                        </KeyboardAvoidingView>
                        <TouchableOpacity
                            disabled={this.state.code.length<6}
                            onPress={()=>this.onVerifyPress()}
                            activeOpacity={0.8}
                            style={{alignSelf:'center',backgroundColor:'#fff',paddingVertical:5,paddingHorizontal:20,marginTop:20,alignItems:'center',justifyContent:'center',borderRadius:4}}
                        >
                            <Text style={[conststyles.text,{color:'#000',fontSize:20}]}>Verify</Text>
                        </TouchableOpacity>
                        <Text style={[conststyles.text,{alignSelf:'center',marginTop:30,fontSize:16}]}>Didn't receive code?</Text>
                        <Text style={[conststyles.text,{alignSelf:'center',textDecorationLine:'underline'}]}>Resend Code!</Text>
                        </ScrollView>
                    </LinearGradient>
                </Modal>
            </LinearGradient>
        );
    }
}

export default signUp;

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})
