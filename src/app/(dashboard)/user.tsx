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
import axios from 'axios';
import { useEffect, useState } from 'react';


const BASE_URL = "http://localhost:5000"
const AxiosInstance = axios.create({ baseURL: BASE_URL })


export function User() {

    const [userinfo, setUserInfo] = useState<any>()
    console.log("User Info", userinfo)


    const handleSignOut = async () => {
        try {
            window.open("http://localhost:5000/auth/logout", "_self");
        } catch (error) {

            console.log(error)
        }
    }

    useEffect(() => {
        AxiosInstance.get("/auth/current_user", { withCredentials: true }).then(response => {
            console.log(response.data);
            setUserInfo(response.data)
        })
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
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleSignOut}>
                    <button type="button" >Sign Out</button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu >
    );
}