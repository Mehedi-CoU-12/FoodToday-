import { View, Text, SafeAreaView, ProgressBarAndroidBase } from 'react-native'
import React, { useEffect } from 'react'
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';

const Preparing = () => {

    const navigation=useNavigation();

    useEffect(()=>{

        setTimeout(() => {
            navigation.navigate('Delivary')
        }, 4000);

    },[])

    return (
        <SafeAreaView className='bg-[#00ccbb] flex-1 items-center justify-center' >
            <Animatable.Image
                source={require('../assets/picture/orderLoading.gif')}
                animation={'slideInUp'}
                iterationCount={1}
                className='h-96 w-96'
            />

            <Animatable.Text
                animation="slideInUp" iterationCount={1}
                className='text-lg my-10 text-white font-bold text-center'
            >Waiting For Restaurant to Accept Your Order!</Animatable.Text>
            <Progress.Circle size={60} indeterminate={true} color='white' />

        </SafeAreaView>
    )
}

export default Preparing