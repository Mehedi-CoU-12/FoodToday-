import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import { XMarkIcon } from 'react-native-heroicons/outline';
import * as Progress from 'react-native-progress';
import MapView, { Marker } from 'react-native-maps';



const DeliveryScreen = () => {

    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);

    // console.log('--------------------------------------------------')
    // console.log(restaurant.lat)
    // console.log(restaurant.long)
    // console.log(restaurant.title)

    return (
        <View className='bg-[#00ccbb] flex-1 pt-6' >
            <SafeAreaView className='z-50' >
                <View className='flex-row justify-between items-center p-5'>
                    <TouchableOpacity>
                        <XMarkIcon color={'white'} size={30} onPress={() => navigation.navigate('Home')} />
                    </TouchableOpacity>
                    <Text className='font-light text-white text-lg' >Order Help</Text>
                </View>

                <View className='bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md' >

                    <View className='flex-row justify-between' >
                        <View>
                            <Text className='text-lg text-gray-400' >Estimated Arrival</Text>
                            <Text className='text-4xl font-bold' >15-20 Minutes</Text>
                        </View>
                        <Image
                            source={require('../assets/picture/Delivery.gif')}
                            className='w-20 h-20 rounded-xl '
                        />
                    </View>

                    <View className='pb-2' >
                        <Progress.Bar size={30} color='#00ccbb' indeterminate={true} />
                    </View>
                    <Text className='text-pink-500 font-medium'>Your Order At {restaurant.title} is Being Prepared</Text>
                </View>
            </SafeAreaView>

            <MapView
                initialRegion={{
                    latitude:restaurant.lat,
                    longitude:restaurant.long,
                    latitudeDelta:0.009,
                    longitudeDelta:0.009,
                }}
                mapType='mutedStandard'
                className='flex-1 mt-10'
            >
                <Marker
                    coordinate={{
                        latitude:restaurant.lat,
                        longitude:restaurant.long
                    }}
                    title={restaurant.title}
                    description={restaurant.shot_description}
                    identifier='origin'
                    pinColor={'#00ccbb'}
                />
            </MapView>
            
            <SafeAreaView className='bg-white flex-row items-center space-x-5 h-28' >
                <Image 
                    source={require('../assets/picture/icon.jpg')}
                    className='h-12 w-12 bg-gray-300 p-4 rounded-full ml-5'
                 />
                 <View className='flex-1' >
                    <Text className='text-lg' >Mehedi Hasan</Text>
                    <Text className='text-gray-400' >Your Rider</Text>
                 </View>
                 
                 <Text className='text-lg text-[#00ccbb] mr-5 font-bold ' >Call</Text>
            </SafeAreaView>
        </View>
    )
}


export default DeliveryScreen