import React from "react";
import { TouchableOpacity, SafeAreaView, ScrollView, Image, View, FlatList, StyleSheet, Text } from 'react-native';
import { MaterialIcons, AntDesign, FontAwesome5 } from '@expo/vector-icons';



const Profile = ({ navigation }) => {
 
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <View style={styles.top}>
            <TouchableOpacity
              style={styles.button}
              onPress={ () => navigation.goBack()}
            >
            <AntDesign name="arrowleft" size={24} color="#373737" />
            </TouchableOpacity>
            {/* <Text style={styles.heading}>Hiling.id</Text> */}
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <FontAwesome5 name="home" size={24} color="#373737" />
            </TouchableOpacity>
          </View>
          
      </View>
      <View style={styles.detail}>
         <Text style={styles.memutar}>Profile Mahasiswa</Text>
            <Image
                style={{width: 160, height:200, borderRadius:10, marginTop:25}}
                source={require('../assets/irfan.jpeg')}
            />
        <Text style={styles.teks}>M Alfahmi Irfan</Text>
        <Text style={styles.teks}>120140206</Text>
        <Text style={styles.teks}>Teknik Informatika</Text>
        <Text style={styles.teks}>Institut Teknologi Sumatera</Text>
        
      </View>
      <View style={styles.footer}>
              <Text style={styles.copyright}>Copyright M Alfahmi Irfan - 120140206</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2EDD7',
  },
  header:{
    width:'100%',
    padding:20,
    height: 130,
    
  },
  detail:{
    margin: "auto",
    width: '100%',
    borderRadius:10,
    flexDirection:'column',
    alignItems:'center'
  },
  heading: {
    color: '#ffff',
    fontSize: 30,
    fontWeight : "bold",
    
  },
  memutar:{
    textAlign:'center',
    fontSize :18,
    fontWeight : "bold"
  },
teks:{
  top:10,
  marginTop:15,
  textAlign:'center',
  fontSize :13,
  backgroundColor:'#3A6351',
  color: 'white',
  fontWeight: 'bold',
  padding:10,
  width : 280,
  borderRadius:10,
  shadowColor: "#000",
  shadowOffset: {
	width: 0,
	height: 3,

},
shadowOpacity: 0.1,
shadowRadius: 3.65,

elevation: 3,
  },
  pencipta:{
    textAlign:'center',
    fontSize :14,
    color : '#626262',
    marginBottom : 50
  },
  heading2: {
    color: "#373737",
    fontSize: 12,
    // fontWeight : "bold",
    textAlign: 'right',
    top : 4,
    left: -10
  },
  top: {
    top : 24,
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"space-between",
    marginBottom:10,
    // backgroundColor:'red',
    padding:15
  },
  Image: {
    width:10,
  },
  item: {
    backgroundColor: '#ffff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius:10,
  },
  footer: {
    top : 230,
    zIndex: -99,
    width: "100%",
    height: 90,
    backgroundColor: '#3A6351',
  },
  copyright: {
    color : 'white',
    fontWeight: 'bold',
    marginBottom: 50,
    marginTop: 'auto',
    textAlign: 'center',
  }
});

export default Profile;