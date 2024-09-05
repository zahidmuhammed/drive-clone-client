import Image from "next/image";
import { MdImage } from "react-icons/md";
import { RiFileList2Fill } from "react-icons/ri";
import { BsFileEarmarkPdfFill } from "react-icons/bs";
import { HiOutlineDotsVertical } from "react-icons/hi";

import { FileTypes } from "@/redux/slices/filesSlice";
import { FileOptions } from "./file-options";


const FileComponent = ({ file }: { file: FileTypes }) => {

    const fileExtension = file.fileUrl.split('.').pop() || "doc";

    const fileTypeLogo = () => {
        if (["pdf"]?.includes(fileExtension)) {
            return <BsFileEarmarkPdfFill className="fill-[#EA4336] size-4" />
        } if (["png", "jpeg", "jpg"]?.includes(fileExtension)) {
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
        if (["png", "jpeg", "jpg"]?.includes(fileExtension)) {
            return <Image draggable={false} src={file?.fileUrl} alt="" height={100} width={100} className="h-full w-full rounded bg-cover" />
        }
        return <div className="flex justify-center items-center h-full">
            <RiFileList2Fill className="fill-[#4285F4] size-16" />
        </div>
    }

    return <div className="aspect-square w-64 h-[270px] rounded-xl bg-[#F0F4F8] hover:bg-[#e0e3e7]">
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

export default FileComponent