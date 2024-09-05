'use client';

import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from "@/components/ui/sonner"
import { Provider } from "react-redux";
import { store } from "@/redux/store";


export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <TooltipProvider>
                {children}
                <Toaster />
            </TooltipProvider>
        </Provider>
    )
}