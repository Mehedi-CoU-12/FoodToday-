import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'dish',
    title: 'Dish',
    type: 'document',
    fields: [
        {
            name:'name',
            type:'string',
            title:'Name of dish',
            validation:(Rule)=>Rule.required(),
        },
        {
            name:'shot_description',
            type:'string',
            title:'Short description',
            validation:(Rule)=>Rule.max(200),
        },
        {
            name:'price',
            type:'number',
            title:'Prices of the dish in GBP',
        },
        {
            name:'image',
            type:'image',
            title:'Image of the Dish',
        },
    ],
})
