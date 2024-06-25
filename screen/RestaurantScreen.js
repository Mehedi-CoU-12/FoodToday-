import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { urlFor } from '../sanity';
import {
    ArrowLeftCircleIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    StarIcon,
    AdjustmentsVerticalIcon,
    PhoneArrowDownLeftIcon,
    QuestionMarkCircleIcon
} from 'react-native-heroicons/solid';
import DishRow from '../components/DishRow';
import BasketIcon from '../components/BasketIcon';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '../features/restaurantSlice';

const RestaurantScreen = () => {

    const navigation = useNavigation();
    const dispatch=useDispatch();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [])

    useEffect(()=>{
        dispatch(setRestaurant({
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
        }))
    },[dispatch])

    const { params: {
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
    } } = useRoute();

    return (
        <>
            <BasketIcon />
            <ScrollView>
                <View className='relative'>

                    <Image source={{
                        uri: urlFor(imgUrl).url()
                    }}
                        className='w-full h-56 bg-gray-300 p-4'
                    />

                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        className='absolute top-14 left-4 bg-gray-300 rounded-full' >
                        <ArrowLeftCircleIcon size={40} color={'#29ab87'} opacity={0.6} />
                    </TouchableOpacity>
                </View>

                <View className='bg-white' >
                    <View className='px-4 pt-4' >
                        <Text className='text-3xl font-bold ' >{title} </Text>

                        <View className='flex-row space-x-2 my-1'>
                            <View className='flex-row items-center space-x-1'>
                                <StarIcon size={20} color={'green'} opacity={0.4} />
                                <Text className='text-s text-bg-gray-500' >
                                    <Text className='text-green-500' >{rating}</Text>.{genre}
                                </Text>
                            </View>

                            <View className='flex-row items-center space-x-1'>
                                <PhoneArrowDownLeftIcon size={20} color={'gray'} opacity={0.4} />
                                <Text className='text-s text-bg-gray-500'>Nearby . {address}</Text>
                            </View>

                        </View>

                        <Text className='text-gray-500 mt-2 pb-4'>{short_description} </Text>
                    </View>

                    {/* <TouchableOpacity className='flex-row items-center space-x-2 p-4 border-y border-gray-300'>
                        <QuestionMarkCircleIcon size={22} color={'gray'} />
                        <Text className='text-md font-bold pl-2 flex-1'>Have a food allergy</Text>
                        <ChevronDownIcon color={'green'} />
                    </TouchableOpacity> */}
                </View>

                <View className='pb-36'>
                    <Text className='font-bold px-4 pt-6 text-xl mb-3'>Manu</Text>
                    {/* dishes */}
                    {
                        dishes?.map(dish => (
                            <DishRow
                                key={dish._id}
                                id={dish._id}
                                name={dish.name}
                                description={dish.shot_description}
                                price={dish.price}
                                image={dish.image}
                            />
                        ))
                    }
                </View>
            </ScrollView>

        </>
    )
}

export default RestaurantScreen