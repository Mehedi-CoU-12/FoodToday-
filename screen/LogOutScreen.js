import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, setLogOut } from '../features/loginSlice';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

const LogOutScreen = () => {

    const dispatch=useDispatch();
    const user=useSelector(selectUser)
    const navigation=useNavigation();

    console.log("LogOut page: ",user);

    const handleClick=()=>{
        dispatch(setLogOut({}));
        // alert('Log out successfully')
        Toast.show({type:'success',text1:'Congratulations!!',text2:"Log out successfully",visibilityTime:1000})
        navigation.navigate('Home')
    }

  return (
    <SafeAreaView className='bg-white flex-1 items-center justify-center' >
        <View >
            <View className='mx-2' >
                <View className='flex-row'><Text className='text-black font-bold' >Name: </Text><Text className='text-green-400 font-extrabold' >{user.name}</Text></View>

                <View className='flex-row'><Text className='text-black font-bold' >Email: </Text><Text className='text-green-400 font-extrabold' >{user.email}</Text></View>
                
                <View className='flex-row'><Text className='text-black font-bold' >Address: </Text><Text className='text-green-400 font-extrabold' >{user.address}</Text></View>
            </View>
            <TouchableOpacity 
            onPress={handleClick}
            className='mt-8 h-8 w-36 bg-red-700 rounded-lg flex justify-center items-center' >
                <Text className='text-white font-extrabold'>Log Out</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default LogOutScreen