import { ReactNode } from "react";
import PatientProvider from "./PatientProvider";

interface AppContextProviderProp{
    children:ReactNode
}

const AppContextProvider = ({children}:AppContextProviderProp)=>{
    return (
        <PatientProvider>
            {children}
        </PatientProvider>
    )
}

export default AppContextProvider;