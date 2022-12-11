import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Screen of Navigation
import Home from './screens/Home';
import Signup from './register/Signup';
import login from './register/Login';
import Login from './register/Login';
import { ImageBackground } from 'react-native';


// Story_Boarding App
//import {ScrollView, Image, View,Text, TouchableOpacity, Alert, Button } from 'react-native';
//import { MaterialIcons } from '@expo/vector-icons';
//import { styles } from './Styles';
//import { Header } from 'react-native/Libraries/NewAppScreen';



const Stack = createNativeStackNavigator();



export default function App ({navigation}) {

  // screen navigation side
  
  return (

    

    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Home" component={Home} 
        options={{
          title:' ',
          headerStyle:{
            backgroundColor:"#ffff",
            
          }
        }

      }
        


        />
         <Stack.Screen name="Signup" component={Signup} options={{title:' Signup '}} 

         
         />
         <Stack.Screen name="Login" component={Login} options={{title:'Login '}} />

      </Stack.Navigator>
    </NavigationContainer>
    
  );
};