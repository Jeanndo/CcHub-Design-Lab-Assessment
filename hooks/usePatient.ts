import { PatientContext } from "@/context/PatientContext"
import { useContext } from "react"

export const usePatient = ()=>{

    const context = useContext(PatientContext)

    if(!context){
        throw new Error("Patient Provider not provided")
    }
    return context
}