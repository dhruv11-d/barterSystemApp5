import * as React from 'react';
import {View,Text,FlatList} from 'react-native';
import firebase from 'firebase';
import db from '../config';

export default class Exchange extends React.Component{
    constructor(){
        super();
        this.state={
            
        }
        this.requestRef = null
    }
   
    getRequestedItemsList=()=>{
        this.requestRef = db.collection("UsersRequest").onSnapshot((snapshot)=>{
            var allBooks = snapshots.docs.map(document=>document.data())
            this.setState({
                allBooks:allBooks
            })
        })
    }


    keyExtractor=(item,index)=>indextoString();

    renderItem=({item,i})=>{
        return(
            <ListItem
            key={i}
            title={item.item_name}
            subtitle={item.description}
            titleStyle={{color:'black', fontWeight:'bold'}}
            rightElement={
                <TouchableOpacity>
                    <Text>Exchange</Text>
                </TouchableOpacity>
            } 
            bottomDivider
            />
        )
    }

    render(){
        return(
            <View style={{justifyContent:'center',marginTop:30}}>
                <FlatList
                data={this.state.allBooks}
                renderItem={this.renderItem}
                keyExtractor={this.keyExtractor}
                onEndReached={this.getRequestedItemsList}
                />
            </View>
        )
    }
}