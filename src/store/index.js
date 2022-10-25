import React from "react"
import { configureStore } from "@reduxjs/toolkit"
import { Provider as ReduxProvider, useSelector, useDispatch } from "react-redux"

import notificacion from "./notificacion"
import logueado from "./sesion"

const store = configureStore({ reducer: { notificacion, logueado } })

const Provider = ({ children }) => <ReduxProvider store={store}>{children}</ReduxProvider>

export { Provider, useSelector, useDispatch }