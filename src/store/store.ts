import { EmployeesService } from "@/services/EmployeesService";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { employeeReducer } from "./EmployeeSlice";

export const store = configureStore({
    reducer:{
        employeeFilter: employeeReducer,
        [EmployeesService.reducerPath]: EmployeesService.reducer,
    },
    middleware:(getDefaultMiddleware)=>{
        return getDefaultMiddleware().concat(EmployeesService.middleware)
    }
})

setupListeners(store.dispatch)


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch