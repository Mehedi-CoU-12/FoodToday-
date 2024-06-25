import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { urlFor } from '../sanity'
import { MinusCircleIcon } from 'react-native-heroicons/solid';
import { PlusCircleIcon } from 'react-native-heroicons/solid';
import { useDispatch, useSelector } from 'react-redux';
import { 
    addToBasket, removeFromBasket, selectBasketItems, selectBasketItemsWithId
} from '../features/basketSlice';

import { useNavigation } from '@react-navigation/native';
import { isUserEmpty } from '../features/loginSlice';
// import currencty from 'react-currency-format';
import Toast from 'react-native-toast-message';

const DishRow = ({ id, name, description, price, image }) => {

    const navigation=useNavigation();

    const [isPressed, setIsPressed] = useState(false);
    const dispatch=useDispatch();
    const items=useSelector(state=>selectBasketItemsWithId(state,id))

    const isUser=useSelector(isUserEmpty);
    // console.log("login->",isLogin.state);

    const addItemToBasket=()=>{
        dispatch(addToBasket({ id, name, description, price, image }))
    }

    const removeItemFromBasket=()=>{

        if(items.length<=0)
        return;

        dispatch(removeFromBasket({id,name,description,price,image}))
    }

    const handleClick=()=>{
        if(isUser)
        {
            // alert("Please Login in First");
            // navigation.navigate('LogIn');
            Toast.show({type:'error',text1:'Error',text2:'Please Login First',visibilityTime:1000});
        } 
        else
        setIsPressed(!isPressed)
    }

    // console.log(items)

    return (
        <>
            <TouchableOpacity
                onPress={handleClick}
                className={`border bg-white p-3 border-gray-200 
                ${isPressed && 'border-b-0'}`}
            >

                <View className='flex-row'>
                    <View className='flex-1 pr-2'>
                        <Text className='text-lg mb-1'>{name} </Text>
                        <Text className='text-gray-400'>{description} </Text>
                        <Text className='text-gray-400 mt-2'>৳{price} </Text>
                    </View>

                    <View>
                        <Image
                            style={{ borderWidth: 1, borderColor: '#f3f3f4' }}
                            source={{
                                uri: urlFor(image).url()
                            }}
                            className='w-20 h-20 bg-gray-300 p-4'
                        />
                    </View>
                </View>
            </TouchableOpacity>

            {
                isPressed && (
                    <View className='bg-white px-4'>
                        <View className='flex-row items-center space-x-2 pd-3'>
                            <TouchableOpacity disabled={items.length>0?false:true} onPress={removeItemFromBasket} >
                                <MinusCircleIcon size={40} color={items.length>0?'#00ccbb':'gray'} />
                            </TouchableOpacity>

                            <Text>{items.length} </Text>

                            <TouchableOpacity onPress={addItemToBasket}>
                                <PlusCircleIcon size={40} color={'#00ccbb'} />
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            }
        </>
    )
}

export default DishRow