import React,{useState} from 'react';
import { StyleSheet,Text, TextInput, View,Button,FlatList,TouchableOpacity } from 'react-native';
 import { Ionicons } from '@expo/vector-icons';
//import RenderList from "./renderList";

export default function App() {
  const [listitem,setListItem] = useState("");
  const [itemArr,setItemArr] = useState([]);
   
  const addItem = () => {
    if(listitem.length > 0){
        setItemArr([...itemArr,{text:listitem,id:Math.random() * 10000}]);
        setListItem("");
    }
  }
  const deleteItem = id => {
    let newItemArr = itemArr.filter(item => item.id !== id);
    setItemArr([...newItemArr]);
  }
const renderListItem = (item) => {
  return(
    <TouchableOpacity  onPress={() => deleteItem(item.id)}>
    <View style={styles.listitem}>
        <Text style={styles.textStyle}>{item.text}</Text>
       
    </View>  
    </TouchableOpacity>
  )
}

//  const itemListrender = (itemdata) =>{
//    return(
//      <RenderList text={itemdata.item.text} id={itemdata.item.id}  />
//    )
//  }
 
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.title}>Daliy Task App </Text>
      </View>
      <View style={styles.inputContainer}>
       <View style={styles.listitem2}> 
       <TextInput    style={styles.textInput}
       value={listitem} placeholder="write your task" 
       placeholderStyle={{fontSize:23}}
        onChangeText={ text => setListItem(text) } />
       <Ionicons name="md-add-circle" size={35} color="green" onPress={() => addItem()} />
       </View>
      </View>

        <View style={styles.itemlist}>
          <FlatList  data={itemArr}  keyExtractor={item => item.id.toString()}
           renderItem={({item}) =>  renderListItem(item)} />
        </View>
     </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:23,
    backgroundColor:'#4CCBB5'
  },
  listitem2:{
    flexDirection:"row"
  },
  header:{
    backgroundColor:'#ECB61D',
    height:30,
    width:"100%"
  },
  title:{
    fontSize:20,
    textAlign:'center'
  },
  inputContainer:{
    margin:20
  },
  textInput:{
    height: 40,
    width:"90%",
    borderColor: 'gray',
    borderWidth: 1 ,
    paddingTop:15,
    marginBottom:5,
    marginRight:2
  },
  button:{
    paddingLeft:20
  },

  textStyle:{
    fontSize:18,
    backgroundColor:"gray",
    color:'white',
    padding:5,
    margin:5,
  },
  listitem:{
    
    marginLeft:20,
    marginRight:20
  }
});


// return(
//   <View>
//     <View style={styles.itemlist}>
//     <Text style={styles.textStyle}>{item.text}</Text>
//     </View>  
//   </View>
//)
