"use client"

import axios from "axios";
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import Image from "next/image";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { BsFileEarmarkPdfFill } from "react-icons/bs";
import { RiFileList2Fill } from "react-icons/ri";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { MdImage, MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { TiArrowMove } from "react-icons/ti";
import { FaRegEye } from "react-icons/fa";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { FaRegTrashCan } from "react-icons/fa6";
import { toast } from "sonner";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { FileTypes, getFiles } from "@/redux/slices/filesSlice";


const BASE_URL = "http://localhost:5000";
const AxiosInstance = axios.create({ baseURL: BASE_URL });

const FilesList = () => {

    const dispatch = useAppDispatch()
    const filesInfo = useAppSelector(state => state.filesReducer).files

    useEffect(() => {
        dispatch(getFiles())
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
            <div className="grid grid-cols-1 gap-2 md:gap-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filesInfo.data?.map(file => <FileComponent key={file._id} file={file} />)}
            </div>
            {filesInfo.data?.length === 0 && <div className="flex justify-center items-center">No Files Found !</div>}
        </div>
    )
}

export default FilesList


const FileComponent = ({ file }: { file: FileTypes }) => {

    const fileExtension = file.fileUrl.split('.').pop() || "doc";

    const fileTypeLogo = () => {
        if (["pdf"]?.includes(fileExtension)) {
            return <BsFileEarmarkPdfFill className="fill-[#EA4336] size-4" />
        } if (["png", "jpeg"]?.includes(fileExtension)) {
            return <MdImage className="fill-[#EA4336] size-4" />
        } else
            return <RiFileList2Fill className="fill-[#4285F4] size-4" />
    }


    const fileThumbnail = () => {
        if (["pdf"]?.includes(fileExtension)) {
            return <div className="flex justify-center items-center h-full">
                <BsFileEarmarkPdfFill className="fill-[#EA4336] size-16" />
            </div>
        }
        if (["png", "jpeg"]?.includes(fileExtension)) {
            return <Image src={file?.fileUrl} alt="" height={100} width={100} className="h-full w-full rounded bg-cover" />
        }
        return <div className="flex justify-center items-center h-full">
            <RiFileList2Fill className="fill-[#4285F4] size-16" />
        </div>
    }

    return <div className="aspect-square w-64 rounded-xl bg-[#F0F4F8] hover:bg-[#e0e3e7]">
        <div className="flex items-center justify-between gap-2 px-3 py-3.5">
            {fileTypeLogo()}
            <div className="text-xs truncate flex-1">{file?.fileName}</div>
            <FileOptions file={file}>
                <div>
                    <HiOutlineDotsVertical className="cursor-pointer" />
                </div>
            </FileOptions>
        </div>
        <div className="aspect-[1/1] px-3 pb-3 h-56 w-full">
            <div className="h-full rounded-xl bg-white">
                {fileThumbnail()}
            </div>
        </div>
    </div>
}





export function FileOptions({ children, file }: { children?: any, file: FileTypes }) {

    const [openModal, setOpen] = useState(false)
    const dispatch = useAppDispatch()


    const handleDelete = async () => {
        try {
            const response = await AxiosInstance.delete(`/api/files/${file?._id}`, {
                withCredentials: true,
            });
            if (response.status === 200) {
                toast.success("File deleted successfully")
                dispatch(getFiles())
            }

        } catch (error: any) {
            toast.error("File deletion failed")
            console.error(error);
        }
    }



    return (
        <Dialog open={openModal}>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    {children}
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuGroup>
                        <DropdownMenuSub>
                            <DropdownMenuSubTrigger>
                                <TiArrowMove className="mr-2 h-4 w-4" />
                                <span className="text-xs">Open with</span>
                            </DropdownMenuSubTrigger>
                            <DropdownMenuPortal>
                                <DropdownMenuSubContent>
                                    <DropdownMenuItem>
                                        <FaRegEye className="mr-2 h-4 w-4" />
                                        <span className="text-xs">Preview</span>
                                    </DropdownMenuItem>
                                </DropdownMenuSubContent>
                            </DropdownMenuPortal>
                        </DropdownMenuSub>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem onClick={() => setOpen(true)}>
                            <MdOutlineDriveFileRenameOutline className="mr-2 h-4 w-4" />
                            <span className="text-xs">Rename</span>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem onClick={handleDelete}>
                            <FaRegTrashCan className="mr-2 h-3 w-3" />
                            <span className="text-xs">Delete</span>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
            <RenameComponent file={file} setOpen={setOpen} />
        </Dialog>
    )
}


const RenameComponent = ({ file, setOpen }: { file: FileTypes, setOpen: Dispatch<SetStateAction<boolean>> }) => {

    const [newFileName, setNewFileName] = useState(file?.fileName || "");
    const dispatch = useAppDispatch()


    const handleRenameSubmit = async () => {

        if (!newFileName) {
            toast.error("File name cannot be empty");
            return;
        }

        try {
            const response = await AxiosInstance.patch(`/api/files/${file?._id}`, { fileName: newFileName }, {
                withCredentials: true,
            });
            if (response.status === 200) {
                toast.success("File renamed successfully");
                dispatch(getFiles());
                setOpen(false);
            }
        } catch (error: any) {
            toast.error("File renaming failed");
            console.error(error);
        }
    }

    return <>
        <DialogContent >
            <DialogHeader>
                <DialogTitle>Rename </DialogTitle>
                <DialogDescription></DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
                <div className="grid grid-cols-1 items-center gap-4">
                    <Input
                        id="name"
                        value={newFileName}
                        onChange={(e) => setNewFileName(e.target.value)}
                        className="col-span-3 focus-visible:ring-0"
                    />
                </div>
            </div>
            <DialogFooter>
                <Button type="button" variant="secondary" onClick={() => setOpen(false)}>
                    Cancel
                </Button>
                <Button type="submit" onClick={handleRenameSubmit}>Ok</Button>
            </DialogFooter>
        </DialogContent>
    </>

}

