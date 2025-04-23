import { EmployeesService } from "@/services/EmployeesService";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer:{
        [EmployeesService.reducerPath]: EmployeesService.reducer,
    },
    middleware:(getDefaultMiddleware)=>{
        return getDefaultMiddleware().concat(EmployeesService.middleware)
    }
})

setupListeners(store.dispatch)


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch