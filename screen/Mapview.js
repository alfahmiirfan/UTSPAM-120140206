import React from 'react';
import MapView from 'react-native-maps';
import { Image, StyleSheet, Text, Button, View, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons, Feather, Fontisto, FontAwesome5, AntDesign } from '@expo/vector-icons';

const Mapview = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.top}>
        <TouchableOpacity
              style={styles.button}
              onPress={ () => navigation.goBack()}
            >
            <AntDesign name="arrowleft" size={35} color='white' />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <FontAwesome5 name="user" size={30} color='white' />
            </TouchableOpacity>
          </View>
        <View style={styles.header}>
            <Text style={styles.caption}>Telusuri Lokasi Destinasi Wisata Impianmu pada Maps</Text>
        </View>
      <View style={styles.mapCard}>
        <MapView style={styles.map} />
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
    overflow: "hidden",
    alignItems: "center",
  },
  top: {
    width: "100%",
    alignItems: 'center',
    padding:40,
    paddingVertical:55,
    backgroundColor: '#3A6351',
    flexDirection:'row',
    justifyContent: 'space-between',
    // justifyContent: "flex-end",
    // flexDirection:'row',
  },
map: {
  width: '100%',
  height: '100%',
},

mapCard: {
  marginTop:20,
  width: '90%',
  height: '50%',
},
header: {
  marginTop: 10,
  
},
caption : {
  fontWeight: 'bold',
  fontSize: 24,
  padding: 20,
  textAlign: 'center',

},

footer: {
  zIndex: -99,
  width: "100%",
  height: 90,
  top: "10%", 
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

export default Mapview;
