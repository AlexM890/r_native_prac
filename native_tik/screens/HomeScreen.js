import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity  } from 'react-native'
import { Video } from 'expo-av'
import { GlobalStyles } from '../styles/global'
// import Button from '../shared/Button'
import Video1 from '../assets/video.mp4'

const HomeScreen = ({ navigation }) => {
    return (
        <View style={GlobalStyles.container}>
            <SafeAreaView>
                <TouchableOpacity>
                    <Video
                        source={Video1}
                        rate={1.0}
                        volume={1.0}
                        isMuted={false}
                        resizeMode="cover"
                        shouldPlay
                        isLooping
                        style={{ flex:1, width: 300 }}
                    />
                </TouchableOpacity>
            </SafeAreaView>
        </View>       
    )
}

export default HomeScreen
