import React, { Component } from 'react';
import { View, ScrollView,Image,Text } from 'react-native';
import {List,Divider} from 'react-native-paper';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        const navigate = this.props.navigation.navigate;
        return (
            <ScrollView>
                <Image source={require('./../../../assets/books.jpg')} style={{height:150,width:'100%'}} />
                <List.Item
                    style={{height:50,justifyContent:'center'}}
                    title={<Text style={{color:'#673AB7'}}>Home</Text>}
                    left={() => <List.Icon icon="home" color="#673AB7" style={{marginLeft:0,marginRight:0}}/>}
                    onPress={()=>navigate('Home')}
                />
                <Divider style={{marginHorizontal:10,backgroundColor:'#673AB7'}}/>
                <List.Item
                    style={{height:50,justifyContent:'center'}}
                    title={<Text style={{color:'#673AB7'}}>Posts</Text>}
                    left={() => <List.Icon icon="gradient" color="#673AB7" style={{marginLeft:0,marginRight:0}}/>}
                    onPress={()=>navigate('Posts')}
                />
                <Divider style={{marginHorizontal:10,backgroundColor:'#673AB7'}}/>
                <List.Item
                    style={{height:50,justifyContent:'center'}}
                    title={<Text style={{color:'#673AB7'}}>My Requests</Text>}
                    left={() => <List.Icon icon="send" color="#673AB7" style={{marginLeft:0,marginRight:0}}/>}
                    onPress={()=>navigate('Posts')}
                />
                <Divider style={{marginHorizontal:10,backgroundColor:'#673AB7'}}/>
                <List.Item
                    style={{height:50,justifyContent:'center'}}
                    title={<Text style={{color:'#673AB7'}}>Add Books</Text>}
                    left={() => <List.Icon icon="add-circle" color="#673AB7" style={{marginLeft:0,marginRight:0}}/>}
                    // onPress={()=>navigate('Home',{props:'props'})}
                />
                <Divider style={{marginHorizontal:10,backgroundColor:'#673AB7'}}/>
                <List.Item
                    style={{height:50,justifyContent:'center'}}
                    title={<Text style={{color:'#673AB7'}}>My Books List</Text>}
                    left={() => <List.Icon icon="library-books" color="#673AB7" style={{marginLeft:0,marginRight:0}}/>}
                    // onPress={()=>navigate('Home',{props:'props'})}
                />
                <Divider style={{marginHorizontal:10,backgroundColor:'#673AB7'}}/>
                <List.Item
                    style={{height:50,justifyContent:'center'}}
                    title={<Text style={{color:'#673AB7'}}>My Profile</Text>}
                    left={() => <List.Icon icon="account-circle" color="#673AB7" style={{marginLeft:0,marginRight:0}}/>}
                    // onPress={()=>navigate('Home',{props:'props'})}
                />
                <Divider style={{marginHorizontal:10,backgroundColor:'#673AB7'}}/>
                <List.Item
                    style={{height:50,justifyContent:'center'}}
                    title={<Text style={{color:'#673AB7'}}>Settings</Text>}
                    left={() => <List.Icon icon="settings" color="#673AB7" style={{marginLeft:0,marginRight:0}}/>}
                    // onPress={()=>navigate('Home',{props:'props'})}
                />
                <Divider style={{marginHorizontal:10,backgroundColor:'#673AB7'}}/>
                <List.Item
                    style={{height:50,justifyContent:'center'}}
                    title={<Text style={{color:'#673AB7'}}>Log Out</Text>}
                    left={() => <List.Icon icon="power-settings-new" color="#673AB7" style={{marginLeft:0,marginRight:0}}/>}
                    // onPress={()=>navigate('Home',{props:'props'})}
                />
                <Divider style={{marginHorizontal:10,backgroundColor:'#673AB7'}}/>
            </ScrollView>
        );
    }
}

export default Menu;
