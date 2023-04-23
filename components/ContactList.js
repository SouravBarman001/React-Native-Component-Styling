import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native';

export default function ContactList() {
    const users = [
        {
          uid: 1,
          name: 'John Doe',
          status: 'active',
          imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg'
        },
        {
          uid: 2,
          name: 'Jane Smith',
          status: 'away',
          imageUrl: 'https://randomuser.me/api/portraits/women/2.jpg'
        },
        {
          uid: 3,
          name: 'Bob Johnson',
          status: 'active',
          imageUrl: 'https://randomuser.me/api/portraits/men/3.jpg'
        },
        {
          uid: 4,
          name: 'Alice Brown',
          status: 'inactive',
          imageUrl: 'https://randomuser.me/api/portraits/women/4.jpg'
        },
        {
          uid: 5,
          name: 'Mike Lee',
          status: 'active',
          imageUrl: 'https://randomuser.me/api/portraits/men/5.jpg'
        },
        {
          uid: 6,
          name: 'Linda Davis',
          status: 'inactive',
          imageUrl: 'https://randomuser.me/api/portraits/women/6.jpg'
        },
        {
          uid: 7,
          name: 'David Kim',
          status: 'active',
          imageUrl: 'https://randomuser.me/api/portraits/men/7.jpg'
        },
        {
          uid: 8,
          name: 'Emily Wilson',
          status: 'away',
          imageUrl: 'https://randomuser.me/api/portraits/women/8.jpg'
        },
        {
          uid: 9,
          name: 'Peter Smith',
          status: 'active',
          imageUrl: 'https://randomuser.me/api/portraits/men/9.jpg'
        },
        {
          uid: 10,
          name: 'Karen Brown',
          status: 'inactive',
          imageUrl: 'https://randomuser.me/api/portraits/women/10.jpg'
        }
      ];
      
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView
       style={styles.container}
       scrollEnabled={false}
      >
        {users.map(({uid,name,status,imageUrl})=>(
            <View
            key={uid}
            style={styles.userCard}
            >
             <Image source={{
                uri:imageUrl

             }}
             style={styles.userImage}
             />
             <View>
                <Text  style={styles.userName}>{name}</Text>
                <Text  style={styles.userStatus }>{status}</Text>
             </View>
            </View>
        ))}
      </ScrollView>
   
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
    container:{
        paddingHorizontal:16,
        marginBottom:4
    },
    userCard:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        marginBottom:4,
        backgroundColor:'#fc03df',
        borderRadius:30
    },
    userImage:{
        height:60,
        width:60,
        borderRadius: 60/2,
        marginRight:14
    },
    userName:{
        fontSize:16,
        fontWeight:'600',
        color:'#f0e9ef'

    },
    userStatus:{
        fontSize:12,
        fontWeight:'500'
    }
})