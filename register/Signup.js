import {ScrollView, Image, View,Text, TouchableOpacity, TextInput } from 'react-native';
import { MaterialIcons,MaterialCommunityIcons} from '@expo/vector-icons';

import { styles } from '../Styles';

const Signup = ()=> {
return(
<ScrollView>

<View style={{backgroundColor:"#ffff"}}>
<View style={styles.container}>
<Text  style={styles.signTitle} > Course Selected </Text>

<Text style={styles.signText} >Introduction to user interface design using:Figma </Text>
<Text style={styles.signText} >BY  ALPHATEKGH </Text>

<Text style={{textAlign:'center',fontSize:14, fontWeight:'600',color:'#109ce8'}} >ALPHATEK SCHOOL OF DESIGN </Text>
</View>


 <View style={styles.signup_container}>
<View style={styles.inputAlign}>
<Text style={styles.stext}>First Name</Text>
<TextInput style={styles.inputs} placeholderTextColor={'#000000'}/> 
</View>

<View style={styles.inputAlign}>
<Text style={styles.stext}>Last  Name</Text>
<TextInput style={styles.inputs} placeholder='Last name' placeholderTextColor={'#000000'} /> 
</View>

<View style={styles.inputAlign}>
<Text style={styles.stext}>Address </Text>
<TextInput style={styles.inputs}  placeholderTextColor={'#0c0c0c'} /> 
</View>


<View style={styles.inputAlign}>
<Text style={styles.stext}>Email Address</Text>
<TextInput style={styles.inputs}  keyboardAppearance={'dark'} type="Email"  placeholderTextColor={'#050505'}/> 
</View>


<View style={styles.inputAlign}>
<Text style={styles.stext}>Phone Number</Text>
<TextInput style={styles.inputs} keyboardType={'number-pad'}  placeholderTextColor={'#090909'}/> 
</View>

<View style={styles.inputAlign}>
<Text style={styles.stext}>Name of Course </Text>
<TextInput style={styles.inputs} placeholder='Course Name '  placeholderTextColor={'#090909'}/> 
</View>
</View> 


<View style={styles.btn2}>
 
 <TouchableOpacity style={styles.btn} >
 <Text style={styles.sgup}>Create Accounts </Text>
 </TouchableOpacity>

 <Text style={{margin:10}}> Connect with Alphatek GH for any enquires  </Text>
 </View>
</View>
</ScrollView>
 

 
  )
}

export default Signup;