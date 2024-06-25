import { defineType } from "sanity";

export default defineType({
    name:'user',
    title:'User Data',
    type:'document',
    fields:[
        {
            name:'name',
            type:'string',
            title:'Name',
            validation:(Rule)=>Rule.required(),
        },
        {
            name:'number',
            type:'string',
            title:'Mobile Number',
            validation:(Rule)=>Rule.required(),
        },
        {
            name:'email',
            type:'string',
            title:'Email',
            validation:(Rule)=>Rule.required(),
        },
        {
            name:'address',
            type:'string',
            title:'Address',
            validation:(Rule)=>Rule.required(),
        },
        {
            name:'password',
            type:'string',
            title:'Password',
            validation:(Rule)=>Rule.required(),
        },
        {
            name:'cpassword',
            type:'string',
            title:'Confirm Password',
            validation:(Rule)=>Rule.required(),
        },
    ]
})