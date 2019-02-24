import React, { Component } from 'react';
import { View, ScrollView,Text,StyleSheet,TouchableOpacity,Modal } from 'react-native';
import { LinearGradient } from 'expo';
import { GRADIENTS} from './../../constants';
import Header from './../global/header';
class Home extends Component {
    static navigationOptions = {
        drawerLabel: () => null,
        drawerLockMode:'unlocked'
    }
    constructor(props) {
        super(props);
        this.state = { 
            visible : false
         };
    }
    render() {
        return (
            <LinearGradient
                colors={GRADIENTS}
                style={styles.container}>
                <Header navigation={this.props.navigation} title="Home"/>
                <Text style={{margin:7,color:'#fff',fontSize:17}}>Recent Posts</Text>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <TouchableOpacity style={styles.cardView} activeOpacity={1}
                    onPress={()=>this.setState({visible:true})} >
                        <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5,alignItems:'center'}} >
                            <Text style={{fontWeight:'500',fontSize:17}}>Engineering Mathematics-I</Text>
                            <Text style={{color:'#455A64'}}>2019-02-25</Text>
                        </View>
                        <Text style={{color:'#607D8B'}}>I have note of Engineering Mathematics I costing price 150.</Text>
                        <Text style={{fontSize:17,marginVertical:5}}>Price : 50</Text>
                        <Text style={{color:'#000',fontSize:16}}>Thapathali Campus</Text>
                        <View style={{marginVertical:10,flexDirection:'row',justifyContent:'space-between',marginHorizontal:20}}>
                            <TouchableOpacity style={{padding:7,paddingHorizontal:20,borderRadius:5,backgroundColor:'#EEEEEE'}}>
                                <Text style={styles.buttonText}>Email</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>Message</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>Call</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cardView} activeOpacity={1}>
                        <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5,alignItems:'center'}} >
                            <Text style={{fontWeight:'500',fontSize:17}}>Engineering Mathematics-I</Text>
                            <Text style={{color:'#455A64'}}>2019-02-25</Text>
                        </View>
                        <Text style={{color:'#607D8B'}}>I have note of Engineering Mathematics I costing price 150.</Text>
                        <Text style={{fontSize:17,marginVertical:5}}>Price : 50</Text>
                        <Text style={{color:'#000',fontSize:16}}>Thapathali Campus</Text>
                        <View style={{marginVertical:10,flexDirection:'row',justifyContent:'space-between',marginHorizontal:20}}>
                            <TouchableOpacity style={{padding:7,paddingHorizontal:20,borderRadius:5,backgroundColor:'#EEEEEE'}}>
                                <Text style={styles.buttonText}>Email</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>Message</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>Call</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cardView} activeOpacity={1}>
                        <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5,alignItems:'center'}} >
                            <Text style={{fontWeight:'500',fontSize:17}}>Engineering Mathematics-I</Text>
                            <Text style={{color:'#455A64'}}>2019-02-25</Text>
                        </View>
                        <Text style={{color:'#607D8B'}}>I have note of Engineering Mathematics I costing price 150.</Text>
                        <Text style={{fontSize:17,marginVertical:5}}>Price : 50</Text>
                        <Text style={{color:'#000',fontSize:16}}>Thapathali Campus</Text>
                        <View style={{marginVertical:10,flexDirection:'row',justifyContent:'space-between',marginHorizontal:20}}>
                            <TouchableOpacity style={{padding:7,paddingHorizontal:20,borderRadius:5,backgroundColor:'#EEEEEE'}}>
                                <Text style={styles.buttonText}>Email</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>Message</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>Call</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cardView} activeOpacity={1}>
                        <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5,alignItems:'center'}} >
                            <Text style={{fontWeight:'500',fontSize:17}}>Engineering Mathematics-I</Text>
                            <Text style={{color:'#455A64'}}>2019-02-25</Text>
                        </View>
                        <Text style={{color:'#607D8B'}}>I have note of Engineering Mathematics I costing price 150.</Text>
                        <Text style={{fontSize:17,marginVertical:5}}>Price : 50</Text>
                        <Text style={{color:'#000',fontSize:16}}>Thapathali Campus</Text>
                        <View style={{marginVertical:10,flexDirection:'row',justifyContent:'space-between',marginHorizontal:20}}>
                            <TouchableOpacity style={{padding:7,paddingHorizontal:20,borderRadius:5,backgroundColor:'#EEEEEE'}}>
                                <Text style={styles.buttonText}>Email</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>Message</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>Call</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cardView} activeOpacity={1}>
                        <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5,alignItems:'center'}} >
                            <Text style={{fontWeight:'500',fontSize:17}}>Engineering Mathematics-I</Text>
                            <Text style={{color:'#455A64'}}>2019-02-25</Text>
                        </View>
                        <Text style={{color:'#607D8B'}}>I have note of Engineering Mathematics I costing price 150.</Text>
                        <Text style={{fontSize:17,marginVertical:5}}>Price : 50</Text>
                        <Text style={{color:'#000',fontSize:16}}>Thapathali Campus</Text>
                        <View style={{marginVertical:10,flexDirection:'row',justifyContent:'space-between',marginHorizontal:20}}>
                            <TouchableOpacity style={{padding:7,paddingHorizontal:20,borderRadius:5,backgroundColor:'#EEEEEE'}}>
                                <Text style={styles.buttonText}>Email</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>Message</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>Call</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cardView} activeOpacity={1}>
                        <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5,alignItems:'center'}} >
                            <Text style={{fontWeight:'500',fontSize:17}}>Engineering Mathematics-I</Text>
                            <Text style={{color:'#455A64'}}>2019-02-25</Text>
                        </View>
                        <Text style={{color:'#607D8B'}}>I have note of Engineering Mathematics I costing price 150.</Text>
                        <Text style={{fontSize:17,marginVertical:5}}>Price : 50</Text>
                        <Text style={{color:'#000',fontSize:16}}>Thapathali Campus</Text>
                        <View style={{marginVertical:10,flexDirection:'row',justifyContent:'space-between',marginHorizontal:20}}>
                            <TouchableOpacity style={{padding:7,paddingHorizontal:20,borderRadius:5,backgroundColor:'#EEEEEE'}}>
                                <Text style={styles.buttonText}>Email</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>Message</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>Call</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cardView} activeOpacity={1}>
                        <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5,alignItems:'center'}} >
                            <Text style={{fontWeight:'500',fontSize:17}}>Engineering Mathematics-I</Text>
                            <Text style={{color:'#455A64'}}>2019-02-25</Text>
                        </View>
                        <Text style={{color:'#607D8B'}}>I have note of Engineering Mathematics I costing price 150.</Text>
                        <Text style={{fontSize:17,marginVertical:5}}>Price : 50</Text>
                        <Text style={{color:'#000',fontSize:16}}>Thapathali Campus</Text>
                        <View style={{marginVertical:10,flexDirection:'row',justifyContent:'space-between',marginHorizontal:20}}>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>Email</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>Message</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>Call</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
                <Modal
                    transparent={true}
                    onRequestClose={()=>this.setState({visible:false})}
                    visible={this.state.visible}>
                    <TouchableOpacity style={{flex:1,backgroundColor:'rgba(0,0,0,0.5)',justifyContent:'center',paddingHorizontal:20}} activeOpacity={1}
                    onPress={()=>this.setState({visible:false })}>
                    <TouchableOpacity style={{backgroundColor:'#fff',padding:20,paddingBottom:0,alignSelf:'center'}} activeOpacity={1}>
                        <Text style={{marginBottom:5}}>Subject : Engineering Mathematics - I</Text>
                        <Text style={{marginBottom:5}}>Post Date : 2019-02-25</Text>
                        <Text style={{marginBottom:5}}>Description : I have note of Engineering Mathematics I costing price 150</Text>
                        <Text style={{marginBottom:5}}>Price : 50</Text>
                        <Text style={{marginBottom:5}}>College : Thapathali Campus</Text>
                        <View style={{marginVertical:10,flexDirection:'row',justifyContent:'space-between',marginHorizontal:20}}>
                            <TouchableOpacity style={{padding:7,paddingHorizontal:20,borderRadius:5,backgroundColor:'#EEEEEE'}}>
                                <Text style={styles.buttonText}>Email</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>Message</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>Call</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                    </TouchableOpacity>
                </Modal>
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
    },
    button:{
        padding:7,
        paddingHorizontal:20,
        borderRadius:5,
        backgroundColor:'#EEEEEE'
    },
    buttonText:{
        color:'#673AB7'
    }
})