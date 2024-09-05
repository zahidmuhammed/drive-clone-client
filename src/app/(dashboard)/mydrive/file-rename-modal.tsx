import { toast } from "sonner";

import {
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dispatch, SetStateAction, useState } from "react";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { FileTypes, getFiles } from "@/redux/slices/filesSlice";
import { axiosClient } from "@/redux/store";

export const RenameComponent = ({ file, setOpen }: { file: FileTypes, setOpen: Dispatch<SetStateAction<boolean>> }) => {

    const [newFileName, setNewFileName] = useState(file?.fileName || "");
    const dispatch = useAppDispatch()


    const handleRenameSubmit = async () => {

        if (!newFileName) {
            toast.error("File name cannot be empty");
            return;
        }

        try {
            const response = await axiosClient.patch(`/files/${file?._id}`, { fileName: newFileName }, {
                withCredentials: true,
            });
            if (response.status === 200) {
                toast.success("File renamed successfully");
                dispatch(getFiles({}));
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
