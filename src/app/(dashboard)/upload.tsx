"use client"

import React from 'react'
import { FiPlus } from "react-icons/fi";
import { toast } from "sonner"
import axios from 'axios';
import Urls from '@/redux/Urls';

const AxiosInstance = axios.create({ baseURL: Urls.baseUrl })

const UploadButton = () => {


    const handleFileUpload = async (formData: FormData) => {
        try {
            const response = await AxiosInstance.post("/api/files/upload", formData, { withCredentials: true });
            if (response.status === 200) {
                toast.success("File uploaded successfully 👍")
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
                            const formData = new FormData();
                            formData.append('file', e.target.files[0]);
                            handleFileUpload(formData);
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