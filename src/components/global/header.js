import React, { Component } from 'react';
import { View,TouchableOpacity,Text,Modal } from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons';
import { Divider } from 'react-native-paper';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            menuVisible : false
         };
    }
    render() {
        const title = this.props.title;
        return (
            <View style={{margin:8,flexDirection:'row',justifyContent:'space-between',marginHorizontal:10,alignItems:'center'}}>
                <TouchableOpacity style={{alignItems:'center',justifyContent:'center',padding:5,borderRadius:30}}
                    onPress={()=>this.props.navigation.openDrawer()}
                >
                    <Icon name="menu" color="#fff" size={25}/>
                </TouchableOpacity>
                <Text style={{color:'#fff',fontSize:23}}>{title}</Text>
                <TouchableOpacity style={{alignItems:'center',justifyContent:'center',padding:5,borderRadius:30}}
                    onPress={()=>this.setState({menuVisible:true})}
                >
                    <Icon name="more-vert" color="#fff" size={25}/>
                </TouchableOpacity>
                <Modal
                    transparent={true}
                    visible={this.state.menuVisible}
                    onRequestClose={()=>this.setState({menuVisible:false})}>
                    <TouchableOpacity style={{backgroundColor:'rgba(0,0,0,0.3)',flex:1}}
                        onPress={()=>this.setState({menuVisible:false})}>
                        <View style={{position:'absolute',right:20,top:15,backgroundColor:'#fff'}}>
                        <TouchableOpacity style={{padding:10,paddingHorizontal:30, color:'#000',alignItems:'center'}}>
                            <Text style={{color:'#000',fontSize:16}}>About us</Text>
                        </TouchableOpacity>
                        <Divider/>
                        <TouchableOpacity style={{padding:10,paddingHorizontal:30,color:'#000',alignItems:'center'}}>
                            <Text style={{color:'#000',fontSize:16}}>Contact Us</Text>
                        </TouchableOpacity>
                        <Divider/>
                        <TouchableOpacity style={{padding:10,paddingHorizontal:30,color:'#000',alignItems:'center'}}>
                            <Text style={{color:'#000',fontSize:16}}>Report</Text>
                        </TouchableOpacity>
                        <Divider/>
                        <TouchableOpacity style={{padding:10,paddingHorizontal:30,color:'#000',alignItems:'center'}}>
                            <Text style={{color:'#000',fontSize:16}}>Help</Text>
                        </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                </Modal>
            </View>
        );
    }
}

export default Header;