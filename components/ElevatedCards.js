import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.container}>
          <View style={[styles.card,styles.cardElevated]}>
              <Image style={styles.cardImage} source={require('../assets/images/microscope.png')} />
          </View>
          <View style={[styles.card,styles.cardElevated]}>
              <Text>me</Text>
          </View>
          <View style={[styles.card,styles.cardElevated]}>
              <Text>to</Text>
          </View>
          <View style={[styles.card,styles.cardElevated]}>
              <Text>scroll</Text>
          </View>
          <View style={[styles.card,styles.cardElevated]}>
              <Text>more...</Text>
          </View>
          <View style={[styles.card,styles.cardElevated]}>
              <Text>emoji</Text>
          </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        marginTop:14,
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:15
    },
    container:{
      padding:8
    },
    card:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        width:120,
        height:120,
        margin:8,
        borderRadius:8
    },
    cardElevated:{
        backgroundColor:'rgb(30,129,176)',
        elevation:4,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor:'yellow',
        shadowOpacity:0.4,
        shadowRadius:2
    },
    cardImage:{
        width:'50%',
        height:'50%'
    }
})   