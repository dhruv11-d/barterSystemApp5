import * as React from 'react';
import {View,Text,TextInput,TouchableOpacity,StyleSheet,KeyboardAvoidingView, ToastAndroid, Alert} from 'react-native';
import firebase from 'firebase';
import db from '../config';
import MyHeader from '../screens/AppHeader';

export default class HomeScreen extends React.Component{
    constructor(){
        super();
        this.state={
            name:'',
            reason:'',
            userId:firebase.auth().currentUser.email
        }
    }
    submit=(Name,Reason)=>{
            var userId = this.state.userId
            db.collection('UsersRequest').add({
                'Item' : Name,
                'Reason' : Reason,
                'UserId' : userId
            })
            this.setState({
                name:'',
                reason:''
            })
            //ToastAndroid('Submitted',ToastAndroid.SHORT);
            Alert.alert("Submitted Successfully");
        }

    render(){
        return(
            <View>

             
            <TouchableOpacity style={styles.list}>
                <Text style={{paddingLeft:80}}>Fill Details</Text>
                <Text>*plz fill the details to exchange an item*</Text>
            </TouchableOpacity>

              <KeyboardAvoidingView behavior="padding"enabled>
                  <View>
                         <TextInput
                             placeholder='Item Name'
                             keyboardType='ascii-capable'
                             onChangeText={(text)=>{
                                           this.setState({
                                           name:text
                                                   })
                                          }}
                             style={styles.item}
                         />
                </View>
                
                <View>
                         <TextInput
                             placeholder='Reason'
                             onChangeText={(text)=>{
                                           this.setState({
                                           reason:text
                                                        })
                                           }}
                             multiline={true}
                             style={styles.reason}
                         />
                </View>

                <TouchableOpacity onPress={()=> {this.submit(this.state.name,this.state.reason)}}
                style={styles.submit}
                >
                     <Text style={{textAlign:'center'}}>Submit</Text>
                </TouchableOpacity>

                </KeyboardAvoidingView>

            </View>
        )
    }
}

const styles = StyleSheet.create({
        item:{
            justifyContent:'center',
            alignSelf:'center',
            marginTop:190,
            borderColor:'black',
            borderRadius:3,
            borderWidth:2,
            backgroundColor:'#52FF99',
            width:240,
            height:40,
            fontSize:20,
            paddingLeft:4
        },
        reason:{
            backgroundColor:'#52FF99',
            justifyContent:'center',
            alignSelf:'center',
            textAlign:'left',
            borderWidth:2,
            borderColor:'black',
            borderRadius:3,
            width:240,
            marginTop:20,
            fontSize:20,
            paddingLeft:4,
            height:51
        },
        submit:{
            backgroundColor:'yellow',
            borderRadius:10,
            borderWidth:2,
            borderColor:'black',
            justifyContent:'center',
            alignSelf:'center',
            width:150,
            marginTop:50,
            height:30
        },
        back:{
            backgroundColor:'#A55F66'
        },
        list:{
            backgroundColor:'#88FC33',
            marginTop:50,
            justifyContent:'center',
            alignSelf:'center',
            borderRadius:5,
            width:240,
            paddingLeft:10
        }
})