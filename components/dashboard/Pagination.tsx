/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
'use client'
import { Patient } from '@/utils/constants';
import React, { FC, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

type PatientsData = {
    patients: Patient,
    setCurrentItems: React.Dispatch<React.SetStateAction<Patient[]>>
};


const Pagination: FC<PatientsData> = ({ patients, setCurrentItems }) => {
    
    const itemsPerPage = 10;
    const [pageCount, setPageCount] = useState<number>(0);
    const [itemOffset, setItemOffset] = useState<number>(0);

    useEffect(() => {

        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(patients?.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(patients?.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, patients, setCurrentItems]);


    const handlePageClick = (event: { selected: number }) => {
        const newOffset = (event.selected * itemsPerPage) % patients?.length;
        setItemOffset(newOffset);
    };

    return (
        <div className="flex flex-col-reverse gap-y-2 md:flex-row md:justify-between items-center ">
            <div className="text-[#262626] text-opacity-60">You’re viewing {itemsPerPage} out of {patients?.length} deliveries</div>
            <ReactPaginate
                breakLabel="..."
                nextLabel="Next"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="Previous"
                containerClassName="flex justify-center items-center space-x-2 mt-6"
                pageClassName="page-item"
                pageLinkClassName="px-3 py-2 text-gray-700 "
                previousLinkClassName="px-3 py-2 border border-gray-500 rounded-full text-gray-700 hover:bg-gray-100"
                nextLinkClassName="px-3 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100"
                breakLinkClassName="px-3 py-2 border border-gray-300 rounded-md text-gray-700"
                activeClassName="border border-gray-500 text-white rounded-full h-9 w-9 flex justifty-center items-center"
                disabledClassName="opacity-50 cursor-not-allowed"
            />
        </div>
    )
}

export default Pagination
