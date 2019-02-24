import React, { Component } from 'react';
import { View, ScrollView,Text,StyleSheet,TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo';
import { GRADIENTS,conststyles } from './../../constants';
import Icon from '@expo/vector-icons/MaterialIcons';
import Header from './../global/header';
class Home extends Component {
    static navigationOptions = {
        drawerLabel: () => null,
        drawerLockMode:'unlocked'
    }
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <LinearGradient
                colors={GRADIENTS}
                style={styles.container}>
                <Header navigation={this.props.navigation} title="Posts"/>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.cardView}>
                        <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5,alignItems:'center'}} >
                            <Text style={{fontWeight:'500',fontSize:17}}>Engineering Mathematics-I</Text>
                            <Text style={{color:'#455A64'}}>2019-02-25</Text>
                        </View>
                        <Text style={{color:'#607D8B'}}>I have note of Engineering Mathematics I costing price 150.</Text>
                        <Text style={{fontSize:17,marginVertical:5}}>Price : 50</Text>
                        <Text style={{color:'#000',fontSize:16}}>Thapathali Campus</Text>
                        <View style={{marginVertical:10,flexDirection:'row',justifyContent:'space-between',marginHorizontal:20}}>
                            <TouchableOpacity style={{padding:7,paddingHorizontal:20,borderRadius:5,backgroundColor:'#673AB7'}}>
                                <Text style={{color:'#fff'}}>Email</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{padding:7,paddingHorizontal:20,borderRadius:5, backgroundColor:'#8E24AA'}}>
                                <Text style={{color:'#fff'}}>Message</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{padding:7,paddingHorizontal:20,borderRadius:5, backgroundColor:'#673AB7'}}>
                                <Text style={{color:'#fff'}}>Call</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.cardView}>
                        <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5,alignItems:'center'}} >
                            <Text style={{fontWeight:'500',fontSize:17}}>Engineering Mathematics-I</Text>
                            <Text style={{color:'#455A64'}}>2019-02-25</Text>
                        </View>
                        <Text style={{color:'#607D8B'}}>I have note of Engineering Mathematics I costing price 150.</Text>
                        <Text style={{fontSize:17,marginVertical:5}}>Price : 50</Text>
                        <Text style={{color:'#000',fontSize:16}}>Thapathali Campus</Text>
                        <View style={{marginVertical:10,flexDirection:'row',justifyContent:'space-between',marginHorizontal:20}}>
                            <TouchableOpacity style={{padding:7,paddingHorizontal:20,borderRadius:5,backgroundColor:'#673AB7'}}>
                                <Text style={{color:'#fff'}}>Email</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{padding:7,paddingHorizontal:20,borderRadius:5, backgroundColor:'#8E24AA'}}>
                                <Text style={{color:'#fff'}}>Message</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{padding:7,paddingHorizontal:20,borderRadius:5, backgroundColor:'#673AB7'}}>
                                <Text style={{color:'#fff'}}>Call</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.cardView}>
                        <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5,alignItems:'center'}} >
                            <Text style={{fontWeight:'500',fontSize:17}}>Engineering Mathematics-I</Text>
                            <Text style={{color:'#455A64'}}>2019-02-25</Text>
                        </View>
                        <Text style={{color:'#607D8B'}}>I have note of Engineering Mathematics I costing price 150.</Text>
                        <Text style={{fontSize:17,marginVertical:5}}>Price : 50</Text>
                        <Text style={{color:'#000',fontSize:16}}>Thapathali Campus</Text>
                        <View style={{marginVertical:10,flexDirection:'row',justifyContent:'space-between',marginHorizontal:20}}>
                            <TouchableOpacity style={{padding:7,paddingHorizontal:20,borderRadius:5,backgroundColor:'#673AB7'}}>
                                <Text style={{color:'#fff'}}>Email</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{padding:7,paddingHorizontal:20,borderRadius:5, backgroundColor:'#8E24AA'}}>
                                <Text style={{color:'#fff'}}>Message</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{padding:7,paddingHorizontal:20,borderRadius:5, backgroundColor:'#673AB7'}}>
                                <Text style={{color:'#fff'}}>Call</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.cardView}>
                        <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5,alignItems:'center'}} >
                            <Text style={{fontWeight:'500',fontSize:17}}>Engineering Mathematics-I</Text>
                            <Text style={{color:'#455A64'}}>2019-02-25</Text>
                        </View>
                        <Text style={{color:'#607D8B'}}>I have note of Engineering Mathematics I costing price 150.</Text>
                        <Text style={{fontSize:17,marginVertical:5}}>Price : 50</Text>
                        <Text style={{color:'#000',fontSize:16}}>Thapathali Campus</Text>
                        <View style={{marginVertical:10,flexDirection:'row',justifyContent:'space-between',marginHorizontal:20}}>
                            <TouchableOpacity style={{padding:7,paddingHorizontal:20,borderRadius:5,backgroundColor:'#673AB7'}}>
                                <Text style={{color:'#fff'}}>Email</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{padding:7,paddingHorizontal:20,borderRadius:5, backgroundColor:'#8E24AA'}}>
                                <Text style={{color:'#fff'}}>Message</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{padding:7,paddingHorizontal:20,borderRadius:5, backgroundColor:'#673AB7'}}>
                                <Text style={{color:'#fff'}}>Call</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.cardView}>
                        <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5,alignItems:'center'}} >
                            <Text style={{fontWeight:'500',fontSize:17}}>Engineering Mathematics-I</Text>
                            <Text style={{color:'#455A64'}}>2019-02-25</Text>
                        </View>
                        <Text style={{color:'#607D8B'}}>I have note of Engineering Mathematics I costing price 150.</Text>
                        <Text style={{fontSize:17,marginVertical:5}}>Price : 50</Text>
                        <Text style={{color:'#000',fontSize:16}}>Thapathali Campus</Text>
                        <View style={{marginVertical:10,flexDirection:'row',justifyContent:'space-between',marginHorizontal:20}}>
                            <TouchableOpacity style={{padding:7,paddingHorizontal:20,borderRadius:5,backgroundColor:'#673AB7'}}>
                                <Text style={{color:'#fff'}}>Email</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{padding:7,paddingHorizontal:20,borderRadius:5, backgroundColor:'#8E24AA'}}>
                                <Text style={{color:'#fff'}}>Message</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{padding:7,paddingHorizontal:20,borderRadius:5, backgroundColor:'#673AB7'}}>
                                <Text style={{color:'#fff'}}>Call</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.cardView}>
                        <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5,alignItems:'center'}} >
                            <Text style={{fontWeight:'500',fontSize:17}}>Engineering Mathematics-I</Text>
                            <Text style={{color:'#455A64'}}>2019-02-25</Text>
                        </View>
                        <Text style={{color:'#607D8B'}}>I have note of Engineering Mathematics I costing price 150.</Text>
                        <Text style={{fontSize:17,marginVertical:5}}>Price : 50</Text>
                        <Text style={{color:'#000',fontSize:16}}>Thapathali Campus</Text>
                        <View style={{marginVertical:10,flexDirection:'row',justifyContent:'space-between',marginHorizontal:20}}>
                            <TouchableOpacity style={{padding:7,paddingHorizontal:20,borderRadius:5,backgroundColor:'#673AB7'}}>
                                <Text style={{color:'#fff'}}>Email</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{padding:7,paddingHorizontal:20,borderRadius:5, backgroundColor:'#8E24AA'}}>
                                <Text style={{color:'#fff'}}>Message</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{padding:7,paddingHorizontal:20,borderRadius:5, backgroundColor:'#673AB7'}}>
                                <Text style={{color:'#fff'}}>Call</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.cardView}>
                        <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5,alignItems:'center'}} >
                            <Text style={{fontWeight:'500',fontSize:17}}>Engineering Mathematics-I</Text>
                            <Text style={{color:'#455A64'}}>2019-02-25</Text>
                        </View>
                        <Text style={{color:'#607D8B'}}>I have note of Engineering Mathematics I costing price 150.</Text>
                        <Text style={{fontSize:17,marginVertical:5}}>Price : 50</Text>
                        <Text style={{color:'#000',fontSize:16}}>Thapathali Campus</Text>
                        <View style={{marginVertical:10,flexDirection:'row',justifyContent:'space-between',marginHorizontal:20}}>
                            <TouchableOpacity style={{padding:7,paddingHorizontal:20,borderRadius:5,backgroundColor:'#673AB7'}}>
                                <Text style={{color:'#fff'}}>Email</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{padding:7,paddingHorizontal:20,borderRadius:5, backgroundColor:'#8E24AA'}}>
                                <Text style={{color:'#fff'}}>Message</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{padding:7,paddingHorizontal:20,borderRadius:5, backgroundColor:'#673AB7'}}>
                                <Text style={{color:'#fff'}}>Call</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </LinearGradient>  
        );
    }
}

export default Home;

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    cardView:{
        backgroundColor:'#fff',
        marginTop:5,
        marginHorizontal:5,
        padding:5,
        borderRadius:5
    }
})