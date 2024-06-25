import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'category',
    title: 'Manu Category',
    type: 'document',
    fields: [
        {
            name:'name',
            type:'string',
            title:'Catagory name',
            validation:(Rule)=>Rule.required(),
        },
        {
            name:'image',
            type:'image',
            title:'Image of Catagory'
        }
    ],
})
