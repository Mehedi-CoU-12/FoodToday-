import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CatagoryCard from './CatagoryCard'
import sanityClient, { urlFor } from '../sanity';

const Catagories = () => {

    const [catagories, setCatagories] = useState([]);

    useEffect(() => {
        sanityClient.fetch(`
        *[_type=='category']
        `).then(data => {
            setCatagories(data);
        })
    }, [])

    return (
        <ScrollView
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            {
                catagories?.map((item) => (
                    <CatagoryCard
                        key={item._id}
                        ImgUrl={urlFor(item.image).width(200).url()}
                        title={item.name}
                    />
                ))
            }
        </ScrollView>

    )
}

export default Catagories