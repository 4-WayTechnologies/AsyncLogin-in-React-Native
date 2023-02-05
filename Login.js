import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, {useEffect, useState } from "react";
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
const Login = () => {


    const [email,setEmail]=useState()
const [password,setPassword]=useState()
    const LoginBtn=()=>{
      var data = JSON.stringify({
        "Password": password,
        "Email": email,
        
      });
      const url= 'https://*******************************/login'
      axios({
        method:'post',
        url:url,
        headers: { 
          'Content-Type': 'application/json'
        },
        data :data
      }).then(response=>{
       
            // Function to save the value in AsyncStorage
        if(response.status==200){
          AsyncStorage.setItem('token',JSON.stringify(response.data)).then(res=>{console.log("first")})
          
        }
      })
    }
  return (
    <View>
    <View>
    <Text style={styles.titleText}>
    AsyncStorage in React Native to Store Data in Session
  </Text>
    <Text style={styles.loginText}>Login</Text>
            <TextInput placeholder='Email' style={styles.TextInput} value={email} onChangeText={(prev)=>setEmail(prev)}/>
            <TextInput placeholder='Password' style={styles.TextInput} value={password} onChangeText={(prev)=>setPassword(prev)} secureTextEntry={true}/>
            <TouchableOpacity style={styles.button} onPress={()=>LoginBtn()}>
            <Text style={styles.Login_btn}>Login</Text>
            </TouchableOpacity>
    </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    loginText:{
        color:'#000000',
        fontSize:22,
        alignSelf:'center',
        marginTop:10
      },TextInput:{
        width:340,
        height:40,
        borderWidth:1,
        borderColor:'#000000',
        marginHorizontal:30,
        marginTop:20
      },button:{
        width:300,
        height:50,
        backgroundColor:'blue',
        marginHorizontal:50,
        marginTop:20,
        alignItems:'center',
        justifyContent:'center'
      },Login_btn:{
        color:'#ffffff',fontSize:20
      },
      titleText: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 20,
      },
})