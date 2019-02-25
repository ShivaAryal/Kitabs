import React, { Component } from 'react';
import { View,ScrollView,TouchableOpacity,StyleSheet } from 'react-native';
import { LinearGradient } from 'expo';
import { GRADIENTS} from './../../constants';
import Header from './../global/header';
class MyPosts extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <LinearGradient
                colors={GRADIENTS}
                style={styles.container}>
                <Header navigation={this.props.navigation} title="My Posts"/>
                <ScrollView showsVerticalScrollIndicator={false}>
                </ScrollView>
            </LinearGradient>
        );
    }
}

export default MyPosts;

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})