import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import qs from 'qs'

interface PaginationProps {
    page: number
    pageSize: number
    pageCount: number
    total: number
}

export default function Pagination({ page = 1, pageSize, pageCount, total }: PaginationProps) {
    const from = total === 0 ? 0 : (page - 1) * pageSize + 1
    const to = page * pageSize > total ? total : page * pageSize

    const navigate = useNavigate()
    const parsed = qs.parse(window.location.search, { ignoreQueryPrefix: true })

    const changePage = (page: number) => {
        parsed.page = page.toString()
        navigate(`?${qs.stringify(parsed)}`)
    }

    return (
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
            <div className="flex flex-1 justify-between sm:hidden">
                <a
                    href="#"
                    className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Previous
                </a>
                <a
                    href="#"
                    className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Next
                </a>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">{from}</span> to <span className="font-medium">{to}</span> of{' '}
                        <span className="font-medium">{total}</span> results
                    </p>
                </div>
                <div>
                    <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm gap-3" aria-label="Pagination">
                        {/* Show previous button */}
                        {
                            total !== 0 && page !== 1 && (
                                <button
                                    onClick={() => changePage(page - 1)}
                                    className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                >
                                    <span className="sr-only">Previous</span>
                                    <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                                </button>
                            )
                        }

                        {/* Show next button */}
                        {
                            total !== 0 && page !== pageCount && (
                                <button
                                    onClick={() => changePage(page + 1)}
                                    className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                >
                                    <span className="sr-only">Next</span>
                                    <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                                </button>
                            )
                        }
                    </nav>
                </div>
            </div>
        </div>
    )
}
