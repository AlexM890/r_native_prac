import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const Button = ({bColor="#0275d8", tColor="white", text="button", width="100%", height=30, paddingX=10, margin=5, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{backgroundColor: bColor, width: width, height:height, paddingTop: 5, paddingLeft: paddingX, paddingRight: paddingX, textAlign:"center", margin: margin, borderRadius: 2}}>
                <Text style={{color: tColor}}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Button
