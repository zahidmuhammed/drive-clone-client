"use client"

import React from 'react'
import { FiPlus } from "react-icons/fi";
import { toast } from "sonner"
import { useAppDispatch } from '@/hooks/reduxHooks';
import { getFiles } from '@/redux/slices/filesSlice';
import { axiosClient } from "@/redux/store"

const UploadButton = () => {
    const dispatch = useAppDispatch()


    const handleFileUpload = async (formData: FormData) => {
        try {
            // Check file size limit (10MB)
            const fileSizeLimit = 10 * 1024 * 1024; // 10MB in bytes
            const file = formData.get('file') as File;
            if (file && file.size > fileSizeLimit) {
                toast.error("File size exceeds 10MB limit!");
                return;
            }

            const response = await axiosClient.post("/files/upload", formData, { withCredentials: true });
            if (response.status === 200) {
                toast.success("File uploaded successfully 👍")
                dispatch(getFiles({}))
            }
            console.log(response);
        } catch (error) {
            toast.error("File upload failed !")
            console.error(error);
        }
    }

    return (
        <div className='px-3'>
            <form onSubmit={(e) => e.preventDefault()} encType="multipart/form-data">
                <input
                    type="file"
                    id="fileInput"
                    className='hidden'
                    name="file"
                    onChange={(e) => {
                        if (e.target.files && e.target.files.length > 0) {
                            const file = e.target.files[0];
                            const formData = new FormData();
                            formData.append('file', file);
                            handleFileUpload(formData);
                            e.target.value = ''; // Reset the input value to allow for the same file to be selected again
                        }
                    }} />
                <label
                    htmlFor="fileInput"
                    className='my-5 bg-white flex gap-2 cursor-pointer hover:bg-[#E9EEF6] drop-shadow-md items-center justify-center w-1/2 rounded-xl h-14 transition-all duration-500'
                >
                    <FiPlus className='size-5' />
                    New
                </label>
            </form>
        </div>
    )
}

export default UploadButton