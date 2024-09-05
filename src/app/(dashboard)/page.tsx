import { BsExclamationCircle } from "react-icons/bs";
import { TiArrowSortedDown } from "react-icons/ti";
import FilesList from './mydrive/files-list';

export default async function ProductsPage({
    searchParams
}: {
    searchParams: { q: string; offset: string };
}) {
    const search = searchParams.q ?? '';
    const offset = searchParams.offset ?? 0;

    return (
        <div className='py-3'>
            <div className='flex justify-between items-center'>
                <div className='text-xl flex items-center gap-2'>My Drive <TiArrowSortedDown className='size-4' /></div>
                <div><BsExclamationCircle className='size-5' /></div>
            </div>
            <FilesList />
        </div>
    );
}