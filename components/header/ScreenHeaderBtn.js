import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'

import styles from './screenheader.style'
import { icons } from '../../../constants'

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer}>
      <Image source={iconUrl} resizeMode='cover' style={styles.btnImg(dimension)} />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn
