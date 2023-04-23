import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatList() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
        <View style={styles.container}>
            <View style={[styles.card,styles.cardOne]}>
                <Text style={styles.textColor}>Red</Text>
            </View>
            <View style={[styles.card,styles.cardTwo]}>
                <Text style={styles.textColor}>Green</Text>
            </View>
            <View style={[styles.card,styles.cardThree]}>
                <Text style={styles.textColor}>Blue</Text>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        marginTop:35,
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:15
    },
    textColor:{
        color:'white'
    },
    container:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        
    },
    card:{
        
         display:'flex',
         justifyContent:'center',
         alignItems:'center',
         width:100,
         height:100,
         borderRadius:10,
         margin:8
    },
    cardOne:{
          backgroundColor:'red'
    },
    cardTwo:{
        backgroundColor:'green'
    },
     cardThree:{
        backgroundColor:'blue'
     },
   

}) 