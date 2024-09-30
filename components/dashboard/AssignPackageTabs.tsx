'use client'
import CustomTab from '../common/RadioButton';
import SetDrugCycleContent from './SetDrugCycle';
import AssignDispatchDriver from './AssignDispatchDriver';
import ScanPackage from './ScanPackage';
import { useResponsive } from '@/hooks/useResponsive';
import { usePatient } from '@/hooks/usePatient';

const AssignPackageTabs: React.FC = () => {

    const { smallDevice } = useResponsive()
    const { drugSelected, assignSelected, scanSelected, drugCycleDone, assignDone, scanDone, handleDrugTab, handleAssignTab, handleScanTab } = usePatient()

    // Render the appropriate content based on the selected tab

    const renderProperContent = () => {
        if (drugSelected) {
            return <SetDrugCycleContent />
        } else if (assignSelected) {
            return <AssignDispatchDriver />
        } else if (scanSelected) {
            return <ScanPackage />
        } else {
            return <SetDrugCycleContent />
        }
    }


    return (
        <div className="flex flex-col py-2">
            <div className="w-full flex ">
                <CustomTab label={smallDevice ? "Drug" : "Set Drug Cycle/Length"} handleTab={handleDrugTab} isSelected={drugSelected} isCompleted={drugCycleDone} />
                <CustomTab label={smallDevice ? "Assign" : "Assign Dispatch Rider"} handleTab={handleAssignTab} isSelected={assignSelected} isCompleted={assignDone} />
                <CustomTab label={smallDevice ? "Scan" : "Scan Package"} handleTab={handleScanTab} isSelected={scanSelected} isCompleted={scanDone} />
            </div>

            <div className="mt-4">
                {renderProperContent()}
            </div>

        </div>
    );
};

export default AssignPackageTabs;
