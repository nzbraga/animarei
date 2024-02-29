import React, { useEffect, useState } from 'react'
import { View, Pressable, Text, Image, Alert } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styles from './style';

 
const Header = ( {page} ) => {

  const navigation = useNavigation()

  const [user, setUser] = useState({})

  const createTwoButtonAlert = () =>
  Alert.alert('Alert Title', 'My Alert Msg', [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]);
/*
  function handleLogOut() {
    const logUser = logOut().then(() => {
      {logUser ? navigation.navigate("Login") : console.log("Erro ao Deslogar")}
    })
  }
  /*
  function handleUserData(){
    loadUserData().then(res=>{
      setUser(res)
    })
  } 
  
  */
  function handleUserData(){
    
    setUser({name:'NzBraga',})
  }
  useEffect(() => {
    handleUserData() 
  }, [])

  return (

    <View style={styles.header}>

      <View style={styles.user}>
        <Image
          style={styles.image}
          source={require('../img/icon-anima.jpg')}
        />
        <Pressable style={styles.headerNameBtn}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.headerName}>{user.name}</Text>
        </Pressable>
      </View>

      <View style={styles.nav}>

        <Pressable
         style={page === 'Home' ?   styles.btnPlus : styles.btn}
          onPress={() => navigation.navigate('Home')}>
          <Text>🏠</Text>
        </Pressable>

        <Pressable
           style={page === 'Favorites' ?   styles.btnPlus : styles.btn}
          onPress={() => navigation.navigate('Favorites' )}>
          <Text>♥️</Text>
        </Pressable>

        <Pressable
           style={page === 'Friends' ?   styles.btnPlus : styles.btn}
          onPress={() => navigation.navigate('Friends' )}>
          <Text>👥</Text>
        </Pressable>

        <Pressable
          style={styles.btn}
          onPress={createTwoButtonAlert} 
          >
          <Text>🚪</Text>
        </Pressable>

      </View>

    </View>

  )
}

export default Header