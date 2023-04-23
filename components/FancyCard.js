import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending places:</Text>
        <View style={[styles.card,styles.cardElevated]}>
            <Image
            source={{
                uri:'https://www.planetware.com/wpimages/2020/08/switzerland-best-cities-zurich.jpg'

            }}
            style={styles.cardImage}
            />
            <View style={styles.cardBody}>
                <Text style={styles.cardTitle}>Zurich</Text> 
                <Text style={styles.cardLabel}>Largest City in Switzerland</Text>
                <Text style={styles.cardDesc}>The largest city in Switzerland, Zurich is a major contemporary art and shopping destination. Important artworks are displayed in the Kunsthaus and the Rietberg Museum, while those who consider shopping an art can hone their skills along Bahnhofstrasse and Niederdorf.
                </Text>
                <Text style={styles.cardFooter}>12 minutes away</Text>

            </View>
        </View>
    </View> 
  )
}

const styles = StyleSheet.create({
    headingText:{
        marginTop:15,
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:15
    },
    card:{
        width:350,
        Height:360,
        borderRadius:6,
        marginTop:12,
        marginHorizontal:16
    },
    cardElevated:{
        // shadow and other properties
        backgroundColor:'#FFFFFF',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1
        }

    },
    cardImage:{
       
        height:180,
        marginBottom:8,
        borderTopLeftRadius:6,
        borderTopRightRadius:6
    },
    cardBody:{
        display:'flex',
        flexGrow:1,
        paddingHorizontal:12
    },
    cardTitle:{
       
        fontSize:22,
        fontWeight:'bold',
        marginBottom:6
    },
    cardLabel:{
        fontSize:16,
        marginBottom:6
    },
    cardDesc:{
        color:'#242b2e',
        fontSize:14,
        marginBottom:12 ,
        marginTop:6,
        flexShrink:1
    },
    cardFooter:{
        marginBottom:10
    }
})