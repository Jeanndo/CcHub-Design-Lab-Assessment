import { FC } from "react";
import { useField } from "formik";
import { CustomSelectProps } from "@/utils/constants";


const CustomSelectField: FC<CustomSelectProps> = ({showlabel,label, ...props }) => {
    const [field, meta] = useField(props)

    return (
        <div className="relative">
            <label className="absolute left-8 top-0 text-[12px]">{showlabel&&label}</label>
            <select
                {...field}
                {...props}
                className={`w-full px-8 py-4 font-bold border border-gray-300 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white ${meta.touched && meta.error ? "border border-red-500" : ""}`}
            />
            {meta.touched && meta.error ? <p className="text-red-500">{meta.error}</p> : null}
        </div>
    )
}

export default CustomSelectField