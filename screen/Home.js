import {React,useState} from "react";
import { Image, StyleSheet, Text, Button, View, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons, Feather, Fontisto, FontAwesome5 } from '@expo/vector-icons';
import { ImageBackground } from "react-native-web";

    const Home = ({navigation}) => {
    return (
      <View style={styles.container}>

         <View style={styles.top}>
              <View style={styles.atas}>
                  <Feather name="home" size={35} color='white' />
                  <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <FontAwesome5 name="user" size={35} color='white' />
                  </TouchableOpacity>
              </View>
            </View>
        <View style={styles.header}>
            <Text style={styles.caption}>Aplikasi Penelusuran Maps dan Referensi Wisata Dunia</Text>
        </View>
        <View style={styles.card}>
        <View style={styles.mapcard}>
        <TouchableOpacity onPress={() => navigation.navigate('Mapview')}>
            <FontAwesome5 name="map" size={50} color="#373737" />
        </TouchableOpacity>
        <Text style={styles.destinasi}>Telusuri Maps</Text>
        </View>
        <View style={styles.viewcard}>
        <TouchableOpacity onPress={() => navigation.navigate('Viewpager')}>
            <FontAwesome5 name="image" size={50} color="#373737" />
        </TouchableOpacity>
        <Text style={styles.destinasi}>Lihat Destinasi</Text>

        </View>
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
    width :"100%",
    backgroundColor: '#F2EDD7',
    overflow: "hidden",
    alignItems: "center",
  },
    top: {
    width: "100%",
    alignItems: 'center',
    padding:40,
    backgroundColor: '#3A6351',
    // justifyContent: "flex-end",
    // flexDirection:'row',
  },
    atas: {
    width: "100%",
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop:30,
    // backgroundColor: 'blue'
    // padding:40,
  },
  header: {
    marginTop: 50,
    
  },
  caption : {
    fontWeight: 'bold',
    fontSize: 24,
    padding: 20,
    textAlign: 'center',

  },
  destinasi:{
    marginTop: 20,
    fontWeight: 'bold',
  },
  card: {
    flexDirection: 'row',
    top: 100,
    padding: 15,
    position: 'center',
    },
  mapcard: {
    alignItems: 'center',
    marginLeft: 10,
  },
  viewcard: {
    alignItems: 'center',
    marginLeft: 80,
  },
  search: {
    color: '#ffff',
    width: '100%',
    height: 40,
    margin: 20,
    backgroundColor: "#181D31",
    paddingTop: 5,
    fontSize: 20,
    borderRadius: 10,
    alignSelf: "center",
    textAlign: "center",
    fontweight: "Bold"
    },
    footer: {
      zIndex: -99,
      width: "100%",
      height: 95,
      top: "44%", 
      backgroundColor: '#3A6351',
    },
    copyright: {
      color : 'white',
      fontWeight: 'bold',
      marginBottom: 45,
      marginTop: 'auto',
      textAlign: 'center',
    }
});

export default Home;