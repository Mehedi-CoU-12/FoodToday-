import { View, Text, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'
import sanityClient from '../sanity'

const FeaturedRow = ({ id, title, description }) => {
    //fatching data from backend using "id" of the restaurants
    //
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        sanityClient.fetch(`
        *[ _type =='featured' && _id== $id ]{
            ...,
            restaurants[]->{
              ...,
              dishes[]->,
                type->{
                  name
                }
          }
        }[0]
        `, { id }).then(data => {

            setRestaurants(data?.restaurants)
        })
    }, [id])

    // console.log(restaurants);
    // console.log("-------------------")


    return (
        <View>
            <View className='mt-4 flex-row items-center justify-between px-4'>
                <Text className='font-bold text-xl'>{title}</Text>
                <ArrowRightIcon color={'#00ccbb'} />
            </View>

            <Text className='text-xs text-gray-500 px-4' >{description}</Text>

            <ScrollView
                contentContainerStyle={{
                    paddingHorizontal: 15,
                }}
                horizontal
                showsHorizontalScrollIndicator={false}
                className='pt-4'
            >
                {/* Restaurant Cards... */}

                {
                    restaurants?.map((restaurant) => (
                        <RestaurantCard
                            key={restaurant._id}
                            id={restaurant._id}
                            imgUrl={restaurant.image}
                            title={restaurant.name}
                            rating={restaurant.rating}
                            genre={restaurant.type?.name}
                            address={restaurant.address}
                            short_description={restaurant.shot_description}
                            dishes={restaurant.dishes}
                            long={restaurant.long}
                            lat={restaurant.lat}
                        />
                    ))
                }
                
            </ScrollView>
        </View>
    )
}

export default FeaturedRow