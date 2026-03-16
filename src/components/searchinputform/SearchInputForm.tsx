"use client"

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const SearchInputForm = () => {
    const [searchText, setSearchText] = useState("")
    const router= useRouter()
    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault();
        console.log(searchText)
        router.push(`/posts/searchResult?query=${searchText}`)
    }

    return (
        < form onSubmit={handleSubmit} className="space-y-6" >
            {/* search */}
            <div className="my-4 w-full md:w-2/3 mx-auto" >
                <input
                    id="search"
                    type="search"
                    placeholder="post"

                    value={searchText}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchText(e.target.value)}
                    className="px-4 py-2 rounded-lg border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-black dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                />
            </div >
        </form >
    )
}

export default SearchInputForm
