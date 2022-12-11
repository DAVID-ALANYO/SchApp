import {ScrollView, Image, View,Text, TouchableOpacity, TextInput } from 'react-native';
import { MaterialIcons,MaterialCommunityIcons} from '@expo/vector-icons';

import { styles } from '../Styles';

const Login = ()=> {
return(

<View style={{backgroundColor:"#ffff"}}>
<View style={styles.container}>
<Text  style={styles.signTitle} > Course Selected </Text>

<Text style={styles.signText} >Introduction to user interface design using:Figma </Text>
<Text style={styles.signText} >BY  ALPHATEKGH </Text>

<Text style={{textAlign:'center',fontSize:14, fontWeight:'600',color:'#109ce8'}} >ALPHATEK SCHOOL OF DESIGN </Text>
</View>


 <View style={styles.signup_container}>
<View style={styles.inputAlign}>
<Text style={styles.stext}>Email</Text>
<TextInput style={styles.inputs} placeholderTextColor={'#000000'}/> 
</View>

<View style={styles.inputAlign}>
<Text style={styles.stext} >Password</Text>
<TextInput style={styles.inputs} placeholder='*************************' placeholderTextColor={'#000000'}  secureTextEntry autoFocus={true}/> 
</View>
</View> 


<View style={styles.btn2}>
 
 <TouchableOpacity style={styles.btn} >
 <Text style={styles.sgup}>Login </Text>
 </TouchableOpacity>

 <Text style={{margin:10}}> Connect with Alphatek GH for any enquires  </Text><Text style={{margin:10, color:'#1fa7fb'}}> mail: davidalanyo@alphatekgh.com </Text>
 </View>
</View>
 

 
  )
}

export default Login;