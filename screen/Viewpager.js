import React from 'react';
import PagerView from 'react-native-pager-view';
import { Image, StyleSheet, Text, Button, View, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons, Feather, Fontisto, FontAwesome5, AntDesign } from '@expo/vector-icons';

const Viewpager = ({navigation}) => {
  return (
    <View style={{ flex: 1 }}>
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
            <Text style={styles.caption}>Referensi Destinasi Wisata</Text>
            <Text style={styles.swipe}>(swipe kekiri dan kanan)</Text>
        </View>
       <PagerView style={styles.viewPager} initialPage={0}>
        <View style={styles.page} key="1">
        <Text style={styles.caption}>Bali, Indonesia</Text>
        <Image
          style={{width: 350, height:400, borderRadius:10}}
          source={require('../assets/bali.jpg')}
        />
        <Text style={styles.caption}>Page 1</Text>
        </View>
        <View style={styles.page} key="2">
        <Text style={styles.caption}>Reykjavik, Iceland</Text>
        <Image
          style={{width: 350, height:400, borderRadius:10}}
          source={require('../assets/iceland.jpg')}
        />
        <Text style={styles.caption}>Page 2</Text>
        </View>
        <View style={styles.page} key="3">
        <Text style={styles.caption}>New York, USA</Text>
        <Image
          style={{width: 350, height:400, borderRadius:10}}
          source={require('../assets/newyork.jpeg')}
        />
        <Text style={styles.caption}>Page 3</Text>
        </View>
        <View style={styles.page} key="4">
        <Text style={styles.caption}>Roma, Italia</Text>
        <Image
          style={{width: 350, height:400, borderRadius:10}}
          source={require('../assets/roma.jpg')}
        />
        <Text style={styles.caption}>Page 4</Text>
        </View>
        <View style={styles.page} key="5">
        <Text style={styles.caption}>Piramida, Mesir</Text>
        <Image
          style={{width: 350, height:400, borderRadius:10}}
          source={require('../assets/mesir.jpg')}
        />
        <Text style={styles.caption}>Page 5</Text>
        </View>
        
      </PagerView>
      <View style={styles.footer}>
        <Text style={styles.copyright}>Copyright M Alfahmi Irfan - 120140206</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    flex: {
    flex: 1,
    width :"100%",
    overflow: "hidden",
    alignItems: "center",
    backgroundColor: '#F2EDD7',
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
  header: {
    marginTop: 10,
    
  },
  caption : {
    fontWeight: 'bold',
    fontSize: 24,
    padding: 20,
    textAlign: 'center',
  
  },
  swipe: {
    textAlign: 'center',
    marginTop: -15,
  },
  viewPager: {
    flex: 1,
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
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
footer: {
  zIndex: -99,
  width: "100%",
  height: 90,
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

export default Viewpager;