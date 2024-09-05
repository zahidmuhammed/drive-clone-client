import Link from "next/link";
import { toast } from "sonner";
import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { TiArrowMove } from "react-icons/ti";
import { FaRegTrashCan } from "react-icons/fa6";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";

import { axiosClient } from "@/redux/store";
import { Dialog } from "@/components/ui/dialog"
import { useAppDispatch } from "@/hooks/reduxHooks";
import { RenameComponent } from "./file-rename-modal";
import { FileTypes, getFiles } from "@/redux/slices/filesSlice";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export function FileOptions({ children, file }: { children?: React.ReactNode, file: FileTypes }) {

    const [openModal, setOpen] = useState(false)
    const dispatch = useAppDispatch()


    const handleDelete = async () => {
        try {
            const response = await axiosClient.delete(`/files/${file?._id}`, {
                withCredentials: true,
            });
            if (response.status === 200) {
                toast.success("File deleted successfully")
                dispatch(getFiles({}))
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
                                    <Link href={file?.fileUrl} target='_blank'>
                                        <DropdownMenuItem>
                                            <FaRegEye className="mr-2 h-4 w-4" />
                                            <span className="text-xs">Preview</span>
                                        </DropdownMenuItem>
                                    </Link>
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