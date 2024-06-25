import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice'
import { useNavigation } from '@react-navigation/native'

const BasketIcon = () => {

    const items=useSelector(selectBasketItems);
    const navigation=useNavigation();

    const totalPrice=useSelector(selectBasketTotal);

    if(items.length===0)
    return null;

    return (
        <View className='absolute bottom-10 w-full z-50 '>
            <TouchableOpacity 
            onPress={()=>navigation.navigate('Basket')}
            className='flex-row bg-[#00ccbb] mx-5 p-4 rounded-lg items-center space-x-1'>
                <Text className='text-white font-extrabold text-lg py-1 px-2 bg-green-400 rounded-lg'>{items.length}</Text>
                <Text className='flex-1 text-center text-white font-extrabold text-lg' >View Basket</Text>
                <Text className='text-white text-lg font-extrabold' >৳{totalPrice}.00</Text>
            </TouchableOpacity>
        </View>
    )
}

export default BasketIcon;