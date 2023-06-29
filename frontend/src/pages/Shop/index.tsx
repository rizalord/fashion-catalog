import ProductCard from '../../components/Card/ProductCard'
import Pagination from '../../components/Pagination'
import FilterSection from '../../components/Section/FilterSection'
import { useAppDispatch } from '../../context/store/hooks'
import { toggleCategory } from '../../context/store/slices/categorySlice'

export default function Shop() {
    const dispatch = useAppDispatch()

    return <>
        {/* Breadcrumb */}
        <div className="container py-4 flex justify-between">
            <div className="flex gap-3 items-center">
                <a href="index.html" className="text-primary text-base">
                    <i className="fas fa-home"></i>
                </a>
                <span className="text-sm text-gray-400"><i className="fas fa-chevron-right"></i></span>
                <p className="text-gray-600 font-medium">Shop</p>
            </div>
        </div>
        {/* Breadcrumb */}

        <div className="container grid lg:grid-cols-4 gap-6 pt-4 pb-16 items-start relative">

            <FilterSection />

            <div className="col-span-3">


                <div className="grid lg:grid-cols-2 xl:grid-cols-3 sm:grid-cols-2 gap-6 mb-10">

                    <ProductCard />

                    <ProductCard />

                    <ProductCard />

                    <ProductCard />

                    <ProductCard />

                </div>

                <Pagination page={1} pageSize={10} pageCount={2} total={15}/>

            </div>

        </div>
    </>
}
