'use client';

import { useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Spinner } from '@/components/icons';
import { Search } from 'lucide-react';
import { useAppDispatch } from '@/hooks/reduxHooks';
import { getFiles } from '@/redux/slices/filesSlice';
import { LuSlidersHorizontal } from "react-icons/lu";

export function SearchInput() {
    const router = useRouter();
    const dispatch = useAppDispatch()
    const [isPending, startTransition] = useTransition();

    const searchAction = (formData: FormData) => {
        let value = formData.get('q') as string;
        let params = new URLSearchParams({ q: value });
        startTransition(() => {
            router.replace(`/?${params.toString()}`);
        });

        dispatch(getFiles({ search: value }));
    }

    return (
        <form action={searchAction} className="relative ml-auto flex-1 md:grow-0">
            <Input
                name="q"
                type="search"
                placeholder="Search in Drive"
                className="w-full rounded-full bg-[#E9EEF6] md:h-12 pl-10 md:w-[200px] lg:w-[707px] focus-visible:drop-shadow focus-visible:bg-white focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <Search className="absolute left-4 top-[0.75rem] md:top-[1rem] h-4 w-4 " />
            <LuSlidersHorizontal className="absolute right-9 top-[0.75rem] md:top-[1rem] h-4 w-4 hidden md:flex" />
            {isPending && <Spinner />}
        </form>
    );
}