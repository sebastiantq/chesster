import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    logueado: false,
    registrado: false,
};

const useSlice = createSlice({
    name: "sesion",
    initialState,
    reducers: {
        setLogueado: (state, action) => {
            state.logueado = action.payload
        },
        setRegistrado: (state,action) => {
            state.registrado = action.payload
        }
    }
})

export const { setLogueado } = useSlice.actions
export const { setRegistrado } = useSlice.actions
export default useSlice.reducer