import { StyleSheet, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import {MaterialIcons} from '@expo/vector-icons'


const TodoItem = ({item,handleDelete}) => {
  return (
    <TouchableOpacity onPress={()=>handleDelete(item.key)} style={styles.item} >
      <MaterialIcons name='delete' size={18} color={'#333'} />
      <Text >{item.text}</Text>
    </TouchableOpacity>
  )
}

export default TodoItem

const styles = StyleSheet.create({
  item:{
    gap: 10,
    flexDirection: 'row',
    padding:16,
    marginTop:16,
    borderColor:'#bbb',
    borderWidth:1,
    borderStyle:'dashed',
    borderRadius:10
  }
})