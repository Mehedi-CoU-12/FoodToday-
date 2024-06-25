import { SafeAreaView, StyleSheet, View, Text, Image, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import {
    UserIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    AdjustmentsVerticalIcon
} from "react-native-heroicons/outline";

import Catagories from '../components/Catagories';
import FeaturedRow from '../components/FeaturedRow';
import snityClient from '../sanity';
import { useSelector } from 'react-redux';
import { isUserEmpty } from '../features/loginSlice';

const HomeScreen = () => {

    const navigation = useNavigation();

    const [featuredCatagories, setFeaturedCatagories] = useState([]);


    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [])

    useEffect(() => {
        snityClient.fetch(
            `*[_type =='featured']{
                ...,
                restaurants[]->{
                  ...,
                  dishes[]->
              }
            }`
        ).then(data => {
            setFeaturedCatagories(data)
        })
    }, [])

    const isUser=useSelector(isUserEmpty);

    const handleClick=()=>{

        if(isUser)
        {
            navigation.navigate('SignUp')
        }   
        else
        navigation.navigate('LogOut')
    }

    return (
        <SafeAreaView className='bg-gray-200 pt-5 my-8 pb-20'>
            {/* Header */}
            <View className='flex-row pb-3 mx-4 items-center space-x-2 '>
                <Image source={require('../assets/picture/icon.jpg')}
                    className='h-9 w-8 rounded-full'
                />

                <View className='flex-1'>
                    <Text className='font-bold text-gray-600 text-xs'>Deliver Now</Text>
                    <Text className='font-bold text-xl'>Current Location
                        <ChevronDownIcon size={20} color={'#29ab87'} />
                    </Text>
                </View>

                <UserIcon onPress={handleClick} size={35} color={'#29ab87'} />
            </View>

            {/* Search */}
            <View className='flex-row items-center space-x-2 pb-2 mx-4'>
                <View className='flex-row flex-1 space-x-2 bg-gray-200 p-3 items-center'>
                    <MagnifyingGlassIcon size={20} color={"gray"} />
                    <TextInput placeholder='Restaurants and cuisines'
                        keyboardType='default'
                    />
                </View>
                <AdjustmentsVerticalIcon color={'#29ab87'} />
            </View>

            <ScrollView>
                {/* catagories */}
                <Catagories />

                {/* features */}

                {
                    featuredCatagories?.map((catagory) => (
                        <FeaturedRow
                            key={catagory._id}
                            id={catagory._id}
                            title={catagory.name}
                            description={catagory.short_description}
                        />
                    ))
                }
            </ScrollView>

        </SafeAreaView>
    )
}

export default HomeScreen;