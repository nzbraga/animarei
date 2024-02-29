import React from 'react'
import { View, Text, StatusBar } from 'react-native'

import Header from '../../components/Header'

import { styles } from './style'

const Favorites = () => {

  return (
    <View style={styles.container} >
      <StatusBar />
      <Header page='Favorites' />
      <Text>Favorites</Text>

    </View>
  )
}

export default Favorites;