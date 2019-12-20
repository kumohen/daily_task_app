import React from 'react';
import { StyleSheet,Text, TextInput, View,TouchableOpacity } from 'react-native';


const RenderList = (props) => {
    
    // let listitem = [];
    // for(var key in props.data.item){
    //     listitem.push({text:props.data.item.text,id:props.data.item.id})
    // }
 
    return (
        <TouchableOpacity onPress={() => console.log("okk")}>
        <View >
            <Text style={styles.textStyle}>{props.text}</Text>
        </View>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    textStyle:{
        backgroundColor:'gray',
        margin:3,
        color:'white',
        fontSize:17
    }
}) 
export default RenderList;