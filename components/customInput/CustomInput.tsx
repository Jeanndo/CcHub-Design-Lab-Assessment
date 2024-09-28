import { FC } from "react";
import { useField } from "formik";
import { CustomInuptProps } from "@/utils/constants";


const CustomInput: FC<CustomInuptProps> = ({ ...props }) => {
    const [field, meta] = useField(props)

    return (
        <div>
            <input
                {...field}
                {...props}
                className={`w-full px-8 py-4 font-medium border border-gray-300 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white ${meta.touched && meta.error ? "border border-red-500" : ""}`}
            />
            {meta.touched && meta.error ? <p className="text-red-500">{meta.error}</p> : null}
        </div>
    )
}

export default CustomInput