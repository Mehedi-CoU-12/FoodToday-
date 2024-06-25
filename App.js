import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';  
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screen/HomeScreen';
import RestaurantScreen from './screen/RestaurantScreen';

import { NativeWindStyleSheet } from "nativewind";
import { Provider } from 'react-redux';
import { store } from './store';
import BasketScreen from './screen/BasketScreen';
import PreparingOrderScreen from './screen/PreparingOrderScreen';
import DeliveryScreen from './screen/DeliveryScreen';
import SignUp from './screen/SignUp';
import LogIn from './screen/LogIn';
import PaymentScreen from './screen/PaymentScreen';
import LogOutScreen from './screen/LogOutScreen';


import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
const toastConfig = {
    /*
      Overwrite 'success' type,
      by modifying the existing `BaseToast` component
    */
    success: (props) => (
      <BaseToast
        {...props}
        text2NumberOfLines={3}
        style={{
            borderLeftColor:'green',
            borderLeftWidth:7,
            width:'90%',
            height:70,
            borderRightColor:'green',
            borderRightWidth:7,

        }}
        text1Style={{
          fontSize: 17,
          fontWeight:'bold',
          color:'green'
        }}
        text2Style={{
          fontSize: 15,
          fontWeight:'bold',
        //   color:'red'
        }}
      />
    ),
    /*
      Overwrite 'error' type,
      by modifying the existing `ErrorToast` component
    */
    error: (props) => (
      <ErrorToast
        {...props}
        text2NumberOfLines={3}
        style={{
            borderLeftColor:'pink',
            borderLeftWidth:7,
            width:'90%',
            height:70,
            borderRightColor:'pink',
            borderRightWidth:7,

        }}
        text1Style={{
          fontSize: 17,
          fontWeight:'bold',
          color:'red'
        }}
        text2Style={{
          fontSize: 15,
          fontWeight:'bold',
        //   color:'red'
        }}
      />
    ),
  };


NativeWindStyleSheet.setOutput({
    default: "native",
});

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Provider store={store}>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Restaurant" component={RestaurantScreen} />
                    <Stack.Screen name="Basket" component={BasketScreen} 
                        options={{presentation:"modal",headerShown:false}}
                    />
                    <Stack.Screen name='prepare' component={PreparingOrderScreen} 
                        options={{presentation:'fullScreenModal',headerShown:false}}
                    />
                    <Stack.Screen name='Delivary' component={DeliveryScreen} 
                        options={{presentation:'fullScreenModal',headerShown:false}}
                    />
                    <Stack.Screen name='SignUp' component={SignUp} 
                        options={{presentation:'fullScreenModal',headerShown:false}}
                    />
                    <Stack.Screen name='LogIn' component={LogIn} 
                        options={{presentation:'fullScreenModal',headerShown:false}}
                    />
                    <Stack.Screen name='LogOut' component={LogOutScreen} 
                        options={{presentation:'fullScreenModal',headerShown:false}}
                    />
                    <Stack.Screen name='payment' component={PaymentScreen} 
                        options={{presentation:'fullScreenModal',headerShown:false}}
                    />
                </Stack.Navigator>
            </Provider>
            <Toast config={toastConfig}/>
        </NavigationContainer>
    );
}


