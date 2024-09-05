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
import { DriveLogo } from '@/components/icons';
import Providers from './providers';
import { SearchInput } from './search';
import { TbGridDots } from "react-icons/tb";
import UploadButton from './upload';


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
                    <main className="grid flex-1 min-h-[calc(100vh-100px)]  h-[calc(100vh-100px)] items-start gap-2 p-4 sm:px-6 sm:py-0 md:gap-4 bg-white rounded-xl">
                        {children}
                    </main>
                </div>
            </main>
        </Providers>
    );
}

function DesktopNav() {

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

function MobileNav() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button size="icon" variant="outline" className="sm:hidden">
                    <PanelLeft className="h-5 w-5" />
                    <span className="sr-only">Toggle Menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
                <nav className="grid gap-6 text-sm font-medium">
                    <Link
                        href="#"
                        className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-sm font-semibold text-primary-foreground md:text-base"
                    >
                        <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                        <span className="sr-only">Vercel</span>
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    >
                        <Home className="h-5 w-5" />
                        Dashboard
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    >
                        <ShoppingCart className="h-5 w-5" />
                        Orders
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-4 px-2.5 text-foreground"
                    >
                        <Package className="h-5 w-5" />
                        Products
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    >
                        <Users2 className="h-5 w-5" />
                        Customers
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    >
                        <LineChart className="h-5 w-5" />
                        Settings
                    </Link>
                </nav>
            </SheetContent>
        </Sheet>
    );
}

