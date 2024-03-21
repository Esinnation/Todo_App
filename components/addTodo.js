import { StyleSheet, Text,View, TextInput, } from 'react-native'
import React,{ useState } from 'react'

const AddTodo = ({handleSubmit}) => {
  const [text, setText] = useState('')
  const changeHandler=(e)=>{
    setText(e)
  }
  return (
    <View> 
      <TextInput
      style={styles.textInput}
        placeholder='new todo...'
        onChangeText={changeHandler}
        value={text}
      />
      <Text 
        style={styles.addTodo} 
        onPress={()=>{
          handleSubmit(text)
          setText('')
        }}
      >
        Add todo
      </Text>
    </View>
  )
}

export default AddTodo

const styles = StyleSheet.create({
  textInput:{
    marginBottom:10,
    paddingHorizontal:8,
    paddingVertical:6,
    borderBottomWidth:1,
    borderBottomColor:'#ddd'
  },
  addTodo:{
    backgroundColor:'coral',
    paddingVertical:10,
    borderRadius:10,
    textAlign:'center',
    color:'white',
    fontSize:18

  }
})