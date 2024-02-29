import React from 'react'
import { View, Text, StatusBar } from 'react-native'

import Header from '../../components/Header'
import API from '../../components/Api'

import { styles } from './style'

const Home = () => {
    
  return (
    <View style={styles.container} >
      <StatusBar/>
      <Header page = 'Home'/>
      <API/>     

    </View>
  )
}

export default Home;