import { TouchableOpacity, Text } from 'react-native'
import React from 'react'
import colors from '../../constansts/colors'

export default function Button({
    onPress= () => {},
    text = '-',
    containerStyle = {},
    textStyle
}:{
    onPress: () => void,
    text : string,
    containerStyle ?: any,
    textStyle?: any
}) {
  return (
    <TouchableOpacity style= {[{width :100, height: 50, borderWidth: 1, justifyContent :'center', alignItems :'center'}, containerStyle]} onPress={onPress}>
      <Text style={[{color: colors.black}, textStyle]}>{text}</Text>
    </TouchableOpacity>
  )
}