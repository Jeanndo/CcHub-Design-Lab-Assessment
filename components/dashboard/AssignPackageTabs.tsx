'use client'
import { useState } from 'react';
import CustomTab from '../common/RadioButton';
import SetDrugCircleContent from './SetDrugCircle';
import AssignDispatchDriver from './AssignDispatchDriver';
import ScanPackage from './ScanPackage';

const AssignPackageTabs: React.FC = () => {

    const [drugSelected,setDrugSelected] = useState(true)
    const [assignSelected,setAssignSelected] = useState(false)
    const [scanSelected,setScanSelected] = useState(false)

    const [drugDone, setDrugDone] = useState(false);
    const [assignDone, setAssignDone] = useState(false);
    const [scanDone, setScanDone] = useState(false);

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

    const handleSetDrugCircleDone = () => {
        setDrugDone(true);
        handleAssignTab()
    };

    const handleAssignDispatchDriverDone = () => {
        setAssignDone(true);
        handleScanTab()
    };
    const handleScanDone = () => {
        setScanDone(true);
    };


    // Render the appropriate content based on the selected tab

    const renderProperContent =()=>{
        if(drugSelected){
            return <SetDrugCircleContent onDone={handleSetDrugCircleDone}/>
        }else if(assignSelected){
            return <AssignDispatchDriver onDone={handleAssignDispatchDriverDone}/>
        } else if(scanSelected){
            return <ScanPackage onDone={handleScanDone}/>
        } else {
            return <SetDrugCircleContent onDone={handleSetDrugCircleDone}/>
        }
    }


    return (
        <div className="flex flex-col py-2">
            {/* Render each tab independently */}
            <div className="w-full flex ">
                <CustomTab label="Set Drug Cycle/Length" handleTab={handleDrugTab} isSelected={drugSelected} isCompleted={drugDone} />
                <CustomTab label="Assign Dispatch Rider" handleTab={handleAssignTab} isSelected={assignSelected} isCompleted={assignDone} />
                <CustomTab label="Scan Package" handleTab={handleScanTab} isSelected={scanSelected} isCompleted={scanDone} />
            </div>

            <div className="mt-4">
                {renderProperContent()}
            </div>

        </div>
    );
};

export default AssignPackageTabs;
