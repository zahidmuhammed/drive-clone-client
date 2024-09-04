import { File, PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
// import { ProductsTable } from './products-table';
// import { getProducts } from '@/lib/db';

export default async function ProductsPage({
    searchParams
}: {
    searchParams: { q: string; offset: string };
}) {
    const search = searchParams.q ?? '';
    const offset = searchParams.offset ?? 0;
    //   const { products, newOffset, totalProducts } = await getProducts(
    //     search,
    //     Number(offset)
    //   );

    return (
        <div className='p-5'>
            {/* <div className="flex items-center ">
                <div className="ml-auto flex items-center gap-2">
                    <Button size="sm" className="h-8 gap-1">
                        <PlusCircle className="h-3.5 w-3.5" />
                        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                            Add Product
                        </span>
                    </Button>
                </div>
            </div> */}
            <div>content</div>
        </div>
    );
}