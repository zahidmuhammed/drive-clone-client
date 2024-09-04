
import { Button } from '@/components/ui/button';
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from '@/components/ui/card';
import { redirect } from 'next/navigation'


export default function LoginPage() {
    return (
        <div className="min-h-screen flex justify-center items-start md:items-center p-8">
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle className="text-2xl">Login</CardTitle>
                    <CardDescription>
                        This demo uses Google for authentication.
                    </CardDescription>
                </CardHeader>
                <CardFooter>

                    <form
                        action={async () => {
                            'use server';
                            redirect("http://localhost:5000/auth/google")
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