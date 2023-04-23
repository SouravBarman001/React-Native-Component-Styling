import { Image, Linking, StyleSheet, Text, TouchableOpacity,Pressable, View } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink){
        Linking.openURL(websiteLink);
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card,styles.elevatedCard]}>
         <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
            Hubble Spotlights a Swirling Spiral
            </Text>
         </View>
         <Image
           source={{
            uri:'https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/hubble_ugc_678_potw2316a.jpg',

           }}
           style={styles.cardImage}
         />
         <View style={styles.bodyContainer}>
              <Text numberOfLines={3}>
              Barred spiral galaxies have a bar-shaped structure of stars that extends from opposite sides of the galaxy’s central bulge. Bars form in spiral galaxies when the orbits of stars near the galaxy’s heart become unstable and stretched out. As their orbits lengthen, they create a bar. The bar grows as their gravity captures more and more nearby stars. UGC 678’s bar is faint. It is visible as a diagonal group of stars that stretches from the lower left (7 o’clock) to the upper right (1 o’clock) of the galaxy’s core.
              </Text>
         </View>
         <View style={styles.footerContainer}>
            
                <Pressable style={styles.button} onPress={()=> openWebsite('https://www.nasa.gov/image-feature/goddard/2023/hubble-spotlights-a-swirling-spiral')}>
                    <Text style={styles.text}>Read More</Text>
                </Pressable>
            
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
    card:{
        
        borderRadius:10,
        width:350,
        Height:360,
        marginTop:12,
        marginHorizontal:16,
        marginBottom:20
    },
    elevatedCard:{
        backgroundColor:'#f2f1ec',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor:'#333',
        shadowOpacity:0.4
    },
    headingContainer:{
     height:40,
     flexDirection:'row',
     justifyContent:'center',
     alignItems:'center'
    },
    headerText:{
      fontSize:16,
      fontWeight:500
    },
    cardImage:{   
        marginTop:10,
        height:190
    },
    bodyContainer:{
        padding:10,
        
    },
    footerContainer:{
        padding:8
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 7,
        elevation: 3,
        backgroundColor: '#91b4c7',
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },

})