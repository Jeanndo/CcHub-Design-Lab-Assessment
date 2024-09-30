import { Patient } from "@/utils/constants";
import { createContext } from "react";

interface PatientContextType {

    patients:Patient[];
    getPatient:(id:string)=>Patient|undefined;
    patientId:string;
    setPatientId:(id:string)=>void;
    drugSelected:boolean;
    setDrugSelected:(value:boolean)=>void;
    assignSelected:boolean;
    setAssignSelected:(value:boolean)=>void;
    scanSelected:boolean;
    setScanSelected:(value:boolean)=>void;
    drugCycleDone:boolean;
    setDrugCyleDone:(value:boolean)=>void;
    assignDone:boolean;
    setAssignDone:(value:boolean)=>void;
    scanDone:boolean;
    setScanDone:(value:boolean)=>void;
    handleDrugTab:()=>void;
    handleAssignTab:()=>void;
    handleScanTab:()=>void;
    handleSetDrugCycleDone:()=>void;
    handleAssignDispatchDriverDone:()=>void;
    handleScanDone:()=>void;

}

export const PatientContext = createContext<PatientContextType|undefined>(undefined);
