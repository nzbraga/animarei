import React from 'react'
import { View, Text, StatusBar } from 'react-native'

import Header from '../../components/Header'

import { styles } from './style'

const Friends = () => {

  return (
    <View style={styles.container} >
      <StatusBar />
      <Header page='Friends' />
      <Text>Friends</Text>

    </View>
  )
}

export default Friends;