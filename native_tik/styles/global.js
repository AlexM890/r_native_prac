import { StyleSheet } from 'react-native'

 export const GlobalStyles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: 'skyblue',
        alignItems: 'center',
        justifyContent: 'center',
      },
      text: {
          color: 'black'
      },
      rowContainer:{
          flexDirection: "row",
      },
      flex:{
          flex: 2,
          alignItems: "center",
          justifyContent: "space-evenly"
      }
 })