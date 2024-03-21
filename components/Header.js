import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    height:80,
    paddingTop:30,
    backgroundColor:'coral'
  },
  title:{
    textAlign:'center',
    color:'white',
    fontSize:20,
    fontWeight:'bold'
  }
})
export default Header
