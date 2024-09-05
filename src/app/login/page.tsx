
import { Button } from '@/components/ui/button';
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from '@/components/ui/card';
import { redirect } from 'next/navigation'
import Urls from "@/redux/Urls"
import Image from 'next/image';

export default function LoginPage() {
    return (
        <div className="min-h-screen flex justify-center items-start md:items-center p-8">
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle className="text-2xl flex items-center justify-center gap-3">
                        <div>
                            <Image src={"/gdrive.svg"} alt="logo" width={100} height={100} className='size-10' />
                        </div>
                        Drive
                    </CardTitle>
                    <CardDescription>
                    </CardDescription>
                </CardHeader>
                <CardFooter>

                    <form
                        action={async () => {
                            'use server';
                            redirect(`${Urls.baseUrl}/auth/google`)
                        }}
                        className="w-full"
                    >

                        <Button className="w-full" >Sign in with Google</Button>
                    </form>
                </CardFooter>
            </Card>
        </div >
    );
}