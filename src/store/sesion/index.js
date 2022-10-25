import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    logueado: false
};

const useSlice = createSlice({
    name: "sesion",
    initialState,
    reducers: {
        setLogueado: (state, action) => {
            state.logueado = action.payload
        },
    }
})

export const { setLogueado } = useSlice.actions

export default useSlice.reducer