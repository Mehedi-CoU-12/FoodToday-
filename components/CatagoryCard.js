import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'

const CatagoryCard = ({ImgUrl,title}) => {
    return (
        <TouchableOpacity className='relative mr-2'>
            <Image className='h-20 w-20 rounded' 
            source={{
                uri:ImgUrl
            }}/>
            {/* <Text>CatagoryCard</Text> */}
            <Text className='absolute bottom-1 left-1 text-white'>{title}</Text>
        </TouchableOpacity>
    )
}

export default CatagoryCard