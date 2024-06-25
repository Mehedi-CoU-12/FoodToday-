import { 
    View, 
    Text, 
    SafeAreaView, 
    TextInput, 
    Image, 
    TouchableOpacity, 
    ScrollView, 
    Button, 
    KeyboardAvoidingView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import client from '../sanity';
import Toast from 'react-native-toast-message';

const SignUp = () => {

    const [user, setUser] = useState({
        name: '',
        number: '',
        email: '',
        address: '',
        password: '',
        cpassword: '',
        _type:"user",
    })

    const [isDisable,setIsDisable]=useState(false);

    const navigation=useNavigation();

    const handleSubmit =async() => {

        const {name,number,email,address,password,cpassword}=user;

        if(name && number && email && address && password && cpassword){

            if(password===cpassword){

                // setIsDisable(true);
                const response=await client.create(user);
                // console.log(response);
                navigation.navigate('LogIn')
                setUser({
                    ...user,
                    name:"",
                    number:"",
                    email: "",
                    address: "",
                    password: "",
                    cpassword: "",
                });
            }
            else
            {
                // alert("password doesn't matched")
                Toast.show({type:'error',text1:'Error!!',text2:"password doesn't matched",visibilityTime:1500})
            }
        }
        else
        {
            // alert('fill all the data')
            Toast.show({type:'error',text1:'Error!!',text2:"Fill Up All The Data",visibilityTime:1500})
        }

        // await client.create(user)
        //     .then((res) => {console.log(`User was created, document ID is ${res._id}`)})
        //     .catch((e)=>console.log(e))
        //     .finally(console.log("mehedi"))
        // console.log(response);
    }

    const mehedi=()=>{
        console.log('fill up all the data');
    }

    return (
        <ScrollView className='bg-white  flex-1'>
            <View className=' items-center'>

                <View  >
                    <Image
                        source={require('../assets/picture/logo.gif')}
                        className='h-60 w-60 mt-8'
                    />
                </View>
                <View className='space-y-5' >
                    <View className='m-4 p-4 space-y-3 items-center' >
                        <Text className='text-xl font-extrabold' >Let's Get Started</Text>
                        <Text className='text-xm font-bold text-gray-500' >Create Your Account</Text>
                    </View>
                    <KeyboardAvoidingView className='space-y-3' behavior='padding' >
                        <TextInput
                            value={user.name}
                            onChangeText={(text) => setUser({ ...user, name: text })}
                            className=' h-6 border-2  rounded-md border-red-300 px-2 ' placeholder='Your Name' />

                        <TextInput
                            value={user.number}
                            onChangeText={(text) => setUser({ ...user, number: text })}
                            className=' h-6 border-2 px-2  rounded-md border-red-300' placeholder='Mobile Number' />

                        <TextInput
                            value={user.email}
                            onChangeText={(text) => setUser({ ...user, email: text })}
                            className=' h-6 border-2 px-2 rounded-md border-red-300' placeholder='Email' />

                        <TextInput
                            value={user.address}
                            onChangeText={(text) => setUser({ ...user, address: text })}
                            className=' h-6 px-2 border-2  rounded-md border-red-300' placeholder='Address' />

                        <TextInput
                            value={user.password}
                            secureTextEntry
                            onChangeText={(text) => setUser({ ...user, password: text })}
                            className=' h-6 px-2 border-2  rounded-md border-red-300 ' placeholder='Password' />
                        <TextInput
                            value={user.cpassword}
                            secureTextEntry
                            onChangeText={(text) => setUser({ ...user, cpassword: text })}
                            className=' h-6 px-2 border-2  rounded-md border-red-300' placeholder='Confirm Password' />
                    </KeyboardAvoidingView>

                    <TouchableOpacity
                        onPress={isDisable?mehedi:handleSubmit}
                        className='border-yellow-300 border rounded-md h-10 flex items-center justify-center bg-[#00ccbb]' >
                        <Text className='text-center text-white font-bold'>{isDisable?'Fill all Data':'Sign Up'}</Text>
                    </TouchableOpacity>
                    
                    <View className='flex-row space-x-2' >
                        <Text>Already have an Account?</Text>
                        <TouchableOpacity onPress={()=>navigation.navigate('LogIn')} >
                            <Text className='text-[#00ccbb] font-bold' >Log In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </ScrollView>
    )
}

export default SignUp