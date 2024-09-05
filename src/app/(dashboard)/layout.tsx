import Link from 'next/link';
import {
    Home,
    LineChart,
    Package,
    Package2,
    PanelLeft,
    Settings,
    ShoppingCart,
    Users2
} from 'lucide-react';
import { FaLaptopFile, FaHardDrive, FaRegClock, FaRegStar, FaRegTrashCan, FaRegCircleQuestion } from "react-icons/fa6";
import { MdHomeFilled, MdOutlineCloud } from "react-icons/md";
import { LuUsers } from "react-icons/lu";
import { RiSpam2Line } from "react-icons/ri";

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { User } from './user';
import { DriveLogo, GoogleCalendarLogo, GoogleContactsLogo, GoogleKeepLogo, GoogleTasksLogo } from '@/components/icons';
import Providers from './providers';
import { SearchInput } from './search';
import { TbGridDots } from "react-icons/tb";
import UploadButton from './upload';

// TODO : Dark mode ui
export default function DashboardLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <Providers>
            <main className="flex min-h-screen w-full flex-col bg-[#F8FAFD]">
                <DesktopNav />
                <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-64">
                    <header className="sticky top-0 z-30  flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:pl-0 sm:pr-4">
                        <MobileNav />
                        <SearchInput />
                        <div className='md:flex-1'></div>
                        <FaRegCircleQuestion className="size-5 cursor-pointer" />
                        <Settings className="size-5 cursor-pointer" />
                        <TbGridDots className='size-5 cursor-pointer' />
                        <User />
                    </header>
                    <div className='flex'>
                        <main className="grid flex-1 min-h-[calc(100vh-100px)]  h-[calc(100vh-100px)] items-start gap-2 p-4 sm:px-6 sm:py-0 md:gap-4 bg-white rounded-xl">
                            {children}
                        </main>
                        <SideNavigation />
                    </div>
                </div>
            </main>
        </Providers>
    );
}



