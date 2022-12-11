import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';


// Story_Boarding App
import {ScrollView, Image, View,Text, TouchableOpacity, Alert, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from '../Styles';


export default function App ({navigation}) {

  // screen navigation side
  
  return (

  
<ScrollView 
  horizontal={true}
  pagingEnabled={true}
  showsHorizontalScrollIndicator={false}
  activeDotColor="Red"
  activeDotStyle={{with:20,height:8}}
  
  Sc
  
  
  >



 <View style={styles.one} >
 <Image style={styles.img} source={require('../image/2.png')}/>

 <View style={styles.container}>
 <Text style={styles.mainTitles}> G C T U  E.Library </Text>
 <Text style={styles.text}>
 Reconciling my academic background as a classicist with my profession & passion for software and technology makes for some interesting musings.What better way to convey my love for two 
  codify a list of Latin phrases u
 </Text>
 </View>
 <MaterialIcons style={styles.arrow} name="arrow-forward-ios" size={34} color="black" />
 </View>

 <View style={styles.one}>
 <Image style={styles.img} source={require('../image/23.png')}/>

 <View style={styles.container}>
 <Text style={styles.mainTitles}>Access to Course  Materials </Text>
 <Text style={styles.text}>
 A very old Latin saying meaning “my fault” or simply “my b”. Think git blame. You inadvertently force pushed some changes to main? Didnot feel like commenting your code?
 </Text>
 </View>
 <MaterialIcons style={styles.arrow} name="arrow-forward-ios" size={30} color="black" />
 </View>
 <View style={styles.one}>
 <Image style={styles.img} source={require('../image/232.png')}/>

 <View style={styles.container}>
 <Text style={styles.mainTitles}>Our Support System </Text>
 <Text style={styles.text}>
 For any enquiries kindly call us on the following numbers or connect with us  on 
 0241444599 or 0596064123 
 you can visit WWW.ALPHATEKGH.COM
 </Text>
 </View>
 <MaterialIcons style={styles.arrow} name="arrow-forward-ios" size={30} color="black" />
 </View>
 
<View style={styles.one}> 

 <Image style={styles.img} source={require('../image/2.png')}/>

 <View style={styles.container}>

 </View>

<Text style={styles.mainTitles}> Get Access to Our Portal</Text>

 <View style={styles.btn2}>
 <TouchableOpacity  style={styles.btn} onPress={()=> navigation.push("Signup")}>
<Text style={styles.sgup}>SignUp</Text>
 </TouchableOpacity>

 <TouchableOpacity style={styles.btn} onPress={()=> navigation.navigate('Login')}>
 <Text style={styles.sgup}>Login </Text>
 </TouchableOpacity>
<View style={styles.social}>
 <TouchableOpacity onPress={ ()=> navigation.navigate()}><MaterialCommunityIcons name="facebook" size={32} color="#fff9f9" /></TouchableOpacity>
 <TouchableOpacity><MaterialCommunityIcons name="apple" size={32} color="#fff9f9" /></TouchableOpacity>
 <TouchableOpacity><MaterialCommunityIcons name="google" size={32} color="#fff9f9" /></TouchableOpacity>
 </View>

<Text style={{margin:10}}> GCTU connect to us @ www.Alphatekgh.com  </Text>

 </View>
</View>


 

  </ScrollView>
 
    
  );
};