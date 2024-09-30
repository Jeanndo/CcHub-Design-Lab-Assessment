import { FC, Fragment } from 'react';

interface CustomTabProps {
    label?: string;
    isSelected: boolean;
    handleSelect: () => void;
    hasLable: boolean;
    showborder:boolean;
    showBackgroundColor:boolean;
}

const CardRadioButton: FC<CustomTabProps> = ({ label,hasLable, isSelected, handleSelect,showborder,showBackgroundColor}) => {

    const handleClick = () => {
        handleSelect()
    };

    return (
        <div className="w-full">
            <div
                className={`cursor-pointer flex items-center space-x-2 p-4 ${isSelected && showBackgroundColor? "bg-[#276cf73f] text-[#276DF7]" : ""} font-semibold ${showborder?"border-b border-[#276DF7]":""}`}
                onClick={handleClick}
            >

                <div
                    className={`relative w-6 h-6 rounded-full flex items-center justify-center ${isSelected ? 'bg-[#276DF7] border' : 'border-2 border-gray-400'} border-solid`}
                >
                    {isSelected && (
                        <Fragment>
                            <div className="w-4 h-4 bg-white rounded-full"></div>
                            <div className="w-2.5 h-2.5 bg-[#276DF7] rounded-full absolute"></div>
                        </Fragment>
                    )}
                </div>

                {hasLable&&<span className={`${isSelected ? 'text-[#276DF7]' : 'text-gray-500'}`}>
                    {label}
                </span>}
            </div>
        </div>
    );
};

export default CardRadioButton;
