import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    notificacion: ""
};

const useSlice = createSlice({
    name: "notificacion",
    initialState,
    reducers: {
        setNotificacion: (state, action) => {
            state.notificacion = action.payload
        },
    }
})

export const { setNotificacion } = useSlice.actions

export default useSlice.reducer