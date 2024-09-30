'use client'
import { Patient, PatientsData } from "@/utils/constants";
import { ReactNode, useEffect, useState } from "react";
import { PatientContext } from "../PatientContext";


interface PatientProviderProp{
    children:ReactNode
}

const PatientProvider = ({children}:PatientProviderProp)=>{

    const [patients,setPatients] = useState<Patient[]>([])
    const [patientId,setPatientId] = useState<string>("")
    const [drugSelected,setDrugSelected] = useState(true)
    const [assignSelected,setAssignSelected] = useState(false)
    const [scanSelected,setScanSelected] = useState(false)
    const [drugCycleDone,setDrugCyleDone] = useState<boolean>(false)
    const [assignDone, setAssignDone] = useState(false);
    const [scanDone, setScanDone] = useState(false);
    

    useEffect(()=>{
        const getPatients = ()=>{
            setPatients(PatientsData)
        }
        getPatients()
    },[])

    const getPatient = (id:string)=>{

        const patientData = PatientsData.find((patient)=>patient.hospitalId === id)
            if(patientData) return patientData
        
    }

    const handleDrugTab = ()=>{
        setDrugSelected(true);
        setAssignSelected(false);
        setScanSelected(false);
    }

    const handleAssignTab = () => {
        setDrugSelected(false);
        setAssignSelected(true);
        setScanSelected(false);
    };

    const handleScanTab = () => {
        setDrugSelected(false);
        setAssignSelected(false);
        setScanSelected(true);
    };

    const handleSetDrugCycleDone = () => {
        setDrugCyleDone(true);
        handleAssignTab()
    };

    const handleAssignDispatchDriverDone = () => {
        setAssignDone(true);
        handleScanTab()
    };

    const handleScanDone = () => {
        setScanDone(true);
    };

    return (
        <PatientContext.Provider value={{
            patients,
            getPatient,
            patientId,
            setPatientId,
            drugCycleDone,
            setDrugCyleDone,
            drugSelected,
            setDrugSelected,
            assignSelected,
            setAssignSelected,
            scanSelected,
            setScanSelected,
            assignDone,
            setAssignDone,
            scanDone,
            setScanDone,
            handleDrugTab,
            handleAssignTab,
            handleScanTab,
            handleSetDrugCycleDone,
            handleAssignDispatchDriverDone,
            handleScanDone
            }}
            >
            {children}
        </PatientContext.Provider>
    )
}

export default PatientProvider