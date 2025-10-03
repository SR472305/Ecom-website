import { configureStore } from "@reduxjs/toolkit"
import Authslice from "./features/Authslice"

export const Store  = configureStore({
  reducer :{
    auth : Authslice
  }
})
