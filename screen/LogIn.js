import { 
    Image, 
    KeyboardAvoidingView, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    View,
} from 'react-native'
import React, { useState } from 'react'
import client from '../sanity';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setLogin } from '../features/loginSlice';
import Toast from 'react-native-toast-message';

const LogIn = () => {

    const dispatch=useDispatch();

    const [user,setUser]=useState({
        email:'',
        password:'',
    });

    const navigation=useNavigation();

    const handleSubmit=async()=>{
        const {email,password}=user;

        if(email && password)
        {
            const allUser= await client.fetch(`*[_type =='user']{
                ...,
              }`);

            //console.log("Login Page: ",isExist);
            
            let User={}

            allUser.forEach(element =>{
                if(element.email==email){
                    User=element;
                    return ;
                }
            });

            // console.log("Login Page: ",User);

            if(!Object.keys(User).length==0)
            {
                if(password==User.password)
                {
                    // alert('you successfully logged in')
                    Toast.show({type:'success',text1:'Congratulations!!',text2:"you successfully logged in",visibilityTime:1500})
                    dispatch(setLogin(User));
                    navigation.navigate('Home')
                }
                else
                {
                    // alert('password doesn\'t matched');
                    Toast.show({type:'error',text1:'Error!!',text2:"password doesn't matched",visibilityTime:1500})
                }
            }
            else
            {
                // alert("user doesn't Exist")
                Toast.show({type:'error',text1:'Error!!',text2:"user doesn't Exist",visibilityTime:1500})
            }
        }
        else
        {
            // alert('fill up all the data');
            Toast.show({type:'error',text1:'Error!!',text2:"fill up all the data",visibilityTime:1500})
        }

    }

    return (
        <KeyboardAvoidingView className='bg-white flex-1 items-center' >
            <View className='mt-3' >
                <Image
                    source={require('../assets/picture/signUp.gif')}
                    className='h-60 w-60 mt-10'
                />
            </View>
            <View className='mt-10' >
                <Text className='text-3xl font-bold text-gray-600' >Log In</Text>
            </View>
            <View className='mt-8' >
                <TextInput 
                value={user.email}
                onChangeText={(text)=>setUser({...user,email:text})}
                className='h-8 w-48 border-2  rounded-lg border-gray-400 px-2 mb-3'
                placeholder='Email' />

                <TextInput 
                value={user.password}
                secureTextEntry
                onChangeText={(text)=>setUser({...user,password:text})}
                className='h-8 w-48 border-2  rounded-lg border-gray-400 px-2 mb-2'
                placeholder='password' />
            </View>

            <TouchableOpacity onPress={handleSubmit} className='h-8 w-48 m-4  flex justify-center bg-green-600 rounded-lg'>
                <Text className='text-center text-white font-extrabold'>Log In</Text>
            </TouchableOpacity>

            <View className='flex flex-row' >
                <Text>Don't have an Account?</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('SignUp')} >
                    <Text className='text-green-600 font-bold' >Sign Up</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default LogIn
