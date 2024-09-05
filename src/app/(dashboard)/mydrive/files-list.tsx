"use client"

import Image from "next/image";
import React, { useEffect } from 'react'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import FileComponent from './file-card';
import { getFiles } from "@/redux/slices/filesSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";

const FilesList = () => {

    const dispatch = useAppDispatch()
    const filesInfo = useAppSelector(state => state.filesReducer).files

    useEffect(() => {
        dispatch(getFiles({}))
    }, [])

    return (
        <div>
            <div className='my-5 text-sm flex gap-2'>
                <Select>
                    <SelectTrigger className="w-[85px] text-xs">
                        <SelectValue placeholder="Type" />
                    </SelectTrigger>
                    <SelectContent >
                        <SelectItem className='text-xs' value="light">Documents</SelectItem>
                        <SelectItem className='text-xs' value="dark">Spreadsheets</SelectItem>
                        <SelectItem className='text-xs' value="system">Presentation</SelectItem>
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger className="w-[98px] text-xs">
                        <SelectValue placeholder="People" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem className='text-xs' value="light">People 1</SelectItem>
                        <SelectItem className='text-xs' value="dark">People 2</SelectItem>
                        <SelectItem className='text-xs' value="system">People 3</SelectItem>
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger className="w-[111px] text-xs">
                        <SelectValue placeholder="Modified" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem className='text-xs' value="light">Today</SelectItem>
                        <SelectItem className='text-xs' value="dark">Last 7 days</SelectItem>
                        <SelectItem className='text-xs' value="system">Last 30 days</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="flex gap-2 flex-wrap overflow-auto h-[calc(100vh-210px)]">
                {filesInfo.data?.map(file => <FileComponent key={file._id} file={file} />)}
            </div>
            {filesInfo.data?.length === 0 && <div className="flex flex-col md:justify-center items-center h-[calc(100vh-300px)]">
                <Image src="/empty-data.svg" alt="empty" width={500} height={500} className="h-[50vh] aspect-square" />
                <div>Add Files Here</div>
            </div>}
        </div>
    )
}

export default FilesList










