import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    themeType: "light"
}

const themeSlice = createSlice({
    name:"theme",
    initialState,
    reducers:{
        changeTheme(state,action){
            state.themeType=action.payload;
        }
    }

})

export const {changeTheme} = themeSlice.actions;
export default themeSlice.reducer;