import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { createContext, useEffect, useState } from "react";
import axios from 'axios';
import Logout from './Logout';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Login from './Login';
export const ContextApi=createContext()

const App = () => {
const [data,setData]=useState(null)

  // Function to get the value from AsyncStorage
 
useEffect(()=>{
  AsyncStorage.getItem('token').then(res=>{
    setData(res)
   })

},[data])
  return (
    <ContextApi.Provider value={{data,setData}}>
    
    <View>
     {data==null?<Login/>:<Logout/>}
            
  </View>
  
    </ContextApi.Provider>
    
  )
}

export default App

const styles = StyleSheet.create({
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
})