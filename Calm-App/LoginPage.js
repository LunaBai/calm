import React, {useCallback} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  TextInput, 
  TouchableOpacity,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Favicon from './assets/bananas.svg';
import google from './assets/google.png';
import facebook from './assets/facebook.png';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

// SplashScreen is the 'launch page', the first screen users see when opening the app
// preventautohideAsynch prevents splashscreen from hiding until the fonts are loaded.
SplashScreen.preventAutoHideAsync();
  
const LoginScreen = () => {

    // The fonts to be loaded and used
    const [fontsLoaded] = useFonts({
        'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
        'YsabeauOffice-Black': require('./assets/fonts/YsabeauOffice-Black.ttf'),
        'YsabeauOffice-Italic': require('./assets/fonts/YsabeauOffice-Italic.ttf'),
        'DancingScript-Bold': require('./assets/fonts/DancingScript-Bold.ttf')
      });
    
    // after fonts have loaded, hide the splashscreen and and display the page
    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);
    
    if (!fontsLoaded) {
        return null;
    } else {
        SplashScreen.hideAsync();
    }

    // Return the components of the LoginScreen for users to see
    return (
        <SafeAreaView style={{
            flex: 1, 
            justifyContent: 'center'}}
            >
            <View style={{
                paddingHorizontal:25}}
                >
            <View 
            style={{alignItems: 'center'}} 
            onLayout={onLayoutRootView}
            >
                <Image source={Favicon} style = {{height:60, width:90}}/>
            </View>    
            <Text style={{
                fontFamily: 'Roboto-Bold', 
                fontSize:25, 
                fontWeight:"300", 
                color:"#333", 
                marginBottom:30}}
                >
            Login
            </Text>
{/* flexDirection is used to put @ and Email ID on the same line */}
            <View 
            style={{
                flexDirection:'row', 
                borderBottomColor:"#ccc", 
                borderBottomWidth:1, 
                paddingBottom:8, 
                marginBottom:25
                }}> 
                <MaterialIcons 
                name = 'alternate-email' 
                size={20} 
                color = "#666" 
                style={{marginRight:5}} 
                />
                <TextInput 
                placeholder='Email ID' 
                style={{flex:1, paddingVertical:0}}
                keyboardType='email-address'
                />
            </View>
            
            <View 
            style={{
                flexDirection:'row', 
                borderBottomColor:"#ccc", 
                borderBottomWidth:1, 
                paddingBottom:8, 
                marginBottom:25
                }}> 
                <Ionicons 
                name = 'ios-lock-closed-outline' 
                size={20} 
                color = "#666" 
                style={{marginRight:5}} 
                />
                <TextInput 
                placeholder='Password' 
                style={{ flex:1, paddingVertical:0}}
                secureTextEntry={true}
                />
                {/* TouchableOpacity creates a clickable button that can lead to another page if needed */}
                <TouchableOpacity onPress={() => {}}>
                    <Text style={{color:'#AD40AF', fontWeight:'700'}}>Forgot?</Text>   
                </TouchableOpacity>
            </View>

            <TouchableOpacity 
                onPress={() => {}} 
                style=
                {{backgroundColor:'#AD40AF', 
                padding:20,
                marginBottom:30,
                borderRadius:10,
                }}>
                <Text 
                style={{
                    textAlign:'center', 
                    fontWeight:'700', 
                    fontSize:16, 
                    color:'white'}}>
                    Login
                </Text>
            </TouchableOpacity>

            <Text style=
            {{textAlign:'center', 
            color:'#666', 
            marginBottom:30}}>
            Or, login with...
            </Text>

            <View style={{flexDirection:'row', justifyContent:'space-evenly', marginBottom:30}}>
            <TouchableOpacity 
            onPress={() => {}} 
            style={{
                borderColor:'#ddd', 
                borderWidth:2, 
                borderRadius:10, 
                paddingHorizontal:30, 
                paddingVertical:10,}}>
                <Image source={google} style = {{height:26, width:26}}/>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => {}} 
            style={{
                borderColor:'#ddd', 
                borderWidth:2, 
                borderRadius:10, 
                paddingHorizontal:30, 
                paddingVertical:10,}}>
                <Image source={facebook} style = {{height:24, width:24}}/>
            </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row', justifyContent:'center', marginBottom:30}}>
            <Text>New to App?</Text>
            <TouchableOpacity onPress={() => {}}>
            <Text style ={{color:'#AD40AF', fontWeight:'700'}}> Register</Text>
            </TouchableOpacity>
            </View>

            </View>
        </SafeAreaView>
    )
}
export default LoginScreen;