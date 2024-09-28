import { ReactNode } from "react";
/**
 * Custom input attributes
 */
export interface CustomInuptProps {
    name?: string;
    type?: string;
    placeholder?: string;
}

/**
 * Login form values
 */
export interface FormValueTypes {
    email: string;
    password: string;
}

/**
 * Patient info form values
 */
export interface PatientInfoFormValues {
    hospitalId:string;
    firstName:string;
    lastName:string;
    gender:string;
    phone:string;
    email: string;
}

/**
 * Patient info form values
 */
export interface DeliveryInfoFormValues {
    nextDeliveryDate:string;
    deliveryAddress:string;
    deliveryArea:string;
    paymentStatus:string;
}


/**
 * Dashboard Layout Prop
 */

export interface DashboardLayoutProps {
    children: ReactNode;
}

/**
 * Status color definition
 */

export interface StatusColor {
    status: string;
    bgColor: string;
    color: string;
}

/**
 * Patients data definitions
 */

export interface Patient {
    hospitalId: string;
    name: string;
    phone: string;
    nextDeliveryData: string;
    location: string;
    status: string;
}


/**
 * View Patient Side bar tab definition
 */

export interface ViewPatientTab {
    id: number;
    label: string;
}

/**
 * Patients data array
 */

export const PatientsData: Patient[] = [
    {
        hospitalId: "1AFHFH093",
        name: "Oluwaseun Aregbesola",
        phone: "+2347068642920",
        nextDeliveryData: "12th September 2020",
        location: "VI, Lagos",
        status: "Completed"
    },
    {
        hospitalId: "2AFHFH093",
        name: "John Doe",
        phone: "123456789",
        nextDeliveryData: "12th September 2020",
        location: "VI, Lagos",
        status: "Completed"
    },
    {
        hospitalId: "3AFHFH093",
        name: "John Doe",
        phone: "123456789",
        nextDeliveryData: "12th September 2020",
        location: "VI, Lagos",
        status: "Due & Paid"
    },
    {
        hospitalId: "4AFHFH093",
        name: "John Doe",
        phone: "123456789",
        nextDeliveryData: "12th September 2020",
        location: "VI, Lagos",
        status: "Due & Unpaid"
    },
    {
        hospitalId: "5AFHFH093",
        name: "John Doe",
        phone: "123456789",
        nextDeliveryData: "12th September 2020",
        location: "VI, Lagos",
        status: "Assigned"
    },
    {
        hospitalId: "6AFHFH093",
        name: "John Doe",
        phone: "123456789",
        nextDeliveryData: "12th September 2020",
        location: "VI, Lagos",
        status: "Assigned"
    },
    {
        hospitalId: "7AFHFH093",
        name: "John Doe",
        phone: "123456789",
        nextDeliveryData: "12th September 2020",
        location: "VI, Lagos",
        status: "Assigned"
    },
    {
        hospitalId: "8AFHFH093",
        name: "John Doe",
        phone: "123456789",
        nextDeliveryData: "12th September 2020",
        location: "VI, Lagos",
        status: "Paid"
    },
    {
        hospitalId: "9AFHFH093",
        name: "John Doe",
        phone: "123456789",
        nextDeliveryData: "12th September 2020",
        location: "VI, Lagos",
        status: "Completed"
    },
    {
        hospitalId: "10AFHFH093",
        name: "John Doe",
        phone: "123456789",
        nextDeliveryData: "12th September 2020",
        location: "VI, Lagos",
        status: "Due & Paid"
    },
    {
        hospitalId: "11AFHFH093",
        name: "John Doe",
        phone: "123456789",
        nextDeliveryData: "12th September 2020",
        location: "VI, Lagos",
        status: "Due & Paid"
    },
    {
        hospitalId: "12AFHFH093",
        name: "John Doe",
        phone: "123456789",
        nextDeliveryData: "12th September 2020",
        location: "VI, Lagos",
        status: "Due & Unpaid"
    },
    {
        hospitalId: "13AFHFH093",
        name: "John Doe",
        phone: "123456789",
        nextDeliveryData: "12th September 2020",
        location: "VI, Lagos",
        status: "Due & Unpaid"
    },
    {
        hospitalId: "14AFHFH093",
        name: "John Doe",
        phone: "123456789",
        nextDeliveryData: "12th September 2020",
        location: "VI, Lagos",
        status: "Due & Unpaid"
    },
    {
        hospitalId: "15AFHFH093",
        name: "John Doe",
        phone: "123456789",
        nextDeliveryData: "12th September 2020",
        location: "VI, Lagos",
        status: "Paid"
    },
    {
        hospitalId: "16AFHFH093",
        name: "John Doe",
        phone: "123456789",
        nextDeliveryData: "12th September 2020",
        location: "VI, Lagos",
        status: "Paid"
    },
    {
        hospitalId: "17AFHFH093",
        name: "John Doe",
        phone: "123456789",
        nextDeliveryData: "12th September 2020",
        location: "VI, Lagos",
        status: "Paid"
    },
    {
        hospitalId: "18AFHFH093",
        name: "John Doe",
        phone: "123456789",
        nextDeliveryData: "12th September 2020",
        location: "VI, Lagos",
        status: "Completed"
    },
    {
        hospitalId: "19AFHFH093",
        name: "John Doe",
        phone: "123456789",
        nextDeliveryData: "12th September 2020",
        location: "VI, Lagos",
        status: "Completed"
    },
    {
        hospitalId: "20AFHFH093",
        name: "John Doe",
        phone: "123456789",
        nextDeliveryData: "12th September 2020",
        location: "VI, Lagos",
        status: "Completed"
    },
    {
        hospitalId: "21AFHFH093",
        name: "John Doe",
        phone: "123456789",
        nextDeliveryData: "12th September 2020",
        location: "VI, Lagos",
        status: "Completed"
    },
    {
        hospitalId: "22AFHFH093",
        name: "John Doe",
        phone: "123456789",
        nextDeliveryData: "12th September 2020",
        location: "VI, Lagos",
        status: "Due & Paid"
    },
    {
        hospitalId: "23AFHFH093",
        name: "John Doe",
        phone: "123456789",
        nextDeliveryData: "12th September 2020",
        location: "VI, Lagos",
        status: "Due & Paid"
    },
    {
        hospitalId: "24AFHFH093",
        name: "John Doe",
        phone: "123456789",
        nextDeliveryData: "12th September 2020",
        location: "VI, Lagos",
        status: "Due & Paid"
    },
    {
        hospitalId: "25AFHFH093",
        name: "John Doe",
        phone: "123456789",
        nextDeliveryData: "12th September 2020",
        location: "VI, Lagos",
        status: "Due & Unpaid"
    }
]