const DesktopNav = () => {

    return (
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-[250px] flex-col  bg-[#F8FAFD] sm:flex">
            <nav className="flex text-sm flex-col gap-1 px-4 sm:py-5">
                <Link
                    href="/"
                    className="group flex shrink-0 items-center gap-2 rounded-full text-lg font-semibold  md:h-8 md:w-8 md:text-base"
                >
                    <div className='flex items-center gap-3 mx-5'>
                        <DriveLogo className="h-8 w-8 transition-all group-hover:scale-110" />
                        <div className='font-normal'>Drive</div>
                    </div>
                </Link>

                <UploadButton />

                <Link
                    href="#"
                    className="flex items-center  gap-4 px-5 text-muted-foreground hover:text-foreground hover:bg-[#e0e3e7] hover:rounded-full h-8"
                >
                    <MdHomeFilled className="h-4 w-4" />
                    Home
                </Link>
                <Link
                    href="#"
                    className="flex items-center gap-4 px-5  text-foreground bg-[#C2E7FE] rounded-full h-8"
                >
                    <FaHardDrive className="h-3 w-3 mx-0.5" />
                    My Drive
                </Link>
                <Link
                    href="#"
                    className="flex items-center gap-4 mb-3 px-5 text-muted-foreground hover:text-foreground hover:bg-[#e0e3e7] hover:rounded-full h-8"
                >
                    <FaLaptopFile className='h-4 w-4' />
                    Computers
                </Link>
                <Link
                    href="#"
                    className="flex items-center gap-4 px-5 text-muted-foreground hover:text-foreground hover:bg-[#e0e3e7] hover:rounded-full h-8"
                >
                    <LuUsers className="h-4 w-4" />
                    Shared with me
                </Link>
                <Link
                    href="#"
                    className="flex items-center gap-4 px-5 text-muted-foreground hover:text-foreground hover:bg-[#e0e3e7] hover:rounded-full h-8"
                >
                    <FaRegClock className="h-4 w-4" />
                    Recent
                </Link>
                <Link
                    href="#"
                    className="flex items-center gap-4 mb-3 px-5 text-muted-foreground hover:text-foreground hover:bg-[#e0e3e7] hover:rounded-full h-8"
                >
                    <FaRegStar className="h-4 w-4" />
                    Starred
                </Link>
                <Link
                    href="#"
                    className="flex items-center gap-4 px-5 text-muted-foreground hover:text-foreground hover:bg-[#e0e3e7] hover:rounded-full h-8"
                >
                    <RiSpam2Line className="h-5 w-5" />
                    Spam
                </Link>
                <Link
                    href="#"
                    className="flex items-center gap-4 px-5 text-muted-foreground hover:text-foreground hover:bg-[#e0e3e7] hover:rounded-full h-8"
                >
                    <FaRegTrashCan className="h-4 w-4" />
                    Trash
                </Link>
                <Link
                    href="#"
                    className="flex items-center gap-4 px-5 text-muted-foreground hover:text-foreground hover:bg-[#e0e3e7] hover:rounded-full h-8"
                >
                    <MdOutlineCloud className="h-4 w-4" />
                    Storage
                </Link>

            </nav>

        </aside >
    );
}

const MobileNav = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button size="icon" variant="outline" className="sm:hidden">
                    <PanelLeft className="h-5 w-5" />
                    <span className="sr-only">Toggle Menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs p-0">
                <nav className="flex text-sm flex-col gap-1 px-4 sm:py-5">
                    <Link
                        href="/"
                        className="group flex shrink-0 items-center gap-2 mt-5 rounded-full text-lg font-semibold  md:h-8 md:w-8 md:text-base"
                    >
                        <div className='flex items-center gap-3 mx-5'>
                            <DriveLogo className="h-8 w-8 transition-all group-hover:scale-110" />
                            <div className='font-normal'>Drive</div>
                        </div>
                    </Link>

                    <UploadButton />

                    <Link
                        href="#"
                        className="flex items-center  gap-4 px-5 text-muted-foreground hover:text-foreground hover:bg-[#e0e3e7] hover:rounded-full h-8"
                    >
                        <MdHomeFilled className="h-4 w-4" />
                        Home
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-4 px-5  text-foreground bg-[#C2E7FE] rounded-full h-8"
                    >
                        <FaHardDrive className="h-3 w-3 mx-0.5" />
                        My Drive
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-4 mb-3 px-5 text-muted-foreground hover:text-foreground hover:bg-[#e0e3e7] hover:rounded-full h-8"
                    >
                        <FaLaptopFile className='h-4 w-4' />
                        Computers
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-4 px-5 text-muted-foreground hover:text-foreground hover:bg-[#e0e3e7] hover:rounded-full h-8"
                    >
                        <LuUsers className="h-4 w-4" />
                        Shared with me
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-4 px-5 text-muted-foreground hover:text-foreground hover:bg-[#e0e3e7] hover:rounded-full h-8"
                    >
                        <FaRegClock className="h-4 w-4" />
                        Recent
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-4 mb-3 px-5 text-muted-foreground hover:text-foreground hover:bg-[#e0e3e7] hover:rounded-full h-8"
                    >
                        <FaRegStar className="h-4 w-4" />
                        Starred
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-4 px-5 text-muted-foreground hover:text-foreground hover:bg-[#e0e3e7] hover:rounded-full h-8"
                    >
                        <RiSpam2Line className="h-5 w-5" />
                        Spam
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-4 px-5 text-muted-foreground hover:text-foreground hover:bg-[#e0e3e7] hover:rounded-full h-8"
                    >
                        <FaRegTrashCan className="h-4 w-4" />
                        Trash
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-4 px-5 text-muted-foreground hover:text-foreground hover:bg-[#e0e3e7] hover:rounded-full h-8"
                    >
                        <MdOutlineCloud className="h-4 w-4" />
                        Storage
                    </Link>

                </nav>
            </SheetContent>
        </Sheet>
    );
}

const SideNavigation = () => {
    return <div className='w-14 p-1 hidden md:flex md:justify-center'>
        <div className='space-y-8 flex flex-col'>
            <Button variant={"outline"} className='rounded-full border-0 size-10 bg-[#F8FAFD] hover:bg-[#e0e3e7]' size={"icon"}>
                <GoogleCalendarLogo className='size-6' />
            </Button>
            <Button variant={"outline"} className='rounded-full border-0 size-10 bg-[#F8FAFD] hover:bg-[#e0e3e7]' size={"icon"}>
                <GoogleKeepLogo className='size-5' />
            </Button>
            <Button variant={"outline"} className='rounded-full border-0 size-10 bg-[#F8FAFD] hover:bg-[#e0e3e7]' size={"icon"}>
                <GoogleTasksLogo className='size-5' />
            </Button>
            <Button variant={"outline"} className='rounded-full border-0 size-10 bg-[#F8FAFD] hover:bg-[#e0e3e7]' size={"icon"}>
                <GoogleContactsLogo className='size-5' />
            </Button>
        </div>
    </div>
}


