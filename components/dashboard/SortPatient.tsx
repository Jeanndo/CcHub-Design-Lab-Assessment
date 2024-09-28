import React from 'react'

const SortPatient = () => {
    return (
        <form>
            <select className="bg-gray-50 border-none text-gray-900 text-sm font-bold focus:outline-none  block w-max">
                <option value="">choose option</option>
                <option value="hospitalId">Hospital ID</option>
                <option value="name">Patient&apos;s Name</option>
                <option value="phone">Phone Number</option>
                <option value="nextDeliveryData">Next Delivery Date</option>
                <option value="location">Location</option>
                <option value="status">Status</option>
            </select>
        </form>
    )
}

export default SortPatient