/**
 *  Status color
 */

export const statusColors: StatusColor[] = [
    {
        status: "Assigned",
        bgColor: "rgba(0, 106, 231, 0.2)",
        color: "#006AE7",
    },
    {
        status: "Completed",
        bgColor: 'rgba(1, 168, 90, 0.2)',
        color: "#01A85A"
    },
    {
        status: "Due & Unpaid",
        bgColor: "rgba(244, 44, 31, 0.2)",
        color: "#F42C1F"
    },
    {
        status: "Paid",
        bgColor: "rgba(1, 168, 90, 0.2)",
        color: "#01A85A"
    },
    {
        status: "Due & Paid",
        bgColor: "rgba(255, 122, 0, 0.2)",
        color: "#FF7A00"
    }
]


/**
 *  View Patient Tabs
 */

export const ViewPatientSideBarTabs: ViewPatientTab[] = [
    {
        id: 1,
        label: "Patient"
    },
    {
        id: 2,
        label: "Rider's Profile"
    },
    {
        id: 3,
        label: "Delivery History"
    }
]

/**
 *  Driver profile tabs
 */


export const DriverProfileTabs: ViewPatientTab[] = [
    {
        id: 1,
        label: "Patient Information"
    },
    {
        id: 2,
        label: "Delivery Information"
    }
]

/**
 *  SET DRUG CIRCLE DATA DEFINITION
 */

export interface DrugCircleData {
    id: number;
    title: string;
    content: string;
}

/** 
 *  SET DRUG CIRCLE DATA
*/

export const drugCircleData: DrugCircleData[] = [
    {
        id: 1,
        title: "Same as initial drug cycle",
        content: "Deliver drug on 4th February 2020 & set next delivery date to 4th March 2020"
    },
    {
        id: 2,
        title: "Set new drug cycle",
        content: "Deliver drug on 4th February 2020 & set next delivery date to 4th March 2020"
    },
    {
        id: 3,
        title: "Set new drug cycle",
        content: "Deliver drug on 4th February 2020 & set next delivery date to 4th March 2020"
    },
    {
        id: 4,
        title: "Same as initial drug cycle",
        content: "Deliver drug on 4th February 2020 & set next delivery date to 4th March 2020"
    },
    {
        id: 5,
        title: "Same as initial drug cycle",
        content: "Deliver drug on 4th February 2020 & set next delivery date to 4th March 2020"
    },
    {
        id: 6,
        title: "Same as initial drug cycle",
        content: "Deliver drug on 4th February 2020 & set next delivery date to 4th March 2020"
    },
    {
        id: 7,
        title: "Same as initial drug cycle",
        content: "Deliver drug on 4th February 2020 & set next delivery date to 4th March 2020"
    },
    {
        id: 8,
        title: "Same as initial drug cycle",
        content: "Deliver drug on 4th February 2020 & set next delivery date to 4th March 2020"
    }
]