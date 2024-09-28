import { FC, Fragment} from 'react';

interface CustomTabProps {
    label: string;
    isCompleted: boolean;
    isSelected:boolean;
    handleTab:()=>void;
}

const CustomTab: FC<CustomTabProps> = ({ label,isSelected, isCompleted,handleTab}) => {

    const handleClick = () => {
            handleTab()
    };

    return (
        <div className="w-full">
            <div
                className={`cursor-pointer flex items-center space-x-2 p-2 
            ${isCompleted ? '' : isSelected ? 'border-b-2 border-[#276DF7]' : ''} `}
                onClick={handleClick}
            >
                
                <div
                    className={`relative w-6 h-6 rounded-full flex items-center justify-center ${isCompleted ? 'bg-[#01A85A]' : isSelected ? 'bg-[#276DF7] border' : 'border-2 border-gray-400'} ${isCompleted ? 'border-none' : 'border-solid'}`}
                >
                    {isSelected && !isCompleted && (
                        <Fragment>
                            <div className="w-4 h-4 bg-white rounded-full"></div>
                            <div className="w-2.5 h-2.5 bg-[#276DF7] rounded-full absolute"></div>
                        </Fragment>
                    )}

                    {isCompleted && (
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                        </svg>
                    )}
                </div>

                <span className={`text-lg ${isCompleted ? 'text-[#01A85A]' : isSelected ? 'text-[#276DF7]' : 'text-gray-700'}`}>
                    {label}
                </span>
            </div>
        </div>
    );
};

export default CustomTab;
