import {createSlice} from '@reduxjs/toolkit'

const initialState={
    user:{}
}

export const loginSlice=createSlice({
    name: 'login',
    initialState,
    reducers: {
        setLogin: (state, action) => {
            state.user=action.payload;
        },
        setLogOut:(state,action)=>{
            state.user=action.payload;
        }
    }
})

export const {setLogin,setLogOut}=loginSlice.actions;

export const selectUser=(state)=>state.login.user; //here "login" came from store 

//this will check a user Object is empty or not
export const isUserEmpty=(state)=>Object.keys(state.login.user).length==0

export default loginSlice.reducer;