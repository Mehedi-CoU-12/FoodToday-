import { View, Text, TouchableOpacity, Image } from 'react-native'
import { StarIcon } from 'react-native-heroicons/solid'
import { PhoneArrowDownLeftIcon } from 'react-native-heroicons/solid'
import React, { useLayoutEffect } from 'react'
import { urlFor } from '../sanity'
import { useNavigation } from '@react-navigation/native'

const RestaurantCard = ({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat
}) => {

    const navigation = useNavigation();

    // console.log(imgUrl)

    return (

        <TouchableOpacity
            //passing value one page to another
            onPress={() => {
                navigation.navigate('Restaurant', {
                    id,
                    imgUrl,
                    title,
                    rating,
                    genre,
                    address,
                    short_description,
                    dishes,
                    long,
                    lat
                })
            }}
            className='bg-white mr-3 shadow '>
            <Image source={{
                uri: urlFor(imgUrl).url(),
            }}
                className='h-36 w-64 rounded-sm'
            />

            <View className='px-3 pb-4' >
                <Text className='font-bold text-lg pt-2' >{title} </Text>
                <View className='flex-row items-center space-x-1'>
                    <StarIcon color={'green'} opacity={0.5} size={25} />
                    <Text className='text-xs text-gray-500' >
                        <Text className='text-green-500'>{rating}</Text>
                        . {genre}
                    </Text>
                </View>

                <View className='flex-row space-x-1 items-center    ' >
                    <PhoneArrowDownLeftIcon color={'gray'} size={22} opacity={0.4} />
                    <Text className='text-xs text-gray-500' >Nearby . {address} </Text>
                </View>

            </View>
        </TouchableOpacity>
    )
}

export default RestaurantCard