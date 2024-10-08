"use client"

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { useEffect, useState } from 'react';
import Urls from '@/redux/Urls';
import { axiosClient } from "@/redux/store"


export function User() {

    const [userinfo, setUserInfo] = useState<any>()

    const handleSignOut = async () => {
        try {
            window.open(`${Urls.baseUrl}/auth/logout`, "_self");
        } catch (error) {
            console.log(error)
        }
    }

    const getUserData = async () => {
        try {
            const response = await axiosClient.get("/auth/current_user", { withCredentials: true });
            setUserInfo(response.data);
        } catch (error: any) {
            if (error.response && error.response.status === 401) {
                window.location.href = "/login";
            } else {
                console.error(error);
            }
        }
    }

    useEffect(() => {
        getUserData();
    }, [])

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    size="icon"
                    className="overflow-hidden rounded-full"
                >
                    <Image
                        src={userinfo?.thumbnail ?? '/placeholder-user.jpg'}
                        width={36}
                        height={36}
                        alt="Avatar"
                        className="overflow-hidden rounded-full"
                    />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>👋  Hi, {userinfo?.username || ""} </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleSignOut}>
                    <button type="button" >Sign Out</button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu >
    );
}