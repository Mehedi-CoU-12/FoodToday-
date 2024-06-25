import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../features/basketSlice';
import { XCircleIcon } from 'react-native-heroicons/solid';
import { urlFor } from '../sanity';


const BasketScreen = () => {

    const navigation=useNavigation();
    const restaurant=useSelector(selectRestaurant);
    const items=useSelector(selectBasketItems);
    
    const dispath=useDispatch();
    const Total=useSelector(selectBasketTotal)
    const [groupedItemsInBasket,setGroupedItemsInBasket]=useState([]);

    // using for group all the data something like map;
    useEffect(()=>{
        const groupedItem=items.reduce((results,item)=>{
            (results[item.id]=results[item.id] || []).push(item)
            return results
        },{});

        setGroupedItemsInBasket(groupedItem);
    },[items])

    // console.log(groupedItemsInBasket);

    return (
        <SafeAreaView className='bg-white flex-1 mt-6' >
            <View className='flex-1 bg-gray-100'>
                <View className='p-5 border-b border-[#00ccbb] bg-white shadow-xs ' >
                    <View>
                        <Text className='text-lg font-bold text-center' >Basket</Text>
                        <Text className='text-center text-gray-400' >{restaurant.title}</Text>
                    </View>
                    
                    <TouchableOpacity
                    onPress={()=>navigation.goBack()}
                    className='rounded-full bg-gray-100 absolute top-3 right-5'
                    >
                        <XCircleIcon color={'#00ccbb'} height={50} width={50} />
                    </TouchableOpacity>
                </View>

                <View className='flex-row items-center space-x-4 px-4 py-3 bg-white my-5' >
                    <Image 
                        source={require('../assets/picture/icon.jpg')} 
                        className='h-7 w-7 p-4 rounded-full bg-gray-300'
                    />
                    <Text className='flex-1 font-bold' >Deliver in 15-20 min</Text>
                    <TouchableOpacity>
                        <Text className='text-[#00ccbb]' >Change</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView className='divide-y divide-gray-400' >
                    {
                        Object.entries(groupedItemsInBasket).map(([keys,item])=>(
                            <View key={keys} className='flex-row items-center space-x-3 bg-white py-2 px-5'>
                                <Text className='text-[#00ccbb]' > {item.length}x</Text>
                                <Image
                                    source={{
                                        uri:urlFor(item[0]?.image).url()
                                    }}
                                    className='h-12 w-12 rounded-full'
                                />
                                <Text className='flex-1' >{item[0]?.name}</Text>
                                <Text className='text-gray-600' >৳{item[0]?.price}</Text>
                                <TouchableOpacity>
                                    <Text 
                                    className='text-xs text-[#00ccbb]' 
                                    onPress={()=>dispath(removeFromBasket({id:keys}))}
                                    >Remove</Text>
                                </TouchableOpacity>
                            </View>
                        ))  
                    }
                </ScrollView>

                <View className='p-5 bg-white mt-5 space-y-4 '>
                    <View className='flex-row justify-between' >
                        <Text className='text-gray-400' >Subtotal</Text>
                        <Text className='text-gray-400' >৳ {Total} </Text>
                    </View>

                    <View className='flex-row justify-between' >
                        <Text className='text-gray-400' >Delivary Fee</Text>
                        <Text className='text-gray-400' >৳ 30</Text>
                    </View>

                    <View className='flex-row justify-between' >
                        <Text className='text-gray-400' >Order Total</Text>
                        <Text className='font-extrabold' >৳ {Total+70}</Text>
                    </View>

                    <TouchableOpacity 
                    onPress={()=>navigation.navigate('prepare')}
                    className='rounded-lg bg-[#00ccbb] p-4' >
                        <Text className='text-center text-white font-bold text-xl' >Place Order</Text>
                    </TouchableOpacity>
                    
                </View>

            </View>
        </SafeAreaView>
    )
}

export default BasketScreen