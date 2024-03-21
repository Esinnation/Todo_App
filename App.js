import React,{useState} from 'react';
import { StyleSheet, Text, View,FlatList,SafeAreaView,Alert,TouchableWithoutFeedback,Keyboard } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/addTodo';
// import Sandbox from './components/sandbox';

export default function App() {
  const [todos, setTodos] = useState([])
  const handleDelete=(key) => {
    setTodos((prevState)=>{
      return prevState.filter(todo=>todo.key != key)
    })
  }
  const handleSubmit =(text)=>{
    if(text.length <= 3){
      Alert.alert('OOPS!','Todos must be over 4 chars long',[
        {text:'Understood',onPress:()=>console.log('alertclosed')}
      ])
    }else{
      setTodos((prevState)=>[{text,key:Math.random().toString()},...prevState])

    }

  }
  return (
    // <Sandbox/>
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <View style={styles.vie}>
          <Header/>
          <View style={styles.content}>
            <AddTodo handleSubmit={handleSubmit}/>
            <View style={styles.list}>
              {!todos.length ? <Text style={styles.empty}>No Tasks.Please add a Task</Text>:(
                <FlatList 
                  data={todos}
                  renderItem={({item})=><TodoItem item={item} handleDelete={handleDelete}/>}
                />
              )}
            </View>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  vie:{
    backgroundColor: '#fff',
    flex: 1,
  },
  content:{
    padding:40,
    flex:1
  },
  list:{
    flex:1,
    marginTop:20,
  },
  empty:{
    color:'red',
    fontSize:18
  }
});
